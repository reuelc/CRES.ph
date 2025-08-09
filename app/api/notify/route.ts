export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    // In production, forward to your email/CRM provider here.
    console.log("Coming Soon notify:", email)
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }
}
