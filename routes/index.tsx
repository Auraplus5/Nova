import { useSignal } from "@preact/signals";
import { h } from "preact";
import Header from "../components/Header.tsx";
import Button from "../components/Button.tsx";

export default function Home() {
  return (
    <div class="min-h-screen">
      <div
          className="h-screen bg-fixed bg-cover bg-center"
          style="background-image: url('/main_pic.jpg');"
      >
        <div className="absolute top-0 left-0 w-full">
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
      <div class="mx-auto flex flex-col items-center justify-center py-10 bg-[#fff7ed]">
        <div class="max-w-screen-md text-center py-10">
          <p class="py-3 text-2xl font-serif">
            Ära ütle joogale ei, leia endale sobiv tund.
          </p>
          <p class="text-2xl mb-10 font-serif">
            Peale tundi saab nautida ayurveda teed.
          </p>
        </div>
        <div class="container flex mx-auto items-center justify-center px-4 py-10">
          <ul class="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-10 justify-center">
          <li class="rounded-2xl outline outline-2 outline-gray-400">
              <img
                  src="/ashtanga.jpg"
                  class="w-[300px] h-[400px] rounded-t-2xl object-cover"
              />
              <div class="p-4 h-[160px] w-[300px] flex flex-col justify-between">
                <h2 class="font-bold text-lg text-center">ASHTANGA VINYASA JOOGA</h2>
                <p class="text-sm text-center">
                  Dünaamiline joogastiil, mis ühendab liikumise ja hingamise.
                </p>
              </div>
            </li>
            <li class="rounded-2xl outline outline-2 outline-gray-400">
              <img src="/yin_jooga.jpg"
                   class="w-[300px] h-[400px] rounded-t-2xl object-cover align-self"
              />
              <div className="p-4 h-[160px] w-[300px] flex flex-col justify-between">
                <h2 className="font-bold text-lg text-center">YIN JOOGA</h2>
                <p className="text-sm text-center">
                  Dünaamiline joogastiil, mis ühendab liikumise ja hingamise.
                </p>
              </div>
            </li>
            <li class="rounded-2xl outline outline-2 outline-gray-400">
              <img src="/ohu_jooga.jpg"
                   class="w-[300px] h-[400px] rounded-t-2xl object-cover"
              />
              <div className="p-4 h-[160px] w-[300px] flex flex-col justify-between">
                <h2 className="font-bold text-lg text-center">ÕHUJOOGA</h2>
                <p className="text-sm text-center">
                  Dünaamiline joogastiil, mis ühendab liikumise ja hingamise.
                </p>
              </div>
            </li>
            <li class="rounded-2xl outline outline-2 outline-gray-400">
              <img src="/hommiku_hingamine.jpg"
                   class="w-[300px] h-[400px] rounded-t-2xl object-cover"
              />
              <div className="p-4 h-[160px] w-[300px] flex flex-col justify-between">
                <h2 className="font-bold text-lg text-center">HOMMIKU HINGAMINE</h2>
                <p className="text-sm text-center">
                  Dünaamiline joogastiil, mis ühendab liikumise ja hingamise.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Button href="/tunnikava" variant="secondary">
          Tutvu Tundidega
        </Button>
        <div class="container mx-auto flex flex-col items-center justify-center py-10">

        </div>
      </div>
    </div>
  );
}
