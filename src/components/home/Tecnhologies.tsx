import React from 'react'

export default function Tecnhologies() {
  const techStack = [
    'React', 'Next.js', 'Astro', 'Node.js', 'Python',
    'AWS', 'Docker', 'PostgreSQL', 'Tailwind',
    'TypeScript', 'GraphQL', 'n8n'
  ];

  return (
    <section
      className="
        py-16 overflow-hidden relative
        bg-slate-300
        border-t border-slate-200
      "
    >
      <p className="
        text-center text-slate-800 text-sm font-mono
        mb-10 uppercase tracking-widest
      ">
        Usando tecnologías modernas
      </p>

      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-linear-to-r from-[#E9EEF5] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-linear-to-l from-[#E9EEF5] to-transparent pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <div
          className="
            flex items-center gap-16 whitespace-nowrap
            animate-scroll
            text-slate-800
          "
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="
                text-xl font-semibold
                cursor-default
                transition-all duration-300
                hover:text-sky-600
                hover:scale-110
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
