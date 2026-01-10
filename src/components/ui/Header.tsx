import { useState } from "react";
import { navItems } from "../../data/navigation";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-3 font-semibold">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                                T
                            </div>
                            <span className="text-zinc-900 dark:text-white text-lg">
                                TriCode
                            </span>
                        </a>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 transition"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <a
                            href="/contacto"
                            className="hidden md:inline-flex px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                        >
                            Cotizar
                        </a>

                        {/* Botón móvil */}
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label="Abrir menú"
                            className={`md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-zinc-900 dark:text-white ${open ? "menu-open" : ""
                                }`}
                        >
                            <span className="line" />
                            <span className="line" />
                        </button>
                    </div>
                </div>
            </div>

            {/* MENÚ MÓVIL */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
                >
                    <nav
                        onClick={(e) => e.stopPropagation()}
                        className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-3xl p-6 flex flex-col gap-5 animate-slideUp"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium text-zinc-800 dark:text-zinc-200"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="/contacto"
                            className="mt-2 text-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
                        >
                            Cotizar
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
