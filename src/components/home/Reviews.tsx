import { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { reviews } from "../../data/reviews"

export function Reviews() {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((prev) => (prev + 1) % reviews.length)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    useEffect(() => {
        const interval = setInterval(next, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="max-w-5xl mx-auto px-4 py-20 text-white">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Lo que dicen nuestros clientes
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Empresas que confiaron en nosotros y escalaron su negocio con tecnología de alto nivel.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {reviews.map((review, i) => (
                        <div key={i} className="min-w-full px-2">
                            <div className="border border-slate-300 rounded-2xl p-8 
                              max-w-xl mx-auto text-center transition">

                                <div className="flex justify-center gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star
                                            key={s}
                                            size={20}
                                            className={
                                                s < review.rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-slate-300"
                                            }
                                        />
                                    ))}
                                </div>

                                {/* Comment */}
                                <p className="mb-6 leading-relaxed">
                                    “{review.comment}”
                                </p>

                                {/* User */}
                                <div>
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-sm">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 
                     bg-white/20 hover:bg-white/30 cursor-pointer 
                     rounded-full p-2 transition"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 
                     bg-white/20 hover:bg-white/30  cursor-pointer
                     rounded-full p-2 transition"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${index === i ? "bg-white" : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
