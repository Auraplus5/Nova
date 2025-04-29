import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ToggleDiv from "../islands/ToggleDiv.tsx";

export default function Tule_kutsu(){
    return (
        <div class="min-h-screen bg-[#f7f6ed]">
            <Header/>
            <div className="py-20 px-10">
                <h1 className="text-4xl font-bold text-center border-b border-gray-600">Teetseremoonia sünnipäevaks ja erilisteks hetkedeks</h1>
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/TuleKutsu/tee_tser_2.jpg"
                        alt="Tee Tseremoonia 1"
                        className="object-cover w-[20vw] h-[20vw] rounded-full m-10"
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
                    <ToggleDiv title="Mida me pakume?"
                               imageSrc="/TuleKutsu/tee_tser_1.jpg"
                               imageAlt="Teetseremoonia"
                               imageWidth="500"
                               imageHeight="700"
                               classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-start"
                               classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                    >
                        <p className="max-w-3xl">Nova tervisestuudios saad nautida tee tseremooniat,
                            mis on palju rohkem kui lihtsalt jook — see on rännak läbi erinevate teesortide,
                            ajaloo ja kultuuri, kus iga tass avab midagi uut ja põnevat.
                            Meie tee tseremooniad on ideaalne viis muuta sinu sünnipäev
                            või eriline koosviibimine tõeliselt meeldejäävaks.</p>
                        <br/>
                        <li className="font-bold italic">
                            Traditsiooniline Feng Shui stiilis teetseremoonia või isikliku maitse järgi kohandatud tee elamus
                        </li>
                        <br/>
                        <li>
                            <span className="font-bold italic">Tee serveerimine traditsioonilistes teetseremoonia nõudes</span>
                            , et kogeda tee maitse mitmekesisust ja avastada, kuidas iga nõu mõjutab maitset
                        </li>
                        <br/>
                        <li>
                            <span className="font-bold italic">Erinevad teesordid ja tee lehed ning õied</span>
                            , mille kaudu õpid tundma tee ainulaadsust ja kvaliteeti
                        </li>
                        <br/>
                        <li>
                            <span className="font-bold italic">Lood tee ajaloost ja kultuurist</span>
                            - iga tee on oma lugu, mis rikastab kogemust
                        </li>
                        <br/>
                        <li>
                            <span className="font-bold italic">Teetseremoonia ajal toimuvad mängud</span>
                            , mis muudavad iga hetke lõbusaks ja harivaks
                        </li>
                        <br/>
                        <li className="font-bold italic">Tõstame bokaali kvaliteetset teed sinu tervise nimel!</li>
                        <br/>
                        <br/>
                        <h2 className="text-xl font-bold italic">Lõõgastav ja rahu toov kogemus</h2>
                        <br/>
                        <p>Teetseremoonia ei ole ainult maitsete nautimine, vaid ka täielik lõõgastus.
                            Iidsete traditsioonide järgi läbiviidud tseremoonia ühendab sind ja su külalisi
                            tee rikka ajaloo ja kultuuri kaudu, pakkudes rahu ja tasakaalu igas sammus.</p>
                        <br/>
                        <br/>
                        <h2 className="text-xl font-bold italic">Paindlik Teenuste Valik ja Lisavõimalused</h2>
                        <br/>
                        <p>Oleme paindlikud ja pakume erinevaid lisa teenuseid, et muuta sinu kogemus veelgi erilisemaks.
                            Näiteks saad lisada oma teetseremooniale helirännakud – šamanitrummid, gongid, tuulekellad
                            ja muud rahustavad helid, mis loovad täiusliku lõdvestava ja tasakaalustava atmosfääri.
                            Samuti saame kohandada teenust vastavalt sinu erisoovidele.
                        </p>
                        <br/>
                        <br/>
                        <h2 className="text-xl font-bold italic">Broneeri oma teetseremoonia juba täna!</h2>
                        <br/>
                        <p>Tee oma sünnipäev või eriline koosolek meeldejäävaks ja originaalseks. Uuri lähemalt,
                            kuidas Nova teatime teetseremoonia saab muuta sinu sündmuse tõeliselt unustamatuks
                            ja erilisimaks hetkega! Broneeri oma teetseremoonia täna ja loo oma
                            sünnipäevast midagi täiesti erakordset.</p>
                        <br/>
                    </ToggleDiv>

                </div>
                <h1 className="text-4xl font-bold text-center border-b border-gray-600 pt-10">Laste glow sünnipäev Nova stuudios</h1>
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/TuleKutsu/laste_glow.jpg"
                        alt="Laste Glow Sünnipäev"
                        className="object-cover w-[20vw] h-[20vw] rounded-full m-10"
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
                    <ToggleDiv
                        title="Mida me pakume?"
                        imageSrc="/TuleKutsu/laste_glow2.jpg"
                        imageAlt="Laste Glow Sünnipäev"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-start"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                    >
                        <h1 className="text-xl font-bold">Valgus-Atribuutika- Kiigud</h1>
                        <br/>
                        <p>Erilised valgusinstallatsioonid,
                            sealhulgas LED-tuled, neonvalgus. Glow-in-the-dark efektid,
                            mis muudavad kogu õhkkonna eriliseks ja värviliseks.
                            Glow-in-the-dark aksessuaarid, mida lastele jagatakse(säravad käepaelad, helendavad ehted, prillid).
                        </p>
                        <br/>
                        <p>Spetsiaalsed lina kiigud, kus lapsed saavad teha lõbusaid ja lõdvestavaid harjutusi.
                            Kiikudes saab ennast õhku tõsta, võttes osa mängudest ja harjutustest,
                            mis pakuvad nii liikumis- kui ka tasakaalu väljakutseid.
                            Kiigud on turvaliselt paigutatud ja kohandatud lastele, et nad saaksid nautida liikumisvabadust.
                        </p>
                        <br/>
                        <br/>
                        <h1 className="text-xl font-bold">Sünnipäeva juht stuudios</h1>
                        <br/>
                        <p>Sünnipäeva juht on aktiivselt kohal, ta viib lapsed läbi lõbusate harjutuste
                            ja meelelahutuslike tegevuste. Sünnipäev juht näitab ette,
                            kuidas teha lõbusaid liikumisharjutusi,
                            näiteks kiikumine koos sõpradega või tasakaalu harjutused kiigel.
                        </p>
                        <br/>
                        <br/>
                        <h1 className="text-xl font-bold">Lisateenused</h1>
                        <br/>
                        <p>
                            Meie Glow sünnipäev pakub mitmesuguseid lõbusaid tegevusi
                            ja meelelahutusvõimalusi, kuid me mõistame,
                            et iga üritus on unikaalne. Seetõttu on meil paindlik teenuste pakkumine,
                            mis võimaldab lisada täiendavaid elemente vastavalt teie soovidele
                            ja ideedele ( neoon- ja helendavad õhupallid, glow-paberid ja kleebised, pinjata,
                            t-särk külaliste soovidega). Oleme avatud erinevatele ideedele ja
                            valmis ellu viima kõik teie ettepanekud, et teie sünnipäevast saaks tõeline unistuste pidu!
                        </p>
                        <br/>
                    </ToggleDiv>

                </div>
                <h1 className="text-4xl font-bold text-center border-b border-gray-600 pt-10">Heaolu programmid meeskonnale
                </h1>
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/TuleKutsu/meeskonna.jpg"
                        alt="Meeskonna heaolu"
                        width="1000"
                        height="1000"
                        className="object-cover w-[20vw] h-[20vw] rounded-full m-10"
                    />
                    <p className="max-w-3xl p-10 border rounded-3xl text-center text-lg text-gray-700">
                        Teie töötajate heaolu on meie prioriteet.
                        Üheskoos saame kõigile luua tervislikuma ja õnnelikuma töökeskkonna.
                    </p>

                    <a
                        href="mailto:example@email.com"
                        className="bg-[#f7f6ed] text-gray-800 font-bold py-2 px-4 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out mt-10"
                    >
                        Küsi personaalset pakkumist
                    </a>
                    <h2 className="font-bold text-3xl p-10">Uuri lähemalt meie programmide kohta</h2>
                    <ToggleDiv
                        title="Tasakaalustatud ja tervisliku eluviisi loeng"
                        imageSrc="/TuleKutsu/meeskonna_tasakaalustatud.jpg"
                        imageAlt="Tasakaalustatud ja tervisliku eluviisi loeng"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
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
                        imageSrc="/TuleKutsu/meeskonna_jooga.jpg"
                        imageAlt="Meeskonna Jooga"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                    >
                        <p>Keha aktiivsus on tähtis osa tervisliku eluviisi säilitamisel.
                            Meeskonna jooga eesmärk on anda töötajatele võimalus vähendada stressi
                            ning parandada painduvust ja kehahoiakut joogaasendite harjutuste abil.
                            Kõik meie meeskonna jooga on loodud vastama kõikidele treeningtasemetele
                            ja neid saab kohandada vastavalt iga inimese või meeskonna vajadustele ja eelistustele.
                        </p>
                    </ToggleDiv>
                    <ToggleDiv
                        title="Naerujooga"
                        imageSrc="/TuleKutsu/naeru_jooga1.jpg"
                        imageAlt="Naerujooga"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
                        <p>
                            See on ainulaadne jooga, mis ühendab naeru- ja väljendusharjutused.
                            Naerujooga parandab hapniku voolu kehas, soodustab endorfiinide vabanemist ning
                            negatiivsete mõtete ja emotsioonide vabastamist, mis aitab inimestel vabaneda
                            survest olla täiuslik. Kohaloleku kaudu tekib rõõmus naer, mis tuleb südamest.
                            Naerujooga aitab püsida positiivses vaimses seisundis ning sobib ideaalselt meeskonna
                            ühendamiseks ja tööõhkkonna tõstmiseks. Oma kolleegi mitmetahulise näo vaatamine eemaldab
                            tõkked ja toob osalejaid kokku ühisele kogemusele.
                        </p>
                    </ToggleDiv>
                    <ToggleDiv
                        title="Meeskonnamängud koostöö edendamiseks"
                        imageSrc="/TuleKutsu/meeskkonnamangud.jpg"
                        imageAlt="Meeskonnamängud koostöö edendamiseks"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
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
                        imageSrc="/TuleKutsu/tervislik_toidu_workshop.jpg"
                        imageAlt="Tervisliku toidu valmistamise workshop"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
                        <p>
                            Tervisliku toidu valmistamise koolitus võib olla mitmes vormis,
                            kuid meie soovitame ja eelistame, et kolleegid katsetaksid ning
                            õpiksid koos maitsvat ja tervislikku toitu looma. Koos toidu valmistamine ja
                            söömine võib olla lõbus ja tähelepanekute rohke kogemus, kuna see on
                            tasakaalustatud elustiili oluline osa.
                        </p>
                    </ToggleDiv><ToggleDiv
                        title="Pilates, jooga, toolijooga, massaaž sinu töökohas"
                        imageSrc="/TuleKutsu/tookoha_pilates.jpg"
                        imageAlt="Pilates, jooga, toolijooga, massaaž sinu töökohas"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
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
                        imageSrc="/TuleKutsu/meeskonna_retriit.jpg"
                        imageAlt="Meeskkonna retriit"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
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
                        imageSrc="/TuleKutsu/meeskonna_meditatsioon.jpg"
                        imageAlt="Meditatsioon"
                        imageWidth="500"
                        imageHeight="700"
                        classnameForDiv="mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"
                        classnameForImg="object-cover w-[30vw] h-[35vw] rounded-3xl"
                        >
                        <p>
                            Vaimse heaolu edendamiseks ja stressi vähendamiseks pakume heaolu
                            programmide osana meditatsiooni.<br/>
                            Mitmed uuringuid on tõestanud, et meditatsioonil on palju eeliseid,
                            seal hulgas parem keskendumine, vähenenud ärevus ja üldine vaimne selgus.
                            Meditatsiooni läbi õpivad töötajad erinevaid meditatsiooni meetodeid meele rahustamiseks,
                            sisemise rahu leidmiseks ja stressi maandamiseks.
                            Keset kiiret töökeskkonda võimaldab meditatsioon töötajatel end laadida ja suurendada vastupidavust töökoha survele.
                        </p>
                    </ToggleDiv>

                </div>
            </div>
            <Footer/>
        </div>
    );
}