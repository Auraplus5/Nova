
export default function Footer(){
    return(
    <div className="bg-gray-800 text-white p-4">
        <div className="flex flex-col items-center justify-center gap-6">
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

        </div>
        <div className="container mx-auto text-center">
            <p className="text-sm pt-4">
                &copy; 2025 Nova Tervise Stuudio. Kõik õigused kaitstud.
            </p>
        </div>
    </div>
    );
};