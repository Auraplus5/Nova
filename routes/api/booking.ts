import { Handlers } from "$fresh/server.ts";
import db from "../../lib/db.ts";

export const handler: Handlers = {
    async POST(req) {
        const { name, email, timetable_id } = await req.json();

        if (!name || !timetable_id || !email) {
            return new Response("Missing fields", { status: 400 });
        }
        await db.queryObject(
            `INSERT INTO booking (name, email, timetable_id) VALUES ($1, $2, $3)`,
            [name, email, timetable_id]
        );
        return new Response("Booking created", {status: 200});
    }
}