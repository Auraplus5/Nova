
export default function Footer(){
    return(
    <div className="bg-gray-800 text-white p-4">
        <div className="flex flex-row justify-center items-end gap-16">
        <div className="flex flex-col items-center justify-center">
            <img
                src="/Nova_Logo.png"
                alt="Logo"
                className="w-32 h-32"
            />
            <div className="text-center p-4">
                <p className="py-2">Nova tervise Stuudio, Pikk 51, Rakvere, 44307 Lääne-Viru maakond</p>
                <p className="py-2">Tel: +372 5323 6161</p>
                <p className="py-2">E-mail: nova.atstuudio@gmail.com</p>
            </div>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/novastuudio" target="_blank" rel="noopener noreferrer">
                    <img src="/icons8-facebook.svg" alt="Facebook" width="24" height="24"/>
                </a>
                <a href="https://www.instagram.com/novatervisestuudio/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons8-instagram.svg" alt="Instagram" width="24" height="24"/>
                </a>
            </div>
            <p className="text-sm pt-4">
                &copy; 2025 Nova Tervise Stuudio. Kõik õigused kaitstud.
            </p>
        </div>
                <ul className="flex flex-col text-lg space-y-6">
                    <li>
                        <a href="/" className="hover:underline">Avaleht</a>
                    </li>
                    <li>
                        <a href="/tunnid" className="hover:underline">Tunnid</a>
                    </li>
                    <li>
                        <a href="/tunniplaan" className="hover:underline">Tunniplaan</a>
                    </li>
                    <li>
                        <a href="/tuleKutsu" className="hover:underline">Tule/Kutsu külla</a>
                    </li>
                    <li>
                        <a href="/uritused" className="hover:underline">Üritused</a>
                    </li>
                    <li>
                        <a href="/meist" className="hover:underline">Meist</a>
                    </li>
                </ul>
            </div>
    </div>
    );
};