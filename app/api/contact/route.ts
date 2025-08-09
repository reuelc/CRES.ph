export async function POST(req: Request) {
  try {
    const payload = await req.json()
    // Integrate with your email service or CRM here (Resend, SendGrid, etc.).
    console.log("Contact message:", payload)
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }
}
