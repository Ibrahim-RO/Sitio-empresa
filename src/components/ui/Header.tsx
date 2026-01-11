import { useState } from "react";
import { navItems } from "../../data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="
          bg-[#020617]/80
          backdrop-blur-xl
          border-b border-slate-800/60
        "
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 font-semibold">
              <div
                className="
                  w-9 h-9 rounded-xl
                  bg-linear-to-br from-sky-400 to-blue-600
                  text-white flex items-center justify-center
                  shadow-md shadow-sky-500/20
                "
              >
                T
              </div>
              <span className="text-slate-100 text-lg tracking-tight">
                TriCode
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    relative text-sm font-medium uppercase
                    text-slate-200
                    hover:text-sky-400 transition
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0
                    after:bg-sky-500
                    hover:after:w-full after:transition-all
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="/contacto"
              className="
                hidden md:inline-flex
                px-5 py-2 rounded-xl
                bg-linear-to-r from-sky-500 to-blue-600
                text-white text-sm font-semibold
                shadow-md shadow-sky-500/25
                hover:shadow-lg hover:shadow-sky-500/40
                hover:scale-[1.04] transition
              "
            >
              Cotizar
            </a>

            {/* Mobile button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            >
              <span className="w-6 h-0.5 bg-slate-300 rounded" />
              <span className="w-6 h-0.5 bg-slate-300 rounded" />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="
              absolute bottom-0 left-0 right-0
              bg-[#020617]
              border-t border-slate-800
              rounded-t-3xl
              p-6 flex flex-col gap-5
              animate-slideUp
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-lg font-medium
                  text-slate-200
                  hover:text-sky-400 transition
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contacto"
              className="
                mt-2 text-center px-6 py-3 rounded-xl
                bg-linear-to-r from-sky-500 to-blue-600
                text-white font-semibold
                shadow-md shadow-sky-500/30
              "
            >
              Cotizar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
