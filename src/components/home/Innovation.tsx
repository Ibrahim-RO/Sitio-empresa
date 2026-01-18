import { useState } from "react"
import Modal from "../ui/Modal"

export default function Innovation() {
    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            <section className="py-32 relative text-center px-6 text-white">
                <div className="absolute inset-0 to-transparent pointer-events-none"></div>

                <div data-aos="fade-up" className="max-w-3xl mx-auto relative z-10">
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        ¿Listo para innovar?
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-xl text-slate-500 mb-10"
                    >
                        No dejes que tu competencia se adelante. Construyamos hoy la
                        tecnología de mañana.
                    </p>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => setOpen(true)}
                            className="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                        >
                            Hablar con un Experto
                        </button>
                    </div>
                </div>
            </section>

            {open && (
                <Modal
                    isOpen={open}
                    onClose={onClose}
                />
            )}
        </>
    )
}
