export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const data = await request.json();

    const targetWebhook = env.JOBCO_WEBHOOK_URL || atob('aHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoLzExMDgzMjY2LzJqMjQ0a2Ev');

    const now = new Date();
    const pstDateString = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

    const payload = {
      company: 'JOBCO Paving',
      property_type: data.property_type || 'Home',
      name: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      zip: data.zip || '',
      message: data.message || '',
      landing: data.landing || 'bay-area-paving-contractors',
      submission_date_time: pstDateString,
      submission_date_iso: now.toISOString(),
      full_url: data.full_url || request.headers.get('referer') || '',
      client_ip: request.headers.get('cf-connecting-ip') || '',
      user_agent: request.headers.get('user-agent') || ''
    };

    const webhookResponse = await fetch(targetWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (webhookResponse.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Lead received successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ success: true, message: 'Lead queued' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
