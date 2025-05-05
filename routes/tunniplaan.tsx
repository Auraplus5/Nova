import BookingCalendar from "../islands/BookingCalendar.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {getSessionUser} from "../lib/auth.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers = {
    async GET(req, ctx) {
        const { user, role, first_name } = await getSessionUser(req);
        return ctx.render({ user, role, first_name });
    },
};

export default function BookingPage({data}: PageProps<{ user: any; role: string; first_name: string }>) {

  return (
      <>
        <Head>
        <title>Tunnid - Nova Tervise Stuudio</title>
        <meta name="description" content="Leia endale sobiv tund või üritus Nova Tervise Stuudios ja naudi liikumist, enesearengut ning toetavat kogukonda Rakvere südames." />
        <meta name="keywords" content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere" />
        <meta name="author" content="Nova Tervise Stuudio" />
        <meta property="og:title" content="Nova Tervise Stuudio" />
        <meta property="og:description" content="Leia endale sobiv tund või üritus Nova Tervise Stuudios ja naudi liikumist, enesearengut ning toetavat kogukonda Rakvere südames." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/Nova_Logo.png" />
      </Head>
        <div class="flex flex-col min-h-screen bg-[#f7f6ed]">
            <Header user={data.user} role={data.role} first_name={data.first_name}/>
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
            <Footer/>
        </div>
      </>

  );
}
