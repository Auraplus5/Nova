import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Button from "../components/Button.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getSessionUser } from "../lib/auth.ts";

/**
 * This is the main page of the application. It renders the home page with a header, footer, and various sections.
 * It also handles the GET request to fetch the user session data.
 */


export const handler: Handlers = {
    async GET(req, ctx) {
        const { user, role, first_name } = await getSessionUser(req);

        return ctx.render({ user, role, first_name });
    }
};



export default function Home({data}: PageProps<{ user?: any, role?: string, first_name?: string }>) {

    return (
        <>
            <Head>
                <title>Nova Tervise Stuudio</title>
                <meta
                    name="description"
                    content="Nova Tervise Stuudio - Rahusta meelt ja vabasta keha. Joogastuudio Rakveres"
                />
                <meta
                    name="keywords"
                    content="joogastuudio, tervise stuudio, Nova Tervise Stuudio, Rakvere"
                />
                <meta name="author" content="Nova Tervise Stuudio"/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="Nova Tervise Stuudio"/>
                <meta
                    property="og:description"
                    content="Broneeri tund või osale meie üritustel."
                />
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/Nova_Logo.png"/>
            </Head>
            <div className="bg-[#f7f6ed] min-h-screen">
            <Header user={data.user} role={data.role} first_name={data.first_name}/>
            <div className="relative bg-[url(/main_pic.webp)] bg-cover bg-center lg:h-[850px] h-[400px]">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div
                    className="relative z-10 flex flex-col lg:items-start items-center justify-center h-full text-center text-white lg:px-[120px] pb-[100px]">
                    <div className="flex flex-col items-center text-left text-white max-w-2xl">
                        <h1 className="lg:text-5xl text-2xl font-bold mb-2">Nova Tervise Stuudio</h1>
                        <p className="mb-10 text-lg">
                            Rahusta meelt ja vabasta keha
                        </p>
                        <Button href="/tunniplaan" variant="primary">Tunniplaan</Button>
                    </div>
                </div>
            </div>

            {/*------------------Tunnid section------------------*/}

            <div className="lg:py-20 py-10">
                <h2 className="text-4xl font-bold text-center mb-5">Tunnid</h2>
                <p className="text-gray-900 text-lg text-center">Ära ütle joogale ei, leia endale sobiv tund.</p>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-10 mt-16">
                    <div className="flex flex-col items-center justify-center p-4 max-w-md lg:h-[600px]">
                        <img src="/Tunnid/klassikaline_jooga.webp" alt="Klassikaline jooga"
                             className="w-[300px] h-[400px] object-cover rounded-lg"/>
                        <h3 className="text-xl font-bold m-4">Klassikaline jooga</h3>
                        <p className="text-gray-700 text-lg text-center">
                            Klassikaline joogatund koosneb hingamisharjutustest (pranayama), jooga asenditest ja
                            lõdvestusest.
                        </p>

                    </div>
                    <div className="flex flex-col items-center justify-center p-4 max-w-md lg:h-[600px]">
                        <img src="/Tunnid/õhujooga.webp" alt="Õhujooga"
                             className="w-[300px] h-[400px] object-cover rounded-lg"/>
                        <h3 className="text-xl font-bold m-4">Õhujooga</h3>
                        <p className="text-gray-700 text-lg text-center">Õhujoogas kasutame asendite sooritamiseks
                            siidist linasid, mis aitavad võtta sügavamaid joogaasendeid.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 max-w-md lg:h-[600px]">
                        <img src="/Tunnid/paarisjooga.webp" alt="Acro-paarisjooga"
                             className="w-[300px] h-[400px] object-cover rounded-lg"/>
                        <h3 className="text-xl font-bold m-4">Acro-paarisjooga</h3>
                        <p className="text-gray-700 text-lg text-center">Paarisjooga õpetab kuulama partnerit
                            ja otsima tasakaalu, pannes end proovile nii füüsilisel kui vaimsel tasandil.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-10">
                    <Button href="/tunnid" variant="secondary">Vaata veel tunde</Button>
                </div>
            </div>


            {/*------------------Tagasiside div------------------*/}

            <div className="flex flex-col items-center justify-center py-20 bg-[#F2E2CE]">
                <h2 className="text-3xl">Tagasiside</h2>
                <div className="flex lg:flex-row flex-col gap-10 mt-16 max-w-3xl w-full">
                    <div className="text-lg lg:w-1/2 flex flex-col justify-between p-4">
                        <p>
                            “Olen joogaga tegelenud viimased pool aastat.
                            Läksin joogasse, et saada leevendust seljavaludele.
                            Tänu joogale olen saanud painduvust ja liikuvust juurde.
                            Samuti on joogaga tegelemine muutnud emotsionaalselt positiivsemaks ja tasakaalukamaks.“
                        </p>
                        <span className="italic mt-4">- Aime Hahndorf</span>
                    </div>
                    <div className="hidden lg:block w-px bg-gray-400"></div>
                    <div className="text-lg lg:w-1/2 flex flex-col justify-between p-4">
                        <p>
                            “Jooga on minu elus uus kogemus. Tänu juhendajale olen saanud parema tervise. Keha on
                            aktiivsem ja seljavalud kadunud.
                            Keha ja vaim tasakaalus.”
                        </p>
                        <span className="italic mt-4">- Raissa</span>
                    </div>
                </div>
            </div>

            {/*------------------Asukoht div------------------*/}
            <div className="bg-[#f7f6ed] lg:px-20 px-10">
                <h2 className="text-center text-4xl text-bold pt-20 mb-10">Asukoht</h2>
                <div className="flex lg:flex-row flex-col items-start justify-center gap-16 pb-20">
                    <div className="flex flex-col">
                        <h2 className="text-2xl text-bold mb-5">Nova Tervise Stuudio</h2>
                        <p className="text-lg text-gray-700">Pikk tn 51, Rakvere, Lääne-Viru maakond</p>
                    </div>
                    <iframe
                        className="w-full h-[300px] lg:w-[800px] lg:h-[450px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.2094377118532!2d26.3540243391371!3d59.34265546132123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4693742d0654fb53%3A0x7706e7b504ae3fba!2sPikk%20tn%2051%2C%20Rakvere%2C%2044307%20L%C3%A4%C3%A4ne-Viru%20maakond!5e0!3m2!1set!2see!4v1746127121894!5m2!1set!2see"
                        width="600"
                        height="450"
                        style="border:0;"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                {/*------------------Contact div------------------*/}
            <div className="bg-gray-200 lg:px-20 px-10">
                <h2 className="text-center text-4xl text-bold pt-20 mb-10">Võta ühendust</h2>
                <div className="flex flex-col items-center justify-center gap-10 pb-20">
                    <form method="POST" action="/api/contact" className="space-y-4 max-w-lg mx-auto">
                        <label htmlFor="name" className="text-lg font-bold">Nimi</label>
                        <input name="name" type="text" required placeholder="Sinu nimi" className="border p-2 w-full"/>
                        <label htmlFor="email" className="text-lg font-bold">E-post</label>
                        <input name="email" type="email" required placeholder="Sinu e-post"
                               className="border p-2 w-full"/>
                        <label htmlFor="message" className="text-lg font-bold">Sõnum</label>
                        <textarea name="message" required placeholder="Sõnum"
                                  className="border p-2 w-full h-40"></textarea>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Saada</button>
                    </form>
                </div>
            </div>
                <Footer/>
            </div>
        </>
    );
}
