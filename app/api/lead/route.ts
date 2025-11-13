export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log("[Steadwell Lead] New inquiry received:", {
      timestamp: new Date().toISOString(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      helpType: body.helpType,
      situation: body.situation,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("[Steadwell Lead] Error processing lead:", error)
    return Response.json({ success: false, error: "Failed to process request" }, { status: 500 })
  }
}
