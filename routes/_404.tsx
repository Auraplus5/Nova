import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Lehte ei eksisteeri</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#f7f6ed]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/Nova_Logo.png"
            width="128"
            height="128"
            alt="Nova Tervise Stuudio"
          />
          <h1 class="text-4xl font-bold pb-10">404 - Lehte ei eksisteeri</h1>
          <a href="/" class="underline">Mine tagasi kodulehele</a>
        </div>
      </div>
    </>
  );
}
