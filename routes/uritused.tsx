import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/src/runtime/head.ts";

export default function UritusedPage() {
  return (
    <>
      <Head>
        <title>Nova Tervise Stuudio - Üritused</title>
        <meta name="description" content="Avasta peagi toimuvad üritused Nova Tervise Stuudios – inspireerivad kohtumised, töötubasid ja liikumisrõõm Rakveres."/>
        <meta name="keywords" content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere, üritused"/>
        <meta property="og:title" content="Nova Tervise Stuudio - Üritused" />
        <meta property="og:description" content="Avasta peagi toimuvad üritused Nova Tervise Stuudios – inspireerivad kohtumised, töötubasid ja liikumisrõõm Rakveres."/>
        <link rel="icon" href="/Nova_Logo.png" />
      </Head>
      <body>
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
            <h1 className="font-bold p-2 mt-10 text-center text-3xl">
              Hetkel ei ole toimuvaid üritusi
            </h1>
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}
