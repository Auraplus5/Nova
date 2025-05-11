import { useEffect, useState } from "preact/hooks";

export default function NavMenu(
  { role, user }: { role?: string; user?: { email: string; id: string } },
) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const handleScroll = () => {
        setOpen(false);
      };
      globalThis.addEventListener("scroll", handleScroll);
      return () => {
        globalThis.removeEventListener("scroll", handleScroll);
      };
    }
  }, [open]);
  return (
    <div class="relative">
      {/* Hamburger Icon */}
      <button
        type="button"
        class="xl:hidden text-gray-800 mt-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <ul class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-800 z-50">
          <li class="border-b p-2 hover:bg-gray-100">
            <a href="/tunnid">Tunnid</a>
          </li>
          <li class="border-b p-2 hover:bg-gray-100">
            <a href="/tunniplaan">Tunniplaan</a>
          </li>
          <li class="border-b p-2 hover:bg-gray-100">
            <a href="/tuleKutsu">
              Tule/Kutsu külla
            </a>
          </li>
          <li class="border-b p-2 hover:bg-gray-100">
            <a href="/uritused">
              Üritused
            </a>
          </li>
          <li class="border-b p-2 hover:bg-gray-100">
            <a href="/meist">
              Meist
            </a>
          </li>
          {role === "admin" && (
            <li class="border-b p-2 hover:bg-gray-100">
              <a href="/admin/timetable">Admin</a>
            </li>
          )}
          {user && (
            <li class="border-b p-2 hover:bg-gray-100">
              <a href={`/user/${user.id}`}>Minu Broneeringud</a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
