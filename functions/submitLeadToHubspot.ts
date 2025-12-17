import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const { name, company, email, message, formType = 'try-leadlex' } = await req.json();
    
    // Create base44 client
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
      try {
        await base44.asServiceRole.integrations.Core.SendEmail({
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
      success: true
    });
  } catch (error) {
    console.error('Function error:', error);
    return Response.json({ error: error.message || 'Failed to submit form' }, { status: 500 });
  }
});