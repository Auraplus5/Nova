import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function UritusedPage() {
  return (
    <div className="min-h-screen bg-[#f7f6ed]">
      <Header />
      <div className="py-20 px-10">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
          ÜRITUSED
        </h1>
        <div className="justify-center items-center flex pt-10">
          <img
            src="/uritused_main.jpg"
            alt="Üritused"
            className="w-[1200px] h-[550px] object-cover object-bottom rounded-xl"
          />
        </div>
          <h1 className="font-bold p-2 mt-10 text-center text-3xl">Hetkel ei ole toimuvaid üritusi</h1>
      </div>
      <Footer />
    </div>
  );
}
