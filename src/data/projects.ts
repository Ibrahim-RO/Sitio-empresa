import radiobears from "../assets/radiobears.png"
import agencia from "../assets/agencia.jpeg"
import cashtrackr from "../assets/cashtrackr.png"
import cafeteria from "../assets/cafeteria.png"
import bi from "../assets/bi.jpeg"
import inter from "../assets/inter.png"

export const projects = [
    {
        title: "RadioBears",
        description:
            "Plataforma web interactiva para la comunidad RadioBears. Integra chat en tiempo real, transmisiones en vivo, gestión de eventos, perfiles de asociados y acceso directo a redes sociales, creando una experiencia digital centralizada y dinámica.",
        image: radiobears,
        colorTitle: "group-hover:text-blue-400",
        colorBg: "group-hover:bg-blue-600",
        technologies: [
            { name: "Node" },
            { name: "React" },
            { name: "TypeScript" },
            { name: "PostgreSQL" },
        ],
    },
    {
        title: "Agencia Inmobiliaria",
        description:
            "Sistema integral para la gestión de agencias inmobiliarias. Permite administrar propiedades, clientes y contenidos de forma eficiente, combinando un frontend moderno con un CMS flexible para facilitar actualizaciones y escalabilidad.",
        image: agencia,
        colorTitle: "group-hover:text-blue-400",
        colorBg: "group-hover:bg-blue-600",
        technologies: [
            { name: "Next JS" },
            { name: "WordPress" },
            { name: "TailwindCSS" },
        ],
    },
    {
        title: "InterPro",
        description:
            "Plataforma web de gestión avanzada para intermediarios de Habbo Hotel, con calculadora de apuestas multi-divisa, monitoreo de actividad Staff en tiempo real, ranking en la nube y reportes automatizados vía Telegram, centralizando la seguridad y administración financiera en una interfaz reactiva.",
        image: inter,
        colorTitle: "group-hover:text-blue-400",
        colorBg: "group-hover:bg-blue-600",
        technologies: [
            { name: "React" },
            { name: "Firebase" },
            { name: "TailwindCSS" },
        ],
    },
    {
        title: "Portal de Reportes Diarios - Data Analytics & BI",
        description:
            "Plataforma de Business Intelligence que centraliza y analiza KPIs automotrices en tiempo real, generando indicadores estratégicos y reportes ejecutivos para una toma de decisiones ágil y basada en datos.",
        image: bi,
        colorTitle: "group-hover:text-blue-400",
        colorBg: "group-hover:bg-blue-600",
        technologies: [
            { name: "Next JS" },
            { name: "Node" },
            { name: "TailwindCSS" },
        ],
    },
    {
        title: "Sistema de Cafetería",
        description:
            "Aplicación web diseñada para la visualización interactiva del menú de una cafetería. Permite a los clientes explorar productos de forma clara y atractiva, optimizando la experiencia de navegación y facilitando la toma de decisiones.",
        image: cafeteria,
        colorTitle: "group-hover:text-blue-400",
        colorBg: "group-hover:bg-blue-600",
        technologies: [
            { name: "Astro JS" },
            { name: "WordPress" },
            { name: "TailwindCSS" },
        ],
    },
    {
        title: "CashTrackr",
        description:
            "Aplicación web enfocada en la gestión y control de presupuestos personales. Ofrece una interfaz clara e intuitiva para registrar gastos, analizar finanzas y tomar mejores decisiones económicas en el día a día.",
        image: cashtrackr,
        colorTitle: "group-hover:text-blue-400",
        colorBg: "group-hover:bg-blue-600",
        technologies: [
            { name: "Node" },
            { name: "React" },
            { name: "TypeScript" },
        ],
    },
]