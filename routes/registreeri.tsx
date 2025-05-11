import UserRegistration from "../islands/UserRegistration.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    return ctx.render({
      supabaseUrl: Deno.env.get("SUPABASE_URL"),
      supabaseKey: Deno.env.get("SUPABASE_ANON_KEY"),
    });
  },
};

export default function RegistreeriPage(
  props: PageProps<{ supabaseUrl: string; supabaseKey: string }>,
) {
  return (
    <>
      <Header />
      <div className="py-20 px-10">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800 mb-10">
          REGISTREERI
        </h1>
        <UserRegistration
          supabaseUrl={props.data.supabaseUrl}
          supabaseAnonKey={props.data.supabaseKey}
        />
      </div>
      <Footer />
    </>
  );
}
