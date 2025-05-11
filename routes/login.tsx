import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import UserLogin from "../islands/UserLogin.tsx";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render({
      supabaseUrl: Deno.env.get("SUPABASE_URL"),
      supabaseAnonKey: Deno.env.get("SUPABASE_ANON_KEY"),
    });
  },
};

export default function LoginPage(
  props: PageProps<{ supabaseUrl: string; supabaseAnonKey: string }>,
) {
  return (
    <>
      <Header />
      <div className="py-20 px-10">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
          LOGI SISSE
        </h1>
        <UserLogin
          supabaseUrl={props.data.supabaseUrl}
          supabaseAnonKey={props.data.supabaseAnonKey}
        />
        <div>
          <h2 className="font-bold p-2 mt-10 text-center text-md">
            Kas sul pole veel kontot? Registreeri end{" "}
            <a href="/registreeri" className="text-[#4b8d5b] underline">
              siin
            </a>
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
