export default function Tecnhologies() {
  const techStack = [
    'React', 'Next.js', 'Astro', 'Node.js', 'Python',
    'AWS', 'Docker', 'PostgreSQL', 'Tailwind',
    'TypeScript', 'GraphQL', 'n8n'
  ];

  return (
    <section className="py-12 overflow-hidden bg-white/10 border-t border-slate-800/50 relative">
      <p className="text-center text-slate-300 text-sm font-mono mb-8 uppercase tracking-widest">Powered by Modern Tech</p>

      {/* Degradados laterales para suavizar la entrada/salida */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-linear-to-r from-[#030712] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-linear-to-l from-[#030712] to-transparent pointer-events-none"></div>

      <div className="flex w-full overflow-hidden">
        <div className="flex items-center gap-16 animate-scroll whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Primera copia de la lista */}
          {techStack.map((tech, i) => (
            <span key={i} className="text-xl font-bold text-white cursor-default hover:text-blue-400 transition-colors mx-4">{tech}</span>
          ))}
          {/* Segunda copia para el loop infinito */}
          {techStack.map((tech, i) => (
            <span key={`dup-${i}`} className="text-xl font-bold text-white cursor-default hover:text-blue-400 transition-colors mx-4">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
