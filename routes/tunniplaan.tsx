import { h } from "preact";
import BookingCalendar from "../islands/BookingCalendar.tsx";
import Header from "../components/Header.tsx";

export default function BookingPage() {
  return (
    <div class="min-h-screen bg-gray-50 py-10 px-4">
      <BookingCalendar />
    </div>
  );
}
