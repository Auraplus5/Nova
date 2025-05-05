/**
 * Footer component for the website
 * @constructor
 */
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
            <div className="text-center p-4 items-center justify-center">
                <p className="py-2">Nova tervise Stuudio, Pikk 51, Rakvere, 44307 Lääne-Viru maakond</p>
                <p className="py-2">Tel: +372 5323 6161</p>
                <p className="py-2">E-mail: nova.atstuudio@gmail.com</p>
            </div>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/novastuudio" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                              clip-rule="evenodd"/>
                    </svg>
                </a>

                <a href="https://www.instagram.com/novatervisestuudio/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd"
                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                              clip-rule="evenodd"/>
                    </svg>

                </a>
            </div>
            <p className="text-sm pt-4">
                &copy; 2025 Nova Tervise Stuudio. Kõik õigused kaitstud.
            </p>
        </div>
        </div>
    </div>
    );
};