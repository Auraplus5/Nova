import { Handlers } from "$fresh/server.ts";
import db from "../../lib/supabase.ts";

export const handler: Handlers = {
    async GET(req) {
        const url = new URL(req.url);
        const start = url.searchParams.get("start");
        const end = url.searchParams.get("end");

        // Validate input
        if (!start || !end) {
            return new Response("Missing start or end date", { status: 400 });
        }

        const { data, error } = await db
            .from("timetable")
            .select("*")
            .gte("date", start)
            .lte("date", end)
            .order("date", { ascending: true });
        if (error) {
            console.error("Error fetching timetable:", error);
            return new Response("Error fetching timetable", { status: 500 });
        }

        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
};