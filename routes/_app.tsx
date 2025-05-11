import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="et">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nova Tervise Stuudio</title>
        <link rel="icon" href="/Nova_Logo.png" />
          <link rel="stylesheet" href="/global.css"/>
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
