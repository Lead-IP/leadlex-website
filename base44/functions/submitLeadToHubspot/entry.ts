import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  const { name, company, email, message, formType = 'try-leadlex' } = await req.json();

  // Create base44 client
  const base44 = createClientFromRequest(req);

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
    return Response.json({ error: `Failed to send email: ${gmailError}` }, { status: 500 });
  }

  return Response.json({
    success: true
  });
});