import { Handlers } from "$fresh/server.ts";
import db from "../../lib/supabase.ts";
import { getSessionUser } from "../../lib/auth.ts";

export const handler: Handlers = {
    async POST(req) {
        const { name, email, timetable_id } = await req.json();

        if (!name || !timetable_id || !email) {
            return new Response("Missing fields", { status: 400 });
        }

        // Check if the booking already exists
        const { data: existing, error: fetchError } = await db
            .from("booking")
            .select("*")
            .eq("timetable_id", timetable_id)
            .eq("email", email);

        if (fetchError) {
            console.error("Error checking existing booking:", fetchError);
            return new Response(JSON.stringify({message: "Error checking existing booking"}),
                { status: 500, headers: { "Content-Type": "application/json" } });
        }
        if (existing && existing.length > 0) {
            return new Response(JSON.stringify({ message: "Broneering selle e-mailiga on juba tehtud!" }),
                { status: 409, headers: { "Content-Type": "application/json" } });
        }


        const { data, error } = await db
            .from("booking")
            .insert([
                {
                    name,
                    email,
                    timetable_id,
                },
            ]);
        if (error) {
            return new Response("Error creating booking", { status: 500 });
        }
        {/*
        const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "api-key": Deno.env.get("BREVO_API_KEY")!,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sender: {
                    name: "Nova Tervise Stuudio",
                    email: "kevinalak@gmail.com",
                },
                to: [
                    {
                        email: email,
                        name: name,
                    },
                ],
                subject: "Broneering kinnitatud",
                htmlContent: `<h3>Tere, ${name}!</h3>
                <p>Teie broneering on kinnitatud.</p>
                <p>Kohtumiseni tunnis. Kui sul on küsimusi, võta meiega ühendust.</p>
                <br/>
                <p>Nova Tervise Stuudio</p>
                `,
            }),
        });

        if (!emailResponse.ok) {
            console.error("Error sending email:", await emailResponse.text());
            return new Response("Error sending confirmation email", { status: 500 });
        }
        */}
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },

    async GET(req) {
        const {user, role } = await getSessionUser(req);
        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }
        if (role !== "admin") {
            return new Response("Forbidden", { status: 403 });
        }

        const { data, error } = await db.from("booking").select("*");
        if (error) {
            console.error("Error fetching bookings:", error);
            return new Response("Error fetching bookings", { status: 500 });
        }
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
    async DELETE(req) {
        const {user, role } = await getSessionUser(req);
        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return new Response("Missing ID", { status: 400 });
        }

        const { data: booking, error: fetchError } = await db
            .from("booking")
            .select("id", "email")
            .eq("id", id)
            .single();

        if (fetchError || !booking) {
            console.error("Error fetching booking:", fetchError);
            return new Response("Error fetching booking", { status: 500 });
        }

        const isAdmin = role === "admin";
        const isOwner = booking.email === user.email;

        if (!isAdmin && !isOwner) {
            return new Response("Forbidden", { status: 403 });
        }

        const { error } = await db.from("booking").delete().eq("id", id);
        if (error) {
            console.error("Error deleting booking:", error);
            return new Response("Error deleting booking", { status: 500 });
        }

        return new Response("Booking deleted successfully", { status: 200 });
    },
}