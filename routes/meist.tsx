import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Head } from "$fresh/src/runtime/head.ts";

export default function Meist() {
  return (
      <>
        <Head>
            <title>Meist - Nova Tervise Stuudio</title>
            <meta name="description" content="Tutvu Nova Tervise Stuudio tiimiga ja meie tegemistega. Meist leiad pühendunud juhendajad ja inspireeriva keskkonna."/>
            <meta name="keywords" content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere"/>
            <meta name="author" content="Nova Tervise Stuudio" />
            <meta property="og:title" content="Nova Tervise Stuudio" />
            <meta property="og:description" content="Tutvu Nova Tervise Stuudio tiimiga ja meie tegemistega. Meist leiad pühendunud juhendajad ja inspireeriva keskkonna." />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/Nova_Logo.png" />
        </Head>
        <body>
    <div className="min-h-screen bg-[#f7f6ed]">
      <div className="text-black">
        <Header />
      </div>
      <div className="py-20 px-10">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
          MEIST
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-16 p-10 max-w-7xl mx-auto">
        <img
          src="/Elona.webp"
          alt="Elona"
          className="object-cover w-[500px] h-[500px] rounded-lg"
        />
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Elona
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Minu nimi on Elona ja jooga on minu jaoks armastus elu ja enese
            vastu. Praktiseerides joogat praktiseerin järjepidevust, enese
            avastamist ja hetkes elamist. 10 aasta jooksul olen süvitsi
            tegelenud erinevate jooga stiilidega ning olen ennast jätkuvalt
            arendanud nii Eestis kui väljaspool. Minu teekond joogas jõudis
            haripunkti 2019. aastal, kui omandasin Hatha jooga õpetaja
            kvalifikatsiooni tuntud Samatva Yogalaya Ashramis, Indias. Samas
            jätkan ma enda täiendamist osaledes erinevatel koolitustel Euroopas
            (Scott Johnson 20h, Mayra Surya 25h, Laste jooga kool 400h) ja
            Indias (Tattvaashram Yogshala Varkala 20h, Samatva Yogalaya ashram
            Rishikesh 200h, Yogadarshanam Mysure 300h). Lisaks joogale lõpetasin
            Visible Feels Akadeemia pilatese koolituse kuna arvan, et jooga ja
            pilates on suurel määral kooskõlas.
            <br />
            <br />
            Koolitustel täiendan oma teadmisi joogateraapia valdkonnas, kuna
            naudin nendel seanssidel luua väikestes gruppides isikupärastatud
            lähenemisviise, et mõista osalejate individuaalseid vajadusi,
            eelistusi ja eesmärke. Kõige hiljutisem avastus minu jaoks on
            Ajurveeda lisamine oma rutiini ja õpetustesse, mis toetab jooga
            praktiseerimist ning aitab saavutada ja säilitada optimaalse tervise
            enda kehas. Lisaks olen organiseerinud lastelaagreid ja retriite
            ning praktiseerinud põnevaid stiile nagu SUP-laua jooga, õhujooga ja
            joogateraapia
            <br />
            <br />
            Pean oluliseks mitmekülgsust ja erinevate stiilide valdamist, kuna
            see aitab meil ennast avastada ja õppida oma keha paremini tundma.
            Samas meeldib mulle ka võtta aega, et ühele stiilile pühenduda, kuna
            see toob meid hetkesse, maandab ning aitab keskenduda. Usun, et igal
            inimesel on joogas oma teekond ja see on väga individuaalne.
            Olenemata stiilist on oluline, et teeksime seda järjepidevalt ja
            õpiksime teadliku jooga praktiseerimist, kuna see kajastub ka meie
            igapäevases elus. Sedasi tehes oleme 100% ärkvel ja elame hetkes,
            mis tõstab meie elukvaliteeti ja teeb meid õnnelikuks.
            <br />
            <br />
            Lisaks joogale meeldib mulle tutvuda erinevate riikide
            traditsioonide, usu ja kultuuriga ning seepärast õppisin
            Rahvusvahelisi suhteid London Queen Mary ülikoolis ja olen endiselt
            huvitatud kultuuridiplomaatiast. Usun, et mitmekesisuse
            aktsepteerimine ja austamine rikastab meie elu ja aitab luua
            tervislikuma ühiskonna.
          </p>
        </div>
      </div>
      <Footer />
    </div>
        </body>
      </>
  );
}
