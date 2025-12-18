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
    
    // Add message to notes field if provided
    if (message) {
      contactData.properties.hs_note = message;
    }

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
    
    // Send admin notification emails
    const adminEmails = ['alexander@leadip.io', 'winston@leadip.io'];
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

    // Send emails to both admins
    for (const adminEmail of adminEmails) {
      try {
        await base44.integrations.Core.SendEmail({
          from_name: 'LeadLex',
          to: adminEmail,
          subject: emailSubject,
          body: emailBody
        });
      } catch (emailError) {
        console.error(`Failed to send email to ${adminEmail}:`, emailError);
        // Continue to next email even if one fails
      }
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