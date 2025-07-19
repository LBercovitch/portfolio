export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    // Allow only your site in production:
    const allowedOrigins = [
      "http://localhost:5173",
      "https://lbercovitch.github.io"
    ];

    const isAllowedOrigin = allowedOrigins.includes(origin);

    const corsHeaders = {
      "Access-Control-Allow-Origin": isAllowedOrigin ? origin : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          ...corsHeaders,
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body = await request.json();
      const { name, email, message, token } = body;

      // Verify Turnstile
      const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET,
          response: token
        }),
      });

      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return new Response("Failed Turnstile verification", {
          status: 400,
          headers: corsHeaders
        });
      }

      // Send email via Resend (or replace with your own provider)
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: env.EMAIL_TO,
          subject: "Portfolio website contact",
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong> ${message}</p>`
        })
      });

      if (!emailRes.ok) {
        return new Response("Email send failed", {
          status: 500,
          headers: corsHeaders
        });
      }

      return new Response("Message sent successfully", {
        status: 200,
        headers: corsHeaders
      });
    } catch (err) {
      return new Response("Invalid request", {
        status: 400,
        headers: corsHeaders
      });
    }
  }
};
