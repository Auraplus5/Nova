import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="et">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nova Tervise Stuudio</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/Nova_Logo.png" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');`}
        </style>
      </Head>
      <body>
        <Component />
      </body>
    </html>
  );
}
