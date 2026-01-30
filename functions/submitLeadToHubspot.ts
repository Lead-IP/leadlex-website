import { createClient } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const { name, company, email, message, formType = 'try-leadlex' } = await req.json();
    
    // Create base44 client with service role for public form
    const base44 = createClient(
      Deno.env.get('BASE44_APP_ID'),
      Deno.env.get('SUPABASE_URL'),
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    );
    
    const hubspotApiKey = Deno.env.get('HUBSPOT_API_KEY');
    
    if (!hubspotApiKey) {
      return Response.json({ error: 'HubSpot API key not configured' }, { status: 500 });
    }

    // Create contact in HubSpot
    const contactData = {
      properties: {
        email: email,
        firstname: name.split(' ')[0] || name,
        lastname: name.split(' ').slice(1).join(' ') || '',
        company: company,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead'
      }
    };

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${hubspotApiKey}`
      },
      body: JSON.stringify(contactData)
    });

    if (!response.ok) {
      const error = await response.text();
      return Response.json({ error: `HubSpot API error: ${error}` }, { status: 500 });
    }

    const result = await response.json();
    
    // Create a note if message is provided
    if (message) {
      try {
        const noteData = {
          properties: {
            hs_note_body: message,
            hs_timestamp: new Date().getTime()
          },
          associations: [
            {
              to: { id: result.id },
              types: [
                {
                  associationCategory: "HUBSPOT_DEFINED",
                  associationTypeId: 202
                }
              ]
            }
          ]
        };
        
        await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${hubspotApiKey}`
          },
          body: JSON.stringify(noteData)
        });
      } catch (noteError) {
        console.error('Failed to create note:', noteError);
        // Continue even if note creation fails
      }
    }
    
    // Send notification email via Gmail
    const formTypeLabel = formType === 'contact' ? 'Get in Touch' : 'Try LeadLex';
    
    const emailSubject = `New ${formTypeLabel} Form Submission`;
    const emailBody = `
New form submission received:

Form Type: ${formTypeLabel}
Name: ${name}
Company: ${company}
Email: ${email}
${message ? `Message: ${message}` : ''}

HubSpot Contact ID: ${result.id}
    `.trim();

    // Get Gmail access token
    const gmailToken = await base44.asServiceRole.connectors.getAccessToken('gmail');
    
    // Create email in RFC 2822 format
    const emailContent = [
      'Content-Type: text/plain; charset="UTF-8"',
      'MIME-Version: 1.0',
      'To: alexander@leadip.io',
      `Subject: ${emailSubject}`,
      '',
      emailBody
    ].join('\r\n');
    
    // Encode email to base64url (Deno compatible)
    const encoder = new TextEncoder();
    const data = encoder.encode(emailContent);
    const base64 = btoa(String.fromCharCode(...data));
    const encodedEmail = base64
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    // Send via Gmail API
    const gmailResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${gmailToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw: encodedEmail })
    });
    
    if (!gmailResponse.ok) {
      const gmailError = await gmailResponse.text();
      console.error('Gmail API error:', gmailError);
    }
    
    return Response.json({
      success: true,
      contactId: result.id
    });
  } catch (error) {
    console.error('Function error:', error);
    return Response.json({ error: error.message || 'Failed to submit form' }, { status: 500 });
  }
});