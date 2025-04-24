import { Handlers, PageProps } from "$fresh/server.ts";
import db from "../../lib/db.ts";

export const handler: Handlers = {
    async POST(req, ctx) {
        const form = await req.formData();
        const instructor = form.get("instructor")?.toString();
        const className = form.get("className")?.toString();
        const date = form.get("date")?.toString();
        const start_time = form.get("start_time")?.toString();
        const end_time = form.get("end_time")?.toString();


        if (!instructor || !className || !date) {
            return new Response("Missing fields", { status: 400 });
        }

        await db.queryObject(
            "INSERT INTO timetable (instructor, className, date, start_time, end_time) VALUES ($1, $2, $3, $4, $5)",
            [instructor, className, date, start_time, end_time],
        );

        return new Response(null, {
            status: 303,
            headers: { Location: "/admin/timetable" },
        });
    },
};

export default function AdminTimetablePage() {
    return (
        <div class="min-h-screen bg-gray-100 p-10 max-w-xl mx-auto">
            <h1 class="text-3xl font-bold mb-6 text-center">Lisa tund tunniplaani</h1>
            <form method="POST" class="flex flex-col gap-4 bg-white p-6 rounded shadow">
                <input
                    type="text"
                    name="instructor"
                    placeholder="Juhendaja nimi"
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="className"
                    placeholder="Tunni nimi"
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="date"
                    name="date"
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="time"
                    name="start_time"
                    placeholder="algusaeg"
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="time"
                    name="end_time"
                    placeholder="lõppaeg"
                    required
                    className="p-2 border rounded"
                />
                <button
                    type="submit"
                    class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Lisa tund
                </button>
            </form>
        </div>
    );
}
