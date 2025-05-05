import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ToggleDiv from "../islands/ToggleDiv.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { getSessionUser} from "../lib/auth.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(req, ctx) {
        const { user, role, first_name } = await getSessionUser(req);
        return ctx.render({ user, role, first_name });
    },
};

export default function TuleKutsu({data}: PageProps<{ user?: any; role?: string; first_name?: string }>) {
    return (
        <>
            <Head>
                <title>Tule või kutsu - Nova Tervise Stuudio</title>
                <meta name="description" content="Korralda meeldejääv sünnipäev või üritus Nova Tervise Stuudios – ainulaadne kogemus Sulle ja Su külalistele inspireerivas keskkonnas."/>                <meta name="keywords" content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere"/>
                <meta name="author" content="Nova Tervise Stuudio" />
                <meta property="og:title" content="Nova Tervise Stuudio" />
                <meta property="og:description" content="Korralda meeldejääv sünnipäev või üritus Nova Tervise Stuudios – ainulaadne kogemus Sulle ja Su külalistele inspireerivas keskkonnas."/>
                <meta property="og:type" content="website" />
                <link rel="icon" href="/Nova_Logo.png" />

            </Head>

            <div className="bg-[#f7f6ed] min-h-screen">
            <Header user={data.user} role={data.role} first_name={data.first_name}/>
                <div className="pt-20">


                    {/*-------------Teetseremoonia intro section-------------*/}
                    <h1 className="xl:text-4xl text-2xl font-bold text-center border-b border-gray-600">Teetseremoonia sünnipäevaks
                        ja erilisteks hetkedeks</h1>
                    <div className="flex flex-col items-center justify-center pb-20">
                        <img
                            src="/TuleKutsu/tee2.webp"
                            alt="Tee Tseremoonia 1"
                            className="object-cover w-[400px] h-[400px] rounded-full m-10"
                        />
                        <p className="max-w-3xl p-10 border rounded-3xl text-center text-lg text-gray-700">
                            Kas sul on tulemas sünnipäev või planeerid väikest ja erilist koosviibimist?
                            Kui otsid midagi tõeliselt unustamatut,
                            mis paneb külalised rääkima veel kaua pärast ürituse lõppu,
                            siis Nova tervisestuudio tee tseremoonia on just see, mida vajad!
                            Me pakume ainulaadset elamust, mis viib sind ja su külalised tee maagilisse maailma,
                            ühendades traditsioonilised tavad, ajaloosõlmed ja maitseelamused.
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeBrBFgoyBnnq0trEyMXO_Gr8DlFq6r5jHeTmU1__7tT4_TlQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#f7f6ed] text-gray-800 font-bold py-2 px-4 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out mt-10">
                            Saada meile päring</a>
                    </div>


                    {/*-------------Teetseremoonia about section-------------*/}
                    <div
                        className="flex xl:flex-row flex-col justify-between items-center bg-[#F2E2CE] xl:px-40 xl:py-20 py-10">
                        <img
                            src="/TuleKutsu/tee1.webp"
                            alt="Teetseremoonia"
                            className="object-cover xl:rounded-xl lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] mb-10 xl:mb-0"
                        />
                        <div className="flex flex-col max-w-3xl px-10">
                            <h2 className="text-2xl font-bold mb-6 text-center">Mida Me Pakume?</h2>
                            <p className="text-md mb-6 leading-relaxed">
                                Nova tervisestuudios saad nautida tee tseremooniat,
                                mis on palju rohkem kui lihtsalt jook — see on rännak läbi erinevate teesortide,
                                ajaloo ja kultuuri, kus iga tass avab midagi uut ja põnevat.
                                Meie tee tseremooniad on ideaalne viis muuta sinu sünnipäev
                                või eriline koosviibimine tõeliselt meeldejäävaks.

                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-md">
                                <li><span
                                    className="font-bold italic">Traditsiooniline Feng Shui stiilis teetseremoonia</span> või
                                    isikliku maitse järgi kohandatud tee elamus
                                </li>
                                <li><span
                                    className="font-bold italic">Tee serveerimine traditsioonilistes nõudes, </span>et
                                    kogeda tee maitse mitmekesisust ja avastada, kuidas iga nõu mõjutab maitset
                                </li>
                                <li><span className="font-bold italic">Erinevad teesordid, lehed ja õied, </span>mille
                                    kaudu õpid tundma tee ainulaadsust ja kvaliteeti
                                </li>
                                <li><span className="font-bold italic">Lood tee ajaloost ja kultuurist</span> — iga tee
                                    on oma lugu, mis rikastab kogemust
                                </li>
                                <li><span className="font-bold italic">Tseremoonia ajal toimuvad mängud, </span>mis
                                    muudavad iga hetke lõbusaks ja harivaks
                                </li>
                                <li className="font-bold italic">Tõstame bokaali kvaliteetset teed sinu tervise nimel!
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*-------------Teetseremoonia extra information-------------*/}
                    <div
                        className="flex xl:flex-row flex-col justify-between items-center xl:items-start bg-[#f7f7f7] xl:px-40 gap-6 px-10 py-20">
                        <div className="max-w-md">
                            <h3 className="text-lg font-bold mb-3">Traditsiooniline Feng Shui Tseremoonia</h3>
                            <p className="text-md leading-relaxed">
                                Teetseremoonia ei ole ainult maitsete nautimine, vaid ka täielik lõõgastus.
                                Iidsete traditsioonide järgi läbiviidud tseremoonia ühendab sind ja su külalisi
                                tee rikka ajaloo ja kultuuri kaudu, pakkudes rahu ja tasakaalu igas sammus.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <h3 className="text-lg font-bold mb-3">Paindlik Teenuste Valik</h3>
                            <p className="text-md leading-relaxed">
                                Oleme paindlikud ja pakume erinevaid lisateenuseid, et muuta sinu kogemus veelgi
                                erilisemaks.
                                Näiteks saad lisada oma teetseremooniale helirännakud – šamanitrummid, gongid,
                                tuulekellad
                                ja muud rahustavad helid, mis loovad täiusliku lõdvestava ja tasakaalustava atmosfääri.
                                Samuti saame kohandada teenust vastavalt sinu erisoovidele.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <h3 className="text-lg font-bold mb-3">Broneeri Täna!</h3>
                            <p className="text-md leading-relaxed">
                                Tee oma sünnipäev või eriline koosolek meeldejäävaks ja originaalseks. Uuri lähemalt,
                                kuidas Nova teatime teetseremoonia saab muuta sinu sündmuse tõeliselt unustamatuks
                                ja erilisimaks hetkega! Broneeri oma teetseremoonia täna ja loo oma
                                sünnipäevast midagi täiesti erakordset.
                            </p>
                        </div>
                    </div>

                    {/*-------------Laste Glow intro-------------*/}
                    <h1 className="xl:text-4xl text-2xl font-bold text-center border-b border-gray-600 pt-20">Laste glow sünnipäev
                        Nova stuudios</h1>
                    <div className="flex flex-col items-center justify-center pb-20">
                        <img
                            src="/TuleKutsu/laste_glow.webp"
                            alt="Laste Glow Sünnipäev"
                            className="object-cover w-[400px] h-[400px] rounded-full m-10"
                        />
                        <p className="max-w-3xl p-10 border rounded-3xl text-center text-lg text-gray-700">
                            Tere tulemast meie unustamatu <span className="font-bold">Glow sünnipäeva</span> maailmasse,
                            kus värvid, valgus ja mängud kohtuvad lõbusate tegevustega!
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSex4065YsmFBgYNBA0GdYxMhQG64cINSU9k4oW9a4_CQ2XcHw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#f7f6ed] text-gray-800 font-bold py-2 px-4 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out mt-10">
                            Saada meile päring</a>
                    </div>


                    {/*-------------Laste Glow about-------------*/}
                    <div
                        className="flex xl:flex-row flex-col justify-between items-center xl:items-start bg-[#f7f7f7] xl:px-40 gap-6 px-10 py-20">
                        <div className="max-w-md">
                            <h3 className="text-lg font-bold mb-3">Valgus-Atribuutika- Kiigud</h3>
                            <p className="text-md leading-relaxed">
                                Erilised valgusinstallatsioonid,
                                sealhulgas LED-tuled, neonvalgus. Glow-in-the-dark efektid,
                                mis muudavad kogu õhkkonna eriliseks ja värviliseks.
                                Glow-in-the-dark aksessuaarid, mida lastele jagatakse(säravad käepaelad, helendavad
                                ehted, prillid).
                            </p>
                        </div>
                        <div className="max-w-md">
                            <h3 className="text-lg font-bold mb-3">Lisateenused</h3>
                            <p className="text-md leading-relaxed">
                                Meie Glow sünnipäev pakub mitmesuguseid lõbusaid tegevusi
                                ja meelelahutusvõimalusi, kuid me mõistame,
                                et iga üritus on unikaalne. Seetõttu on meil paindlik teenuste pakkumine,
                                mis võimaldab lisada täiendavaid elemente vastavalt teie soovidele
                                ja ideedele ( neoon- ja helendavad õhupallid, glow-paberid ja kleebised, pinjata,
                                t-särk külaliste soovidega). Oleme avatud erinevatele ideedele ja
                                valmis ellu viima kõik teie ettepanekud, et teie sünnipäevast saaks tõeline unistuste
                                pidu!
                            </p>
                        </div>
                        <div className="max-w-md">
                            <h3 className="text-lg font-bold mb-3">Sünnipäeva juht stuudios</h3>
                            <p className="text-md leading-relaxed">
                                Sünnipäeva juht on aktiivselt kohal, ta viib lapsed läbi lõbusate harjutuste
                                ja meelelahutuslike tegevuste. Sünnipäev juht näitab ette,
                                kuidas teha lõbusaid liikumisharjutusi,
                                näiteks kiikumine koos sõpradega või tasakaalu harjutused kiigel.
                            </p>
                        </div>
                    </div>

                    {/*-------------Meeskonna intro-------------*/}
                    <h1 className="xl:text-4xl text-2xl font-bold text-center border-b border-gray-600 pt-20">
                        Heaolu programmid meeskonnale</h1>
                    <div className="flex flex-col items-center justify-center pb-20">
                        <img
                            src="/TuleKutsu/meeskonna_main.webp"
                            alt="Meeskonna heaolu"
                            className="object-cover w-[400px] h-[400px] rounded-full m-10"
                        />
                        <p className="max-w-3xl p-10 border rounded-3xl text-center text-lg text-gray-700">
                            Teie töötajate heaolu on meie prioriteet.
                            Üheskoos saame kõigile luua tervislikuma ja õnnelikuma töökeskkonna.
                        </p>

                        <a
                            href="mailto:nova.atstuudio@gmail.com"
                            className="bg-[#f7f6ed] text-gray-800 font-bold py-2 px-4 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out mt-10"
                        >
                            Küsi personaalset pakkumist
                        </a>
                    </div>

                    {/*-------------Meeskonna about-------------*/}
                    <div className="bg-[#F2E2CE] xl:px-40 px-10 py-20">
                        <h2 className="font-bold text-3xl p-10 text-center">Uuri lähemalt meie meeskonna programmide
                            kohta</h2>
                        <ToggleDiv
                            title="Tasakaalustatud ja tervisliku eluviisi loeng"
                            imageSrc="/TuleKutsu/meeskonna_tasakaalustatud.webp"
                            imageAlt="Tasakaalustatud ja tervisliku eluviisi loeng"
                            classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                            classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                        >
                            <h3 className="text-xl font-bold mb-3">Heaolu päev</h3>
                            <p>See ei ole järjekordne loeng kus räägitakse, mida kõike pead tegema ja muutma oma elus,
                                vaid varustame Teie töötajaid väga praktiliste tööriistadega. Loengus räägitakse,
                                kuidas väikeste harjumustega, mida saab säilitada nii töökohas kui ka väljaspool,
                                saab saavutada hea enesetunde ning oskuse oma keha hinnata.
                                Koolitus hõlmab mitmeid teemasid nagu toitumine, liikumine, stressijuhtimine ja
                                tähelepanelikkus. Selline terviklik lähenemine edendab heaolu kultuuri ja
                                julgustab töötajaid oma tervist esikohale seadma.
                            </p>
                        </ToggleDiv>
                        <ToggleDiv
                            title="Meeskonna jooga"
                            imageSrc="/TuleKutsu/meeskonna_jooga.webp"
                            imageAlt="Meeskonna Jooga"
                            classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                            classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                        >
                            <h3 className="text-xl font-bold mb-3">Tööstressi vastu joogaga</h3>
                            <p className="text-md mb-6 leading-relaxed">Keha aktiivsus on tähtis osa tervisliku eluviisi
                                säilitamisel.
                                Meeskonna jooga eesmärk on anda töötajatele võimalus vähendada stressi
                                ning parandada painduvust ja kehahoiakut joogaasendite harjutuste abil.
                                Kõik meie meeskonna jooga on loodud vastama kõikidele treeningtasemetele
                                ja neid saab kohandada vastavalt iga inimese või meeskonna vajadustele ja eelistustele.
                            </p>
                        </ToggleDiv>
                        <ToggleDiv
                            title="Naerujooga"
                            imageSrc="/TuleKutsu/naeru_jooga1.webp"
                            imageAlt="Naerujooga"
                            classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                            classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                        >
                            <h3 className="text-xl font-bold mb-3">Naeruteraapia tööpäevas</h3>
                            <p>
                                See on ainulaadne jooga, mis ühendab naeru- ja väljendusharjutused.
                                Naerujooga parandab hapniku voolu kehas, soodustab endorfiinide vabanemist ning
                                negatiivsete mõtete ja emotsioonide vabastamist, mis aitab inimestel vabaneda
                                survest olla täiuslik. Kohaloleku kaudu tekib rõõmus naer, mis tuleb südamest.
                                Naerujooga aitab püsida positiivses vaimses seisundis ning sobib ideaalselt meeskonna
                                ühendamiseks ja tööõhkkonna tõstmiseks. Oma kolleegi mitmetahulise näo vaatamine
                                eemaldab
                                tõkked ja toob osalejaid kokku ühisele kogemusele.
                            </p>
                        </ToggleDiv>
                        <ToggleDiv
                            title="Meeskonnamängud koostöö edendamiseks"
                            imageSrc="/TuleKutsu/meeskkonnamangud.webp"
                            imageAlt="Meeskonnamängud koostöö edendamiseks"
                            classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                            classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                        >
                            <h3 className="text-xl font-bold mb-3">Töötame koos</h3>
                            <p>
                                Meeskonnamängude eesmärk on edendada koostööd ja tugevdada meeskonnaliikmete
                                vahelisi sidemeid. Meil on varuks palju erinevaid mänge ja tegevusi, kuna iga
                                mäng ei pruugi igale meeskonnale sobida ja meie peame oluliseks valida tegevused,
                                kus kõik liikmed tunnevad end mugavalt ja turvaliselt. Meeskonnamängud näitavad
                                meeskonna dünaamikat ja võivad olla hüppelauaks põhiprobleemide lahendamisel.
                                Lisaks parandavad need suhtlust, usaldust ja meeskonna koostööd.
                            </p>
                        </ToggleDiv><ToggleDiv
                        title="Tervisliku toidu valmistamise workshop"
                        imageSrc="/TuleKutsu/tervislik_toidu_workshop.webp"
                        imageAlt="Tervisliku toidu valmistamise workshop"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                        classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                    >
                        <h3 className="text-xl font-bold mb-3">Maitsev ja tervislik</h3>
                        <p>
                            Tervisliku toidu valmistamise koolitus võib olla mitmes vormis,
                            kuid meie soovitame ja eelistame, et kolleegid katsetaksid ning
                            õpiksid koos maitsvat ja tervislikku toitu looma. Koos toidu valmistamine ja
                            söömine võib olla lõbus ja tähelepanekute rohke kogemus, kuna see on
                            tasakaalustatud elustiili oluline osa.
                        </p>
                    </ToggleDiv><ToggleDiv
                        title="Pilates, jooga, toolijooga, massaaž sinu töökohas"
                        imageSrc="/TuleKutsu/tookoha_pilates.webp"
                        imageAlt="Pilates, jooga, toolijooga, massaaž sinu töökohas"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                        classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                    >
                        <h3 className="text-xl font-bold mb-3">Jooga, pilates ja massaaž</h3>
                        <p>
                            Oleme pühendunud, et pakkuda tõhusaid heaolu lahendusi,
                            mis toetavad töötajate füüsilist ja vaimset tervist.
                            Pakume jooga, pilates ja massaaži teenuseid teie töökohas.
                            Nende praktikate integreerimine töökoha heaolu programmidesse on
                            märkimisväärne samm edasi töötajate heaolu poole püüdlemisel.
                            Kasutades meie jooga, pilatese ja massaži teenuseid enda
                            töökohas saab ettevõte luua elujõulisema, produktiivsema ja rahulolevama tööjõu.
                        </p>
                    </ToggleDiv>
                        <ToggleDiv
                            title="Teie aega parim meeskkonna retriit"
                            imageSrc="/TuleKutsu/meeskonna_retriit.webp"
                            imageAlt="Meeskkonna retriit"
                            classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                            classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                        >
                            <h3 className="text-xl font-bold mb-3">Meeskonna retriit</h3>
                            <p>
                                Iga päev samasse rutiini kinni jäämine mõjutab meie loomingulisust ning
                                sellepärast aitame korraldada ettevõtetele retriite,
                                et positiivselt mõjutada nii organisatsiooni kui ka töötajaid.
                                Retriitidel keskendume füüsilise, vaimse ja emotsionaalse heaolu edendamisele.
                                Samuti võivad retriidid olla suunatud meeskonna loomisele, arendamisele ja
                                strateegilisele planeerimisele. Üks peamisi põhjusi, miks ettevõtted tahavad retriite
                                korraldada, on uute ideede ajurünnak. Retriit võib hõlmata töötubasid, juhendamist ja
                                tegevusi, mis aitavad edendada koostööd ja innovatsiooni kultuuri mõjutades meeskonna
                                dünaamikat. Saame kohandada kõik tegevused vastavalt teie konkreetsetele vajadustele.
                            </p>
                        </ToggleDiv>
                        <ToggleDiv
                            title="Meditatsioon"
                            imageSrc="/TuleKutsu/meeskonna_meditatsioon.webp"
                            imageAlt="Meditatsioon"
                            classnameForDiv="mt-4 flex xl:flex-row flex-col justify-between gap-6 items-center"
                            classnameForImg="object-cover lg:w-[600px] lg:h-[700px] w-[400px] h-[500px] rounded-3xl"
                        >
                            <h3 className="text-xl font-bold mb-3">Hingetõmbepaus</h3>
                            <p>
                                Vaimse heaolu edendamiseks ja stressi vähendamiseks pakume heaolu
                                programmide osana meditatsiooni.<br/>
                                Mitmed uuringuid on tõestanud, et meditatsioonil on palju eeliseid,
                                seal hulgas parem keskendumine, vähenenud ärevus ja üldine vaimne selgus.
                                Meditatsiooni läbi õpivad töötajad erinevaid meditatsiooni meetodeid meele
                                rahustamiseks,
                                sisemise rahu leidmiseks ja stressi maandamiseks.
                                Keset kiiret töökeskkonda võimaldab meditatsioon töötajatel end laadida ja suurendada
                                vastupidavust töökoha survele.
                            </p>
                        </ToggleDiv>
                    </div>

                </div>
                <Footer/>
            </div>
        </>
    );
}