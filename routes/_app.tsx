import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nova Tervise Stuudio - Rahusta meelt ja vabasta keha. Joogastuudio Rakveres"/>
          <meta name="keywords" content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere"/>
          <meta name="author" content="Nova Tervise Stuudio" />
          <meta property="og:title" content="Nova Tervise Stuudio" />
          <meta property="og:description" content="Broneeri tund või osale meie üritustel." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/main_pic.jpg" />
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
