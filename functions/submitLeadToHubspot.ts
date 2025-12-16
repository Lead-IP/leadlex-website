export default async function submitLeadToHubspot({ name, company, email, message }) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;
  
  if (!hubspotApiKey) {
    throw new Error('HubSpot API key not configured');
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
    throw new Error(`HubSpot API error: ${error}`);
  }

  const result = await response.json();
  
  return {
    success: true,
    contactId: result.id
  };
}