import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const { name, company, email, message, formType = 'try-leadlex' } = await req.json();
    const base44 = createClientFromRequest(req);
    
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
    `.trim();

    // Send emails to both admins
    for (const adminEmail of adminEmails) {
      await base44.asServiceRole.integrations.Core.SendEmail({
        from_name: 'LeadLex',
        to: adminEmail,
        subject: emailSubject,
        body: emailBody
      });
    }
    
    return Response.json({
      success: true
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});