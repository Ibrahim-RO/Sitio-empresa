import {
    ArrowRight,
    CheckCircle2,
    Layers,
} from "lucide-react";
import DataStreamBackground from "./DataStreamBackground";
import Terminal from "../ui/Terminal";
import { useState } from "react";
import Modal from "../ui/Modal";

export default function HeroImage() {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    return (
        <section className="min-h-dvh flex justify-center items-center text-slate-300 selection:bg-blue-500/30 selection:text-white">
            {/* Background */}
            <DataStreamBackground />

            {/* Decorative gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-125 bg-linear-to-b from-blue-900/10 to-transparent" />
                <div className="absolute bottom-0 right-0 size-125 bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <section className="relative overflow-hidden w-full">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6">

                    {/* LEFT */}
                    <div className="space-y-8 mt-5">

                        <div
                            className="animate-on-load fade-down inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            Disponible para nuevos retos
                        </div>

                        <h1
                            className="animate-on-load fade-up text-4xl lg:text-6xl font-bold leading-[1.1] text-white"
                            style={{ animationDelay: "0.2s" }}
                        >
                            No escribimos código. <br />
                            <span className="text-gradient-primary">
                                Diseñamos el Futuro.
                            </span>
                        </h1>

                        <p
                            className="animate-on-load fade-up text-lg text-slate-400 max-w-lg leading-relaxed"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Agencia de desarrollo de software de alto rendimiento.
                            Transformamos ideas complejas en experiencias digitales
                            escalables, rápidas y visualmente impactantes.
                        </p>

                        <div
                            className="animate-on-load fade-up flex flex-col sm:flex-row gap-4 pt-2"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <button
                                onClick={() => setOpen(true)}
                                className="group px-8 py-4 rounded-full bg-blue-400 text-white font-bold transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                            >
                                Agendar Consultoría
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>

                            <a
                                href="/projects"
                                className="px-8 py-4 rounded-full border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                <Layers size={18} />
                                Ver Proyectos
                            </a>
                        </div>

                        <div
                            className="animate-on-load fade-up flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-500 font-mono"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-500" />
                                React / Next.js
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-500" />
                                Cloud Native
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-500" />
                                Mobile First
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="animate-on-load zoom-in relative flex justify-center lg:justify-end"
                        style={{ animationDelay: "0.35s" }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 bg-linear-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-[80px] -z-10" />
                        <Terminal />
                    </div>

                </div>
            </section>

            {open && (
                <Modal
                    isOpen={open}
                    onClose={onClose}
                />
            )}
        </section>
    );
}
