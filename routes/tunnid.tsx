import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Button from "../components/Button.tsx";
import ToggleDiv from "../islands/ToggleDiv.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { getSessionUser } from "../lib/auth.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { user, role, first_name } = await getSessionUser(req);
    return ctx.render({ user, role, first_name });
  },
};

export default function TunnidPage(
  { data }: PageProps<{ user?: any; role?: string; first_name?: string }>,
) {
  return (
    <>
      <Head>
        <title>Tunnid - Nova Tervise Stuudio</title>
        <meta
          name="description"
          content="Tutvu tundide sisuga ja leia endale sobiv tund Nova Tervise Stuudios – liikumine, mis toetab keha ja meelt."
        />
        <meta
          name="keywords"
          content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere"
        />
        <meta name="author" content="Nova Tervise Stuudio" />
        <meta property="og:title" content="Nova Tervise Stuudio" />
        <meta
          property="og:description"
          content="Tutvu tundide sisuga ja leia endale sobiv tund Nova Tervise Stuudios – liikumine, mis toetab keha ja meelt."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/Nova_Logo.png" />
        <link rel="preload" href="/Tunnid/tunnid.webp" as="image" />
      </Head>

      <div className="min-h-screen bg-[#f7f6ed]">
        <Header
          user={data.user}
          role={data.role}
          first_name={data.first_name}
        />
        <div class="py-20 px-5 lg:px-10">
          <h1 class="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
            TUNNID
          </h1>
        </div>
        <div className="justify-center items-center flex pt-10 lg:px-10">
          <img
            src="/Tunnid/tunnid.webp"
            alt="jooga"
            className="w-[1200px] h-[550px] object-cover object-bottom lg:rounded-xl"
          />
        </div>
        <div class="py-10 px-5 lg:px-20">
          <div className="justify-center items-center text-center flex flex-col m-16 wrap-break-word max-w-xl mx-auto border rounded-lg p-6 border-gray-600 shadow-lg">
            <p className="text-lg italic">
              Nii füüsiline kui ka vaimne heaolu on tähtis. Igal inimesel on oma
              teekond selles maailmas, ja me kõik oleme mingil moel nii sarnased
              kui ka erinevad. Jooga aitab igaühel leida vajaliku tasakaalu oma
              elus. See pakub võimalust elada maailmas, mis ühildub meiega ja
              pakub rohkem võimalusi, selle asemel et võidelda maailmaga, mis on
              meie vastu
            </p>
          </div>

          <div className="py-5">
            <ToggleDiv
              title="PÄIKESETERVITUS"
              imageSrc="/Tunnid/päikesetervitus.webp"
              imageAlt="päikesetervitus"
              classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Rahulik algus päevale
              </h2>
              <p className="text-lg py-5">
                Hommikujooga tundi alustame positiivse päeva häälestamisega ja
                hingamis-harjutustega (pranayama). Hommikujooga tunnis teeme
                päikesetervituse seeria harjutusi, et äratada nii oma keha kui
                ka meeled ja alustada päeva rõõmsa meeleoluga. Teeme harjutusi,
                mis tugevdavad ja täidavad keha energiaga ja elujõuga.
                Tervitades hommikut joogaga, anname suurepärase alguse oma
                päevale.

                Alusta oma hommikut joogaga, et veeta päev energiliselt ja
                positiivselt.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="HOMMIKUHINGAMINE JA MEDITATSIOON"
              imageSrc="/Tunnid/hommiku_hingamine.webp"
              imageAlt="hommiku hingamine"
              classnameForImg="object-cover object-[60%_90%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Rahusta meel, ärata keha
              </h2>
              <p className="text-lg py-5">
                Hommiku hingamisharjutused aitavad parandada keskendumist ja
                meditatsioon omakorda süvendada lõõgastust. Tunnis kasutame
                erinevaid hingamistehnikaid, mis aitavad teadlikult muuta
                hingamismustrit, pöörates samal ajal tähelepanu oma kehas
                tekkivatele aistingutele. Hingamisharjutuste kombineerimine
                meditatsiooniga võimaldab mõlemast tehnikast potentsiaalselt
                kasu lõigata. Uuringute kohaselt parandavad hingamisharjutused
                keskendumist ja mälu, vähendavad ärevust, astma sümptomeid ja
                suurendavad südame löögisagedust, mis omakorda soodustab
                kvaliteetset und. Meditatsioon seejärel edendab nii füüsilist
                kui ka vaimset tervist, parandades meeleolu, rahulolu,
                vähendades stressi ja depressiooni.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="KLASSIKALINE JOOGA KOGU KEHALE"
              imageSrc="/Tunnid/klassikaline_jooga.webp"
              imageAlt="Klassikaline jooga"
              classnameForImg="object-cover object-[50%_85%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Jooga, mis tasakaalustab keha ja meelt
              </h2>
              <p className="text-lg py-5">
                Klassikaline joogatund koosneb hingamisharjutustest (pranayama),
                jooga asenditest ja lõdvestusest. Tunni alguses soojendame keha
                liikudes sujuvalt edasi dünaamilistele harjutustele ja
                venitusele erinevates joogastiilides. Igaüks teeb harjutusi
                vastavalt oma võimetele ja endale sobivas rütmis. Tunnis
                keskendume hingamisele ja kuulame oma keha. Samuti sisaldab tund
                erinevaid jooga poose, mis vähendavad stressi ja soodustavad
                verevoolu, elastsust ja tugevust kogu kehas. Iga jooga poos
                töötab erinevaid lihaseid ning toniseerib erinevaid kehaosi
                aidates suurendada vereringet ja soodustada soolestiku
                liikuvust. Tunni lõpetame lõdvestuse ja meditatsiooniga, et
                lubada kehal vabaneda pingetest, noorendada ja värskendada
                närvisüsteemi ning jätta keha mälusse selle tunni kogemus.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="JOOGATERAAPIA SEANSID"
              imageSrc="/Tunnid/joogateraapia.webp"
              imageAlt="Joogateraapia"
              classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Teraapiline jooga personaalsel lähenemisel
              </h2>
              <p className="text-lg py-5">
                Joogateraapia seansi rühmad on kuni neli inimest, kuna nende
                seansside eesmärk on keskenduda konkreetsete haigusseisunditega
                inimestele, aidates neil ületada oma tervise probleemid.
                Joogateraapia seansil keskendume inimese haigusele terviklikul
                mõtteviisil, et aidata tuvastada sümptomite sügavamat juurt
                kasutades joogaasendeid, hingamisharjutusi, meditatsiooni ja
                erinevad abivahendeid. Joogateraapia seansil rakendame
                joogatehnikaid vastavalt osaleja tervislikule seisundile ja
                vajadustele. Mitme joogateraapia seansi jooksul analüüsime ka
                inimese tervise seisundit ja koostame konkreetse jooga
                programmi.
              </p>
              <p className="text-lg py-2 font-bold italic">
                Joogateraapia seansid
              </p>
              <p className="text-lg py-2 font-bold italic">
                Selja-kaela joogateraapia seanss
              </p>
              <p className="text-lg py-2 font-bold italic">
                Südame- kõrgvererõhu joogateraapia seanss
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="ÕHUJOOGA"
              imageSrc="/Tunnid/õhujooga.webp"
              imageAlt="Õhujooga"
              classnameForImg="object-cover object-[70%_100%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Hõlju ja tunne end vabalt
              </h2>
              <p className="text-lg py-5">
                Õhujoogas kasutame asendite sooritamiseks siidist linasid, mis
                aitavad võtta sügavamaid joogaasendeid. Õhujooga on ideaalne
                vaheldus joogale matil. Õhujoogaga on võimalik parandada lihaste
                toonust, arendada tasakaalu ja suurendada paindlikkust. Olles
                lina sees õhus, on iga lihas kehas pidevalt töös. Õhujooga
                tekitab kehas kergust ja lendamise tunnet. Keha raskusjõudu
                kannab miski muu, lubades õndsat poolkaaluta olekut, nagu loode
                ema kõhus, hoitud ja turvaliselt. Õhujooga võimaldab suuremat
                liikumisvabadust ja kergustunnet. Turvaline ja toetatud
                rippumine vabastab pingeid luustikus (sh selgroos), liigestes ja
                lihastes, arendades samaaegselt paindlikkust.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="ÕHUJOOGATERAAPIA"
              imageSrc="/Tunnid/õhujoogateraapia.webp"
              imageAlt="Õhujoogateraapia"
              classnameForImg="object-cover object-[60%_100%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Õhujoogateraapia – kergendus kehale, tugi tervisele
              </h2>
              <p className="text-lg py-5">
                Õhujoogateraapia on suunatud keha tervise parandamisele ning
                spetsiifiliste tervise probleemide ennetamisele ja
                lahendamisele. Tund sobib inimestele, kellel on song, skolioos
                või seljavalud ja lisaks ka algajatele, sest teraapilised
                harjutused linades on palju lihtsamad ja kergemini teostatavad
                kui klassikaline joogateraapia mattidel. Linad pakuvad õrna
                tuge, leevendades liigeste pinget ning võimaldavad lõõgastuda.
                Õhujoogateraapia aitab ravida lülisammast, avada puusaliigeseid,
                tagada osteokondroosi ja ennetada veenilaiendeid.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="YIN JOOGA"
              imageSrc="/Tunnid/yin.webp"
              imageAlt="Yin jooga"
              classnameForImg="object-cover object-[60%_90%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Rahulik paus pingelises päevas
              </h2>
              <p className="text-lg py-5">
                Yin jooga on rahulik ja meditatiivne joogastiil, mis keskendub
                keha sügavamatele kudedele – kõõlustele, liigestele ja
                sidekoele. See praktika sobib kõigile, olenemata joogakogemusest
                ning pakub suurepärast vastukaalu aktiivsematele joogastiilidele
                ja igapäevaelu tempokusele. Tundides hoiame asendeid pikema aja
                vältel (u 3 minutit), võimaldades kehal sügavamalt lõdvestuda ja
                poosidesse vajuda. See aitab parandada painduvust, liigeste
                liikuvust ja toob kaasa sügava lõõgastuse ning sisemise rahu
                tunde. Iga tund on võimalus võtta aega iseendale, et vaigistada
                mõtted, tunda rohkem kohalolu ja kuulata oma keha. Yin jooga
                sobib ideaalselt kõigile, kes soovivad tasakaalustada aktiivset
                elustiili, leida rahu ja lõdvestust, või lihtsalt sügavamalt
                sukelduda oma kehasse ja meelerahusse
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="ASHTANGA VINYASA"
              imageSrc="/Tunnid/vinyasa.webp"
              imageAlt="Ashtanga Vinyasa"
              classnameForImg="object-cover object-[50%_80%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Dünaamiline ja energiline joogastiil
              </h2>
              <p className="text-lg py-5">
                Ashtanga Vinyasa on dünaamiline jooga, kus iga tunni ülesehitus
                on samasugune ning mis aitab läbi liikumise jõuda meditatiivse
                seisundini. Tunnis on pandud suurt rõhku hingamisele ning
                hingamise ja liikumise sünkroniseerimisele, mis aitab vabastada
                keha toksiinidest. Ashtanga Vinyasa jooga nõuab järjepidevust ja
                pühendumust tänu millele muutub keha tugevamaks ning suureneb
                meelte selgus ja keskendumisvõime.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="PROPS PILATES"
              imageSrc="/Tunnid/pilates.webp"
              imageAlt="Props Pilates"
              classnameForImg="object-cover object-[50%_80%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Pilates igale kehale ja tasemele
              </h2>
              <p className="text-lg py-5">
                Pilates on distsipliin, mis keskendub kehale kui tervikule ja
                mille eesmärk on parandada mitmeid olulisi nii füüsilisi kui
                füsioloogilisi aspekte. Pilatese praktika aitab suurendada
                selgroo liikuvust, mis on oluline osa üldisest kehahoiakust ja
                liikumisvabadusest. Samuti aitavad pilatese harjutused tugevdada
                süvalihaseid, mis omakorda toetab keha üldist tervist. Props
                pilatese tundides kasutame erinevaid abivahendeid, mis toetavad
                keha ja aitavad hoida õiget joondust. Lisaks keskendume ka
                teadlikuse suurendamisele keha, meele ja vaimu vahel läbi
                meditatiivse liikumise, et saavutada tasakaal nii füüsilisel kui
                ka vaimsel tasandil. Oluline on rõhutada, et pilatese treening
                on kohandatav kõigile olenemata vanusest, soost või kehatüübist,
                võimaldades seda treeningmeetodit erinevatele inimestele
                olenevalt nende individuaalsetest vajadustest ja võimekusest.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="ACRO-PAARISJOOGA"
              imageSrc="/Tunnid/paarisjooga.webp"
              imageAlt="Acro-Paarisjooga"
              classnameForImg="object-cover object-[60%_90%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Naeru, usalduse ja paindlikkuse hetk
              </h2>
              <p className="text-lg py-5">
                Paarisjooga annab võimaluse avastada iseennast teise inimese
                kaudu. Samas õpetab kuulama partnerit ja otsima tasakaalu pannes
                end proovile nii füüsilisel kui vaimsel tasandil. Paarisjooga
                harjutused toovad sind välja mugavustsoonist ja õpetavad nii
                mõndagi uut enda ja partneri kohta. Harjutused tuginevad suurelt
                vastastikusele usaldusele. Paarisjooga annab võimaluse panna
                keha proovile, luua ägedaid mälestusi partneri, sõbra või oma
                lähedastega ja samas veeta aega lõbusalt. Paarisjooga tunnis
                mängime, teeme joogaasendeid, hingame ja lõdvestume.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="LASTEÕHUJOOGA JA LASTEJOOGA"
              imageSrc="/Tunnid/lastejooga.webp"
              imageAlt="Lastejooga"
              classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Mänguline ja lõbus liikumine
              </h2>
              <p className="text-lg py-5">
                Lasteõhujooga on suurepärane treening laste
                vestibulaaraparaadile. Samuti tõhus võimalus lapse lihaste
                arendamiseks ja ühtlase kauni kehahoiaku omandamiseks. Lisaks
                füüsise arendamisele toetab õhujooga lapse emotsionaalset
                arengut õppides lendama ja tegema saltosid linades, vabastades
                ennast hirmudest. Tänu gravitatsioonijõule venitatakse linades
                ümberpööratud asendis lülisammast õrnalt loomulikul viisil
                parandades lapse rühti. Samuti aitavad ümberpööratud asendid
                linades parandada mälu, aju verevarustust ning leevendada
                ärevust ja depressiooni. Tunnis teeme palju erinevaid
                ümberpööratud asendeid lisades akrobaatilisi harjutusi, mis on
                nii kasulikud kui ka lõbusad. Linades kiikumine, maast kõrgemal
                lendamine, kukerpallid ja ronimine annavad lastele õnnetunde.
              </p>
            </ToggleDiv>
            <ToggleDiv
              title="KONTORIJOOGA MEESKONNALE"
              imageSrc="/Tunnid/kontorijooga.webp"
              imageAlt="Kontorijooga"
              classnameForImg="object-cover object-[65%_85%] lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
            >
              <h2 className="font-bold text-xl text-center pt-5">
                Jooga, mis mahub tööpäeva
              </h2>
              <p className="text-lg py-5">
                Pikaajaline ilma pausita laua ja arvuti taga istumine toob
                pingeid meie kaelale, õlgadele ja seljale. Samuti paljudes
                kontorites inimeste töö on stressirohke. Stressile ja pingetele
                järgnevad erinevaid tervise probleemid. Pakun kontori joogat
                toolis mis aitab inimestel maandata stressi ja pingeid. Samas
                jooga hingamise harjutused aitavad rahuneda, puhastada ennast
                negatiivsete mõtetest ja paremini keskenduda. Mitmed uuringuid
                on tõestanud, et peale lühikest jooga pausi inimeste
                produktiivsus pareneb. Võta julgelt ühendust tulen Teie
                kontorisse.
              </p>
            </ToggleDiv>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
