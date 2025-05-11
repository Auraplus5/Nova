import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();

    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": Deno.env.get("BREVO_API_KEY")!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Kontaktivorm",
          email: "kevinalak@gmail.com", // must be a verified sender in Brevo
        },
        to: [
          {
            email: "kevinalak@gmail.com", // your receiving email
            name: "Kevin",
          },
        ],
        subject: `Uus kontaktivorm - ${name}`,
        htmlContent: `
          <h3>Uus sõnum kontaktivormilt</h3>
          <p><strong>Saatja:</strong> ${name} (${email})</p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Brevo error:", error);
      return new Response("Email failed", { status: 500 });
    }

    return new Response(null, {
      status: 303,
      headers: { Location: "/" },
    });
  },
};
