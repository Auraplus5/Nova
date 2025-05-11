import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getSessionUser } from "../lib/auth.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { user, role, first_name } = await getSessionUser(req);
    return ctx.render({ user, role, first_name });
  },
};

export default function UritusedPage(
  { data }: PageProps<{ user: any; role: string; first_name: string }>,
) {
  return (
    <>
      <Head>
        <title>Nova Tervise Stuudio - Üritused</title>
        <meta
          name="description"
          content="Avasta peagi toimuvad üritused Nova Tervise Stuudios – inspireerivad kohtumised, töötubasid ja liikumisrõõm Rakveres."
        />
        <meta
          name="keywords"
          content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere, üritused"
        />
        <meta property="og:title" content="Nova Tervise Stuudio - Üritused" />
        <meta
          property="og:description"
          content="Avasta peagi toimuvad üritused Nova Tervise Stuudios – inspireerivad kohtumised, töötubasid ja liikumisrõõm Rakveres."
        />
        <link rel="icon" href="/Nova_Logo.png" />
        <link rel="preload" href="/uritused_main.webp" as="image" />
      </Head>

      <div className="min-h-screen bg-[#f7f6ed]">
        <Header
          user={data.user}
          role={data.role}
          first_name={data.first_name}
        />
        <div className="py-20 px-10">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
            ÜRITUSED
          </h1>
        </div>
        <div className="justify-center items-center flex pt-10 lg:px-10">
          <img
            src="/uritused_main.webp"
            alt="Üritused"
            className="w-[1200px] h-[550px] object-cover object-bottom lg:rounded-xl"
          />
        </div>
        <div className="py-20 px-10">
          <h1 className="font-bold p-2 mt-10 text-center text-3xl">
            Hetkel ei ole toimuvaid üritusi
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
