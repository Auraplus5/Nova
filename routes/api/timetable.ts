import { Handlers } from "$fresh/server.ts";
import db from "../../lib/db.ts";

export const handler: Handlers = {
    async GET(req) {
        const url = new URL(req.url);
        const start = url.searchParams.get("start");
        const end = url.searchParams.get("end");

        // Validate input
        if (!start || !end) {
            return new Response("Missing start or end date", { status: 400 });
        }

        try {
            const result = await db.queryObject<{
                id: number;
                instructor: string;
                classname: string;
                date: string;
                start_time: string;
                end_time: string;
            }>(
                `SELECT * FROM timetable WHERE date BETWEEN $1 AND $2 ORDER BY date ASC`,
                [start, end]
            );

            return new Response(JSON.stringify(result.rows), {
                headers: { "Content-Type": "application/json" },
            });
        } catch (err) {
            console.error("DB query failed:", err);
            return new Response("Internal server error", { status: 500 });
        }
    },
};