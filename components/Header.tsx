import NavMenu from "../islands/NavMenu.tsx";

export default function Header() {
  return (
    <header class="text-inherit w-full font-sans">
      <div className="flex items-center justify-between py-4 px-6">
        <a href="/" className="flex items-center gap-4">
          <img
            src="/Nova_Logo.png"
            alt="Logo"
            width="96"
            height="96"
          />
        </a>
        <div class="flex items-center gap-6">
          <nav class="hidden lg:block">
            <ul class="flex space-x-6 text-lg">
              <li>
                <a href="/" className="hover:text-[#af6b30]">Avaleht</a>
              </li>
              <li>
                <a href="/tunnid" className="hover:text-[#af6b30]">Tunnid</a>
              </li>
              <li>
                <a href="/tunniplaan" className="hover:text-[#af6b30]">Tunniplaan</a>
              </li>
              <li>
                <a href="/tuleKutsu" className="hover:text-[#af6b30]">Tule/Kutsu külla</a>
              </li>
              <li>
                <a href="/uritused" className="hover:text-[#af6b30]">Üritused</a>
              </li>
              <li>
                <a href="/meist" className="hover:text-[#af6b30]">Meist</a>
              </li>
            </ul>
          </nav>

          <NavMenu />
          <div class="flex items-center gap-3 px-15">
            <a
              href="https://www.facebook.com/novastuudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons8-facebook.svg"
                alt="Facebook"
                width="24"
                height="24"
              />
            </a>
            <a
              href="https://www.instagram.com/novatervisestuudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons8-instagram.svg"
                alt="Instagram"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
