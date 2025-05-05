import { Handlers, PageProps } from "$fresh/server.ts";
import db from "../../lib/supabase.ts";
import FormCheck from "../../islands/FormCheck.tsx";
import Header from "../../components/Header.tsx";
import { getSessionUser } from "../../lib/auth.ts";
import TimetableActions from "../../islands/TimetableActions.tsx";
import BookingActions from "../../islands/BookingActions.tsx";
import Footer from "../../components/Footer.tsx";


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


        const { user, role  } = await getSessionUser(req);


        if(role !== "admin") {
            return new Response(null, {
                status: 303,
                headers: { Location: "/" },
            });
        }
        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }

        if (!instructor || !classname || !date || !start_time || !end_time || !price || !max_bookings || !type) {
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
            return new Response("Class already exists at this date and time", { status: 400 });
        }

        const classDateTime = new Date(`${date}T${start_time}`);
        const currentDateTime = new Date();

        if (classDateTime < currentDateTime) {
            return new Response("Cannot create a class in the past", { status: 400 });
        }
        if (start_time >= end_time) {
            return new Response("Start time must be before end time", { status: 400 });
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
        const { user, role, first_name  } = await getSessionUser(req);


        if(role !== "admin") {
            return new Response(null, {
                status: 303,
                headers: { Location: "/" },
            });
        }


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

        return ctx.render({timetable, instructors, bookings, user, role, first_name,
            selectedInstructor: instructor, selectedDate: date});
    },

    async PUT(req) {

        const { user, role  } = await getSessionUser(req);

        if(role !== "admin") {
            return new Response(null, {
                status: 303,
                headers: { Location: "/" },
            });
        }
        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }
        const body = await req.json();
        const {instructor, id, classname, date, start_time, end_time, price, max_bookings, type} = body;

        if (!id || !classname || !date || !start_time || !end_time || !price || !max_bookings || !type || !instructor) {
            return new Response("Missing fields", { status: 400 });
        }

        const { data: existing, error: fetchError } = await db
            .from("timetable")
            .select("*")
            .eq("date", date)
            .eq("start_time", start_time)
            .neq("id", id);

        if (fetchError) {
            console.error("Error checking existing class:", fetchError);
            return new Response("Error checking existing class", { status: 500 });
        }

        if (existing && existing.length > 0) {
            return new Response("Class already exists at this date and time", { status: 400 });
        }

        const classDateTime = new Date(`${date}T${start_time}`);
        const currentDateTime = new Date();

        if(classDateTime < currentDateTime) {
            return new Response("Cannot update a class in the past", { status: 400 });
        }

        if (classDateTime < currentDateTime) {
            return new Response("Cannot create a class in the past", { status: 400 });
        }
        if (start_time >= end_time) {
            return new Response("Start time must be before end time", { status: 400 });
        }



        const updateFields: Record<string, unknown> = {};
        if (instructor) updateFields.instructor = instructor;
        if (classname) updateFields.classname = classname;
        if (date) updateFields.date = date;
        if (start_time) updateFields.start_time = start_time;
        if (end_time) updateFields.end_time = end_time;
        if (price) updateFields.price = price;
        if (max_bookings) updateFields.max_bookings = max_bookings;
        if (type) updateFields.type = type;

        const { error } = await db.from("timetable").update(updateFields).eq("id", id);

        if (error) {
            console.error("Update error:", error.message);
            return new Response("Failed to update class", { status: 500 });
        }

        return new Response("Updated", { status: 200 });
    },
    async DELETE(req) {

        const { user, role } = await getSessionUser(req);

        if (role !== "admin") {
            return new Response(null, {
                status: 303,
                headers: { Location: "/" },
            });
        }

        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }

        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return new Response("Missing ID", { status: 400 });
        }

        const { error } = await db.from("timetable").delete().eq("id", id);

        if (error) {
            console.error("Delete error:", error.message);
            return new Response("Failed to delete class", { status: 500 });
        }

        return new Response("Deleted", { status: 200 });
    }


};

export default function AdminTimetablePage({data}: PageProps<{timetable: Timetable[];
    instructors: { instructor: string}[];
    bookings: { id:number, name: string; email: string; timetable_id: number }[];
    selectedInstructor: string | null;
    selectedDate: string | null;
    first_name: string;
    user: any, role: string}>) {
    return (
        <div class="min-h-screen bg-gray-100 max-w mx-auto">
            <Header user={data.user} role={data.role} first_name={data.first_name}/>
            <div class="max-w-xl mx-auto">
                <h1 class="text-3xl font-bold mb-6 text-center">Lisa tund tunniplaani</h1>
                <FormCheck/>
            </div>
            <div>
                <form method="GET" className="max-w-md mx-auto m-6">
                    <select
                        name="instructor"
                        value={data.selectedInstructor ?? ""}
                        className="w-full p-2 border border-gray-400 rounded"
                    >
                        <option value="">Kõik juhendajad</option>
                        {[...new Set(data.instructors.map((ins: { instructor: string }) => ins.instructor))].map((instructor) => (
                            <option key={instructor} value={instructor}>
                                {instructor}
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
                                <td className="border-b p-4">{timetable.instructor}</td>
                                <td className="border-b p-4">{timetable.classname}</td>
                                <td className="border-b p-4">{new Date(timetable.date).toLocaleDateString()}</td>
                                <td className="border-b p-4">{timetable.start_time}</td>
                                <td className="border-b p-4">{timetable.end_time}</td>
                                <td className="border-b p-4">{timetable.price} €</td>
                                <td className="border-b p-4">{timetable.type}</td>
                                <td className="border-b p-4">
                                    {bookings.length > 0 ? (
                                        <ul>
                                            {bookings.map((booking) => (
                                                <BookingActions key={booking.id} booking={booking} role={data.role}/>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Broneeringud puuduvad</p>
                                    )}
                                </td>
                                <TimetableActions id={timetable.id} currentData={timetable} />
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>

    );
}
