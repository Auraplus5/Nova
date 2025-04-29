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
          <nav class="hidden md:block">
            <ul class="flex space-x-6 text-lg">
              <li>
                <a href="/tunnid">Tunnid</a>
              </li>
              <li>
                <a href="/tunniplaan">Tunniplaan</a>
              </li>
              <li>
                <a href="/tule_kutsu">Tule/Kutsu külla</a>
              </li>
              <li>
                <a href="/uritused">Üritused</a>
              </li>
              <li>
                <a href="/meist">Meist</a>
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
