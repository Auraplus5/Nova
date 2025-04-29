import { useSignal } from "@preact/signals";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Button from "../components/Button.tsx";
import ToggleDiv from "../islands/ToggleDiv.tsx";



export default function Home() {
  return (
    <div class="min-h-screen bg-[#f7f6ed]">
      <div
          className="h-screen bg-fixed bg-cover bg-center"
          style="background-image: url('/main_pic.jpg');"
      >
        <div className="text-white absolute top-0 left-0 w-full">
          <Header/>
        </div>
        <div className="absolute inset-x-0 bottom-[20%] flex flex-col items-center justify-center z-10">
          <h2 className="text-2xl text-white font-serif font-bold mb-10">Nova Tervise Stuudio</h2>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10">
            Rahusta meelt ja vabasta keha
          </h2>
          <Button href="/tunniplaan" variant="primary">Broneeri aeg</Button>
        </div>
      </div>

        <Footer/>
    </div>
  );
}
