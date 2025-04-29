import { Handlers } from "$fresh/server.ts";
import db from "../../lib/supabase.ts";

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
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
    async GET() {
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
    }
}