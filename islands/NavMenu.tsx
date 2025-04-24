import { h } from "preact";
import { useState } from "preact/hooks";

export default function NavMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div class="relative">
            {/* Hamburger Icon */}
            <button
                class="md:hidden text-gray-800"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            {/* Mobile Dropdown */}
            {open && (
                <ul class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-800 z-50">
                    <li class="border-b p-2 hover:bg-gray-100"><a href="/booking">Broneering</a></li>
                    <li class="border-b p-2 hover:bg-gray-100"><a href="#">Tunniplaan</a></li>
                    <li class="border-b p-2 hover:bg-gray-100"><a href="#">Üritused</a></li>
                    <li class="border-b p-2 hover:bg-gray-100"><a href="#">Praktikad/Koolitused</a></li>
                    <li class="border-b p-2 hover:bg-gray-100"><a href="#">Tule/Kutsu Külla</a></li>
                    <li class="border-b p-2 hover:bg-gray-100"><a href="#">Blogi</a></li>
                    <li class="p-2 hover:bg-gray-100"><a href="#">Meist</a></li>
                </ul>
            )}
        </div>
    );
}