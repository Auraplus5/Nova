import { Handlers, PageProps } from "$fresh/server.ts";
import db from "../../lib/supabase.ts";

interface Timetable {
    id: number;
    instructor: string;
    classname: string;
    date: string;
    start_time: string;
    end_time: string;
    max_bookings: number;
    price: number;
    type: string;
}

export const handler: Handlers = {
    async POST(req) {
        const form = await req.formData();
        const instructor = form.get("instructor")?.toString();
        const classname = form.get("classname")?.toString();
        const date = form.get("date")?.toString();
        const start_time = form.get("start_time")?.toString();
        const end_time = form.get("end_time")?.toString();
        const price = form.get("price")?.toString();
        const max_bookings = form.get("max_bookings")?.toString();
        const type = form.get("type")?.toString();



        if (!instructor || !classname || !date) {
            return new Response("Missing fields", { status: 400 });
        }
        const { data: existing, error: fetchError } = await db
            .from("timetable")
            .select("*")
            .eq("date", date)
            .eq("start_time", start_time)

        if (fetchError) {
            console.error("Error checking existing class:", fetchError);
            return new Response("Error checking existing class", { status: 500 });
        }

        if (existing && existing.length > 0) {
            return new Response("Class already exists at this date and time", { status: 409 });
        }

        const { error } = await db.from("timetable").insert([
            {
                instructor,
                classname,
                date,
                start_time,
                end_time,
                max_bookings,
                price,
                type,
            },
        ]);

        if (error) {
            console.error("Insert error:", error.message);
            return new Response("Failed to insert class", { status: 500 });
        }

        return new Response(null, {
            status: 303,
            headers: { Location: "/admin/timetable" },
        });
    },
    async GET(req, ctx) {
        const url = new URL(req.url);
        const instructor = url.searchParams.get("instructor") || "";
        const date = url.searchParams.get("date") || "";

        const timetableQuery = db
            .from("timetable")
            .select("*")
            .order("date", { ascending: true });

        const bookingQuery = db
            .from("booking")
            .select("*");

        if (instructor) {
            timetableQuery.eq("instructor", instructor);
        }

        if (date) {
            timetableQuery.eq("date", date);
        }

        const { data: timetable, error } = await timetableQuery;

        if (error) {
            console.error("Error fetching timetable:", error);
            return new Response("Error fetching timetable", { status: 500 });
        }

        const { data: instructors } = await db
            .from("timetable")
            .select("instructor")

        const { data: bookings, error: bookingsError } = await bookingQuery;

        if(bookingsError) {
            console.error("Error fetching bookings:", bookingsError);
            return new Response("Error fetching bookings", { status: 500 });
        }

        return ctx.render({timetable, instructors, bookings,
            selectedInstructor: instructor, selectedDate: date});
    },


};

export default function AdminTimetablePage({data}: PageProps<{timetable: Timetable[];
    instructors: { instructor: string}[];
    bookings: { name: string; email: string; timetable_id: number }[];
    selectedInstructor: string | null;
    selectedDate: string | null}>){
    return (
        <div class="min-h-screen bg-gray-100 p-10 max-w mx-auto">
            <div class="max-w-xl mx-auto">
                <h1 class="text-3xl font-bold mb-6 text-center">Lisa tund tunniplaani</h1>
                <form method="POST" className="flex flex-col gap-4 bg-white p-6 rounded shadow">
                    <input
                        type="text"
                        name="instructor"
                        placeholder="Juhendaja nimi"
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="classname"
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
                    <input
                        type="number"
                        name="max_bookings"
                        placeholder="Maksimaalne broneeringute arv"
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Hind"
                        required
                        className="p-2 border rounded"
                    />
                    <select
                        name="type"
                        required
                        className="p-2 border rounded"
                    >
                        <option value="">Vali registreeringu tüüp</option>
                        <option value="Tund">Tund</option>
                        <option value="Üritus">Üritus</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        Lisa tund
                    </button>
                </form>
            </div>
            <div>
                <form method="GET" className="max-w-md mx-auto m-6">
                    <select
                        name="instructor"
                        value={data.selectedInstructor ?? ""}
                        className="w-full p-2 border border-gray-400 rounded"
                    >
                        <option value="">Kõik juhendajad</option>
                        {data.instructors.map((ins: { instructor: string }) => (
                            <option value={ins.instructor} selected={data.selectedInstructor === ins.instructor}>
                                {ins.instructor}
                            </option>
                        ))}
                    </select>
                    <input
                        type="date"
                        name="date"
                        value={data.selectedDate ?? ""}
                        className="w-full p-2 border border-gray-400 rounded mt-2"
                    />

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                    >
                        Filtreeri
                    </button>
                </form>
                <h2 class="text-2xl font-bold mt-10 mb-4 text-center">Tunniplaan</h2>
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr>
                        <th class="border-b p-4 text-left">Juhendaja</th>
                        <th class="border-b p-4 text-left">Tunni nimi</th>
                        <th class="border-b p-4 text-left">Kuupäev</th>
                        <th class="border-b p-4 text-left">Algusaeg</th>
                        <th class="border-b p-4 text-left">Lõppaeg</th>
                        <th class="border-b p-4 text-left">Hind</th>
                        <th class="border-b p-4 text-left">Tüüp</th>
                        <th class="border-b p-4 text-left">Broneeringud</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.timetable.map((timetable) => {
                        const bookings = data.bookings.filter(
                            (booking) => booking.timetable_id === timetable.id
                        );
                        return(
                        <tr key={timetable.id}>
                            <td class="border-b p-4">{timetable.instructor}</td>
                            <td class="border-b p-4">{timetable.classname}</td>
                            <td class="border-b p-4">{new Date(timetable.date).toLocaleDateString()}</td>
                            <td class="border-b p-4">{timetable.start_time}</td>
                            <td class="border-b p-4">{timetable.end_time}</td>
                            <td class="border-b p-4">{timetable.price} €</td>
                            <td class="border-b p-4">{timetable.type}</td>
                            <td class="border-b p-4">
                                {bookings.length > 0 ? (
                                    <ul>
                                        {bookings.map((booking) => (
                                            <li key={booking.timetable_id}>
                                                {booking.name} ({booking.email})
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Broneeringud puuduvad</p>
                                )}
                            </td>
                        </tr>
                    );
                    })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
