import { Handlers, PageProps } from "$fresh/server.ts";
import db from "../../lib/supabase.ts";
import { getSessionUser } from "../../lib/auth.ts";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import BookingActions from "../../islands/BookingActions.tsx";

interface Booking {
  id: number;
  name: string;
  email: string;
  timetable_id: number;
  timetable: {
    classname: string;
    date: string;
    start_time: string;
    end_time: string;
    price: number;
  };
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const { user, role, first_name } = await getSessionUser(req);
    if (!user) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/" },
      });
    }
    const { data: bookings, error } = await db
      .from("booking")
      .select(
        "id, name, email, timetable_id, timetable(classname, date, start_time, end_time, price)",
      )
      .eq("email", user.email);
    if (error) {
      console.error("Error fetching bookings:", error);
      return new Response("Error fetching bookings", { status: 500 });
    }
    return ctx.render({ user, bookings, role, first_name });
  },
  async DELETE(req, ctx) {
    const { user } = await getSessionUser(req);
    if (!user) {
      return new Response("Not logged in", { status: 401 });
    }
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response("Missing ID", { status: 400 });
    }
    const { error } = await db.from("booking").delete().eq("id", id);
    if (error) {
      console.error("Error deleting booking:", error);
      return new Response("Error deleting booking", { status: 500 });
    }
    return ctx.render({ user });
  },
};


export default function UserPage(
  { data }: PageProps<
    { user: any; bookings: Booking[]; first_name: string; role: string; }
  >,
) {
  const today = new Date();
  const upcomingBookings = data.bookings.filter((booking) => {
    const combinedDateTime = `${booking.timetable.date}T${booking.timetable.end_time}`;
    const bookingDate = new Date(combinedDateTime);
    return bookingDate >= today;
  });
  return (
    <>
      <div className="min-h-screen bg-[#f7f6ed]">
        <Header
          user={data.user}
          first_name={data.first_name}
          role={data.role}
        />

        <h1 className="lg:text-4xl md:text-3xl text-xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
          Teie broneeringud
        </h1>
        {upcomingBookings.length === 0
          ? <p className="text-center text-2xl py-10">Broneeringuid ei ole.</p>
          : (
            <div className="lg:max-w-2xl max-w-md mx-auto py-10">
              {upcomingBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white shadow rounded p-4 border"
                >
                  <p>
                    <strong>Tund:</strong> {booking.timetable.classname}
                  </p>
                  <p>
                    <strong>Kuupäev:</strong>{" "}
                    {new Date(booking.timetable.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Algus:</strong>{" "}
                    {booking.timetable.start_time.slice(0, 5)}
                  </p>
                  <p>
                    <strong>Lõpp:</strong>{" "}
                    {booking.timetable.end_time.slice(0, 5)}
                  </p>
                  <p>
                    <strong>Hind:</strong> {booking.timetable.price} €
                  </p>
                  <div className="mt-2">
                    <BookingActions booking={booking} />
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
      <Footer />
    </>
  );
}
