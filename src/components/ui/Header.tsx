import { useEffect, useState } from "react";
import { navItems } from "../../data/navigation";
import Modal from "./Modal";
import Logo from "../../assets/DSWHITE.png"

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const onclose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center gap-1 font-semibold">
                <img src={Logo.src} className="w-10" alt="Logo DevStack Studio" />
                <span className="text-slate-100 text-lg tracking-tight">
                  DevStack Studio
                </span>
              </a>
              {/* Desktop nav */}
              <nav className="hidden md:flex gap-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`
                        relative text-sm font-medium uppercase transition
                        ${isActive
                          ? "text-sky-400"
                          : "text-slate-200 hover:text-sky-400"
                        }
                        after:absolute after:left-0 after:-bottom-1
                        after:h-0.5 after:bg-sky-500 after:transition-all
                        ${isActive
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                        }
                      `}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              {/* Desktop CTA */}
              <button
                onClick={() => setOpenModal(true)}
                className="hidden md:inline-flex px-5 py-2 rounded-xl bg-linear-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/40 hover:scale-[1.04] transition"
              >
                Cotizar
              </button>

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
              className="absolute bottom-0 left-0 right-0 bg-[#020617] border-t border-slate-800 rounded-t-3xl p-6 flex flex-col gap-5 animate-slideUp"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition ${isActive
                        ? "text-sky-400"
                        : "text-slate-200 hover:text-sky-400"
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <button
                onClick={() => setOpenModal(true)}
                className="mt-2 text-center px-6 py-3 rounded-xl bg-linear-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-md shadow-sky-500/30"
              >
                Cotizar
              </button>
            </nav>
          </div>
        )}
      </header>

      {openModal && <Modal isOpen={openModal} onClose={onclose} />}
    </>
  );
}
