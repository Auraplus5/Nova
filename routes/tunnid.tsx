import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Button from "../components/Button.tsx";
import ToggleDiv from "../islands/ToggleDiv.tsx";

export default function TunnidPage() {

  return (
    <div className="min-h-screen bg-[#f7f6ed]">
      <div className="text-black">
        <Header />
      </div>
      <div class="py-20 px-10">
        <h1 class="lg:text-6xl md:text-4xl text-2xl font-[350] tracking-wider text-left border-b border-gray-600 text-gray-800">
          TUNNID
        </h1>
        <div className="justify-center items-center flex pt-10">
          <img
              src="/tunnid_2.jpg"
              alt="jooga"
              width="1600"
              height="1019"
              className="w-[1200px] h-[550px] object-cover object-bottom rounded-xl"
          />
        </div>
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

          <div>
            <ToggleDiv title="PÄIKESETERVITUS"
                       imageSrc="/päikesetervitus.jpg"
                       imageAlt="päikesetervitus"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

                       >
              <p className="text-lg py-10">Hommikujooga tundi alustame positiivse päeva häälestamisega ja hingamis-harjutustega (pranayama).
                Hommikujooga tunnis teeme  päikesetervituse seeria harjutusi, et äratada nii oma keha kui ka meeled ja alustada päeva rõõmsa meeleoluga.
                Teeme harjutusi, mis tugevdavad ja täidavad keha energiaga ja elujõuga.
                Tervitades hommikut joogaga, anname suurepärase alguse oma päevale.

                Alusta oma hommikut joogaga, et veeta päev energiliselt ja positiivselt.</p>
            </ToggleDiv>
            <ToggleDiv title="HOMMIKU HINGAMINE JA MEDITATSIOON"
                       imageSrc="/hommiku_hingamine.jpg"
                       imageAlt="hommiku hingamine"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Hommiku hingamisharjutused aitavad parandada keskendumist ja meditatsioon omakorda süvendada lõõgastust.
                Tunnis kasutame erinevaid hingamistehnikaid, mis aitavad teadlikult muuta hingamismustrit,
                pöörates samal ajal tähelepanu oma kehas tekkivatele aistingutele.
                Hingamisharjutuste kombineerimine meditatsiooniga võimaldab mõlemast tehnikast potentsiaalselt kasu lõigata.
                Uuringute kohaselt parandavad hingamisharjutused keskendumist ja mälu, vähendavad ärevust,
                astma sümptomeid ja suurendavad südame löögisagedust, mis omakorda soodustab kvaliteetset und.
                Meditatsioon seejärel edendab nii füüsilist kui ka vaimset tervist, parandades meeleolu,
                rahulolu, vähendades stressi ja depressiooni.</p>
            </ToggleDiv>
            <ToggleDiv title="KLASSIKALINE JOOGA KOGU KEHALE"
                       imageSrc="/klassikaline_jooga.jpg"
                       imageAlt="Klassikaline jooga"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[50%_85%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Klassikaline joogatund koosneb hingamisharjutustest (pranayama),
                jooga asenditest ja lõdvestusest.
                Tunni alguses soojendame keha liikudes sujuvalt edasi dünaamilistele harjutustele
                ja venitusele erinevates joogastiilides. Igaüks teeb harjutusi vastavalt oma võimetele ja
                endale sobivas rütmis. Tunnis keskendume hingamisele ja kuulame oma keha.
                Samuti sisaldab tund erinevaid jooga poose, mis vähendavad stressi ja soodustavad verevoolu,
                elastsust ja tugevust kogu kehas.
                Iga jooga poos töötab erinevaid lihaseid ning toniseerib erinevaid kehaosi aidates suurendada vereringet
                ja soodustada soolestiku liikuvust.Tunni lõpetame lõdvestuse ja meditatsiooniga, et lubada kehal vabaneda pingetest,
                noorendada ja värskendada närvisüsteemi ning jätta keha mälusse selle tunni kogemus.</p>
            </ToggleDiv>
            <ToggleDiv title="JOOGATERAAPIA SEANSID"
                       imageSrc="/joogateraapia.jpg"
                       imageAlt="Joogateraapia"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Joogateraapia seansi rühmad on kuni neli inimest,
                kuna nende seansside eesmärk on keskenduda konkreetsete haigusseisunditega inimestele,
                aidates neil ületada oma tervise probleemid.
                Joogateraapia seansil keskendume inimese haigusele terviklikul mõtteviisil,
                et aidata tuvastada sümptomite sügavamat juurt kasutades joogaasendeid,
                hingamisharjutusi, meditatsiooni ja erinevad abivahendeid.
                Joogateraapia seansil rakendame joogatehnikaid vastavalt osaleja tervislikule seisundile ja vajadustele.
                Mitme joogateraapia seansi jooksul analüüsime ka inimese tervise seisundit ja
                koostame konkreetse jooga programmi.</p>
              <p className="text-lg py-2 font-bold italic">Joogateraapia seansid</p>
              <p className="text-lg py-2 font-bold italic">Selja-kaela joogateraapia seanss</p>
              <p className="text-lg py-2 font-bold italic">Südame- kõrgvererõhu joogateraapia seanss</p>
            </ToggleDiv>
            <ToggleDiv title="ÕHUJOOGA"
                       imageSrc="/õhujooga.jpg"
                       imageAlt="Õhujooga"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[70%_100%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Õhujoogas kasutame asendite sooritamiseks siidist linasid, mis aitavad võtta sügavamaid joogaasendeid.
                Õhujooga on ideaalne vaheldus joogale matil. Õhujoogaga on võimalik parandada lihaste toonust,
                arendada tasakaalu ja suurendada paindlikkust. Olles lina sees õhus, on iga lihas kehas pidevalt töös.
                Õhujooga tekitab kehas kergust ja lendamise tunnet.
                Keha raskusjõudu kannab miski muu, lubades õndsat poolkaaluta olekut, nagu loode ema kõhus, hoitud ja turvaliselt.
                Õhujooga võimaldab suuremat liikumisvabadust ja kergustunnet.
                Turvaline ja toetatud rippumine vabastab pingeid luustikus (sh selgroos),
                liigestes ja lihastes, arendades samaaegselt paindlikkust.</p>
            </ToggleDiv>
            <ToggleDiv title="ÕHUJOOGATERAAPIA"
                       imageSrc="/õhujoogateraapia.jpg"
                       imageAlt="Õhujoogateraapia"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[60%_100%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Õhujoogateraapia on suunatud keha tervise parandamisele ning spetsiifiliste
                tervise probleemide ennetamisele ja lahendamisele. Tund sobib inimestele, kellel on song,
                skolioos või seljavalud ja lisaks ka algajatele, sest teraapilised harjutused linades on palju
                lihtsamad ja kergemini teostatavad kui klassikaline joogateraapia mattidel.
                Linad pakuvad õrna tuge, leevendades liigeste pinget ning võimaldavad lõõgastuda.
                Õhujoogateraapia aitab ravida lülisammast, avada puusaliigeseid, tagada osteokondroosi ja
                ennetada veenilaiendeid.</p>
            </ToggleDiv>
            <ToggleDiv title="YIN JOOGA"
                       imageSrc="/yin_jooga.jpg"
                       imageAlt="Yin jooga"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[60%_90%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Yin jooga on rahulik ja meditatiivne joogastiil, mis keskendub keha sügavamatele
                kudedele – kõõlustele, liigestele ja sidekoele. See praktika sobib kõigile, olenemata joogakogemusest ning
                pakub suurepärast vastukaalu aktiivsematele joogastiilidele ja igapäevaelu tempokusele.
                Tundides hoiame asendeid pikema aja vältel (u 3 minutit), võimaldades kehal sügavamalt lõdvestuda ja
                poosidesse vajuda. See aitab parandada painduvust, liigeste liikuvust ja toob kaasa sügava lõõgastuse
                ning sisemise rahu tunde. Iga tund on võimalus võtta aega iseendale, et vaigistada mõtted,
                tunda rohkem kohalolu ja kuulata oma keha.
                Yin jooga sobib ideaalselt kõigile, kes soovivad tasakaalustada aktiivset elustiili,
                leida rahu ja lõdvestust, või lihtsalt sügavamalt sukelduda oma kehasse ja meelerahusse</p>
            </ToggleDiv>
            <ToggleDiv title="ASHTANGA VINYASA"
                       imageSrc="/vinyasa.jpg"
                       imageAlt="Ashtanga Vinyasa"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[50%_80%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Ashtanga Vinyasa on dünaamiline jooga, kus iga tunni ülesehitus on samasugune
                ning mis aitab läbi liikumise jõuda meditatiivse seisundini. Tunnis on pandud suurt rõhku hingamisele
                ning hingamise ja liikumise sünkroniseerimisele, mis aitab vabastada keha toksiinidest.
                Ashtanga Vinyasa jooga nõuab järjepidevust ja pühendumust tänu millele muutub keha
                tugevamaks ning suureneb meelte selgus ja keskendumisvõime.</p>
            </ToggleDiv>
            <ToggleDiv title="PROPS PILATES"
                       imageSrc="/pilates.jpg"
                       imageAlt="Props Pilates"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[50%_80%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Pilates on distsipliin, mis keskendub kehale kui tervikule ja
                mille eesmärk on parandada mitmeid olulisi nii füüsilisi kui füsioloogilisi aspekte.
                Pilatese praktika aitab suurendada selgroo liikuvust, mis on oluline osa üldisest kehahoiakust
                ja liikumisvabadusest. Samuti aitavad pilatese harjutused tugevdada süvalihaseid,
                mis omakorda toetab keha üldist tervist. Props pilatese tundides kasutame erinevaid abivahendeid,
                mis toetavad keha ja aitavad hoida õiget joondust. Lisaks keskendume ka teadlikuse
                suurendamisele keha, meele ja vaimu vahel läbi meditatiivse liikumise,
                et saavutada tasakaal nii füüsilisel kui ka vaimsel tasandil. Oluline on rõhutada,
                et pilatese treening on kohandatav kõigile olenemata vanusest, soost või kehatüübist,
                võimaldades seda treeningmeetodit erinevatele inimestele olenevalt nende individuaalsetest
                vajadustest ja võimekusest.</p>
            </ToggleDiv>
            <ToggleDiv title="ACRO-PAARISJOOGA"
                       imageSrc="/paarisjooga.jpg"
                       imageAlt="Acro-Paarisjooga"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[60%_90%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Paarisjooga annab võimaluse avastada iseennast teise inimese kaudu.
                Samas õpetab kuulama partnerit ja otsima tasakaalu pannes end proovile nii füüsilisel kui
                vaimsel tasandil. Paarisjooga harjutused toovad sind välja mugavustsoonist ja õpetavad nii
                mõndagi uut enda ja partneri kohta. Harjutused  tuginevad suurelt vastastikusele usaldusele.
                Paarisjooga annab võimaluse panna keha proovile, luua ägedaid mälestusi partneri, sõbra või
                oma lähedastega ja samas veeta aega lõbusalt. Paarisjooga tunnis mängime,
                teeme joogaasendeid, hingame ja lõdvestume.</p>
            </ToggleDiv>
            <ToggleDiv title="LASTEÕHUJOOGA/LASTEJOOGA"
                       imageSrc="/lastejooga.jpg"
                       imageAlt="Lastejooga"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[75%_100%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Lasteõhujooga on suurepärane treening laste vestibulaaraparaadile.
                Samuti tõhus võimalus lapse lihaste arendamiseks ja ühtlase kauni kehahoiaku omandamiseks.
                Lisaks füüsise arendamisele toetab õhujooga lapse emotsionaalset arengut õppides lendama ja
                tegema saltosid linades, vabastades ennast hirmudest. Tänu gravitatsioonijõule venitatakse
                linades ümberpööratud asendis lülisammast õrnalt loomulikul viisil parandades lapse rühti.
                Samuti aitavad ümberpööratud asendid linades parandada mälu, aju verevarustust ning leevendada
                ärevust ja depressiooni. Tunnis teeme palju erinevaid ümberpööratud asendeid lisades akrobaatilisi
                harjutusi, mis on nii kasulikud kui ka lõbusad. Linades kiikumine, maast kõrgemal lendamine,
                kukerpallid ja ronimine annavad lastele õnnetunde.</p>
            </ToggleDiv>
            <ToggleDiv title="KONTORIJOOGA MEESKONNALE"
                       imageSrc="/kontorijooga.jpg"
                       imageAlt="Kontorijooga"
                       imageWidth="700"
                       imageHeight="1000"
                       classnameForImg="object-cover object-[65%_85%] lg:w-[600px] lg:h-[700px] w-[300px] h-[400px]"

            >
              <p className="text-lg py-10">Pikaajaline ilma pausita laua ja arvuti taga istumine toob pingeid
                meie kaelale, õlgadele ja seljale. Samuti paljudes kontorites inimeste töö on stressirohke.
                Stressile ja pingetele järgnevad erinevaid tervise probleemid.
                Pakun kontori joogat toolis mis aitab inimestel maandata stressi ja pingeid.
                Samas jooga hingamise harjutused aitavad rahuneda, puhastada ennast negatiivsete mõtetest
                ja paremini keskenduda. Mitmed uuringuid on tõestanud, et peale lühikest jooga pausi
                inimeste produktiivsus pareneb. Võta julgelt ühendust tulen Teie kontorisse.</p>
            </ToggleDiv>
          </div>
      </div>
      <Footer/>
    </div>
  );
}
