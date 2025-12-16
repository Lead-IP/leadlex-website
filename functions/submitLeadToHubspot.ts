Deno.serve(async (req) => {
  try {
    const { name, company, email, message } = await req.json();
    
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
        message: message,
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
    
    return Response.json({
      success: true,
      contactId: result.id
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});