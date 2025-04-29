import { h } from "preact";
import BookingCalendar from "../islands/BookingCalendar.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function BookingPage() {
  return (
    <div class="flex flex-col min-h-screen bg-[#f7f6ed]">
      <Header />
      <div className="flex-1">
        <div className="py-20 px-10">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
            TUNNIPLAAN
          </h1>
          <div className="justify-center items-center flex pt-10">
            <p className="max-w-3xl p-10 border rounded-3xl text-center text-lg text-gray-700">
              Meie stuudio üritab pakkuda igale inimesele sobivat programmi.
              Kasutame nii dünaamilisi stiile nagu Hatha, Vinyasa ja Ashtanga
              Vinyasa jooga kui ka rahulikumaid versioone Yin, Nidra jooga ja
              meditatsiooni.
            </p>
          </div>
        </div>
        <BookingCalendar />
      </div>
      <Footer />
    </div>
  );
}
