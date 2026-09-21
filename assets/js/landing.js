/**
 * Sidhartha Research — Language switcher
 * Spanish is the default language. The selected language is remembered locally.
 */

const translations = {
    es: {
        "page.title": "Sidhartha Research — Investigación aplicada",
        "nav.work": "Trabajos",
        "nav.areas": "Áreas",
        "nav.collaboration": "Colaboración",
        "nav.about": "Sobre mí",
        "nav.github": "GitHub",

        "hero.eyebrow": "Research Lab · Investigación aplicada",
        "hero.title": "Investigar problemas complejos desde la ingeniería.",
        "hero.description": "Un espacio para desarrollar investigaciones, modelos y proyectos interdisciplinarios mediante datos, simulación, análisis cuantitativo y software.",
        "tag.engineering": "INGENIERÍA",
        "tag.data": "DATOS",
        "tag.ai": "IA",
        "tag.simulation": "SIMULACIÓN",
        "tag.health": "SALUD",
        "tag.systems": "SISTEMAS",
        "tag.finance": "FINANZAS",
        "hero.button": "EXPLORAR EL TRABAJO →",

        "work.eyebrow": "Trabajos",
        "work.title": "Investigaciones, proyectos y ensayos en evolución.",
        "work.description": "Cada trabajo tiene su propia naturaleza, metodología y etapa de desarrollo. La publicación web funciona como la capa que permite comprenderlo, revisarlo y, cuando corresponde, participar en su evolución.",

        "project1.meta": "Investigación · Ingeniería · Trabajo · IA",
        "project1.title": "Ingeniería & Futuro del Trabajo",
        "project1.description": "Investigación sobre transformación tecnológica, tendencias laborales y evolución de las competencias de ingeniería hacia 2030.",
        "project1.status": "● PUBLICACIÓN WEB · 2026",
        "project1.action": "EXPLORAR →",

        "project2.meta": "Proyecto de investigación · Salud · Simulación",
        "project2.title": "Simulación de un Departamento de Emergencias",
        "project2.description": "Proyecto interdisciplinario que integra ensayo, reglas de negocio, simulación computacional y análisis estadístico para estudiar procesos de atención en un servicio de urgencias.",
        "project2.status": "● EN DESARROLLO · VALIDACIÓN INTERDISCIPLINARIA",
        "project2.action": "REVISAR →",

        "project3.meta": "Investigación · Documental · Participación",
        "project3.title": "Entre Cempasúchil y Calabazas",
        "project3.description": "Investigación sobre prácticas, percepciones y transformaciones culturales en torno al Día de Muertos y Halloween en el México contemporáneo.",
        "project3.status": "● INVESTIGACIÓN ABIERTA · RECOLECCIÓN DE DATOS",
        "project3.action": "PARTICIPAR →",

        "project4.meta": "Ensayo · Finanzas · Análisis cuantitativo",
        "project4.title": "Investigación sobre Hedge Fund",
        "project4.description": "Trabajo interdisciplinario acompañado de un proyecto técnico para convertir el análisis conceptual y cuantitativo en un sistema reproducible.",
        "project4.status": "● EN DESARROLLO",
        "project4.action": "PRÓXIMAMENTE →",

        "areas.eyebrow": "Áreas",
        "areas.title": "Ingeniería aplicada a distintos dominios.",
        "areas.description": "El dominio cambia; la ingeniería aporta herramientas para modelar, analizar, experimentar y construir sistemas que puedan ser revisados por especialistas.",

        "area.engineering.title": "Ingeniería",
        "area.engineering.description": "Transformación tecnológica, sistemas y evolución profesional.",
        "area.data.title": "Datos & IA",
        "area.data.description": "Modelado, análisis cuantitativo, automatización y aprendizaje.",
        "area.simulation.title": "Simulación",
        "area.simulation.description": "Representación de sistemas complejos y experimentación de escenarios.",
        "area.health.title": "Salud",
        "area.health.description": "Procesos, operaciones y modelos para apoyar el análisis interdisciplinario.",
        "area.finance.title": "Finanzas",
        "area.finance.description": "Investigación cuantitativa, sistemas y análisis de mercados.",
        "area.systems.title": "Sistemas",
        "area.systems.description": "Arquitectura, operaciones, datos y construcción de soluciones reproducibles.",

        "process.eyebrow": "Proceso",
        "process.title": "Del problema al conocimiento.",
        "process.problem": "Problema",
        "process.evidence": "Evidencia",
        "process.model": "Modelo",
        "process.experiment": "Experimento",
        "process.results": "Resultados",
        "process.validation": "Validación",
        "process.discussion": "Discusión",
        "process.evolution": "Evolución",

        "principle.eyebrow": "Principio",
        "principle.title": "La investigación esta en continua evolución.",
        "principle.description": "Los trabajos publicados aquí pueden encontrarse en diferentes etapas: desde un ensayo inicial hasta un modelo computacional, una investigación en validación o un sistema reproducible.",
        "principle.signature": "La publicación web hace visible el trabajo para que especialistas de otras disciplinas puedan comprenderlo, cuestionarlo y enriquecerlo.",

        "collab.eyebrow": "Colaboración interdisciplinaria",
        "collab.title": "La ingeniería no trabaja sola.",
        "collab.description": "Algunos proyectos nacen desde la ingeniería, pero necesitan la experiencia de médicos, financieros, investigadores, especialistas operativos u otros expertos para validar sus supuestos y mejorar sus resultados.",
        "collab.button": "CONOCER LOS PROYECTOS →",

        "about.eyebrow": "Sobre el autor",
        "about.description": "Ingeniero especialista en datos, sistemas complejos, simulación y tecnología.",
        "about.site": "Este sitio documenta el trabajo de investigación y los sistemas que surgen de ese proceso, haciendo accesibles sus ideas y resultados para personas que no necesariamente trabajan con código.",

        "footer.description": "Investigación aplicada · Ingeniería · Datos · Sistemas"
    },

    en: {
        "page.title": "Sidhartha Research — Applied Research",
        "nav.work": "Research",
        "nav.areas": "Areas",
        "nav.collaboration": "Collaboration",
        "nav.about": "About",
        "nav.github": "GitHub",

        "hero.eyebrow": "Research Lab · Applied Research",
        "hero.title": "Investigating complex problems through engineering.",
        "hero.description": "A space for developing research, models, and interdisciplinary projects through data, simulation, quantitative analysis, and software.",
        "tag.engineering": "ENGINEERING",
        "tag.data": "DATA",
        "tag.ai": "AI",
        "tag.simulation": "SIMULATION",
        "tag.health": "HEALTH",
        "tag.systems": "SYSTEMS",
        "tag.finance": "FINANCE",
        "hero.button": "EXPLORE THE WORK →",

        "work.eyebrow": "Research",
        "work.title": "Research, projects, and essays in progress.",
        "work.description": "Each work has its own nature, methodology, and stage of development. The website serves as the layer that makes it possible to understand, review, and, when appropriate, participate in its evolution.",

        "project1.meta": "Research · Engineering · Work · AI",
        "project1.title": "Engineering & The Future of Work",
        "project1.description": "Research on technological transformation, labor trends, and the evolution of engineering skills toward 2030.",
        "project1.status": "● WEB PUBLICATION · 2026",
        "project1.action": "EXPLORE →",

        "project2.meta": "Research Project · Health · Simulation",
        "project2.title": "Emergency Department Simulation",
        "project2.description": "An interdisciplinary project integrating an essay, business rules, computational simulation, and statistical analysis to study care processes in an emergency department.",
        "project2.status": "● IN DEVELOPMENT · INTERDISCIPLINARY VALIDATION",
        "project2.action": "REVIEW →",

        "project3.meta": "Research · Documentary · Participation",
        "project3.title": "Between Marigolds and Pumpkins",
        "project3.description": "Research on practices, perceptions, and cultural transformations surrounding Day of the Dead and Halloween in contemporary Mexico.",
        "project3.status": "● OPEN RESEARCH · DATA COLLECTION",
        "project3.action": "PARTICIPATE →",

        "project4.meta": "Essay · Finance · Quantitative Analysis",
        "project4.title": "Hedge Fund Research",
        "project4.description": "An interdisciplinary work accompanied by a technical project to turn conceptual and quantitative analysis into a reproducible system.",
        "project4.status": "● IN DEVELOPMENT",
        "project4.action": "COMING SOON →",

        "areas.eyebrow": "Areas",
        "areas.title": "Engineering applied across different domains.",
        "areas.description": "The domain changes; engineering provides tools to model, analyze, experiment, and build systems that can be reviewed by specialists.",

        "area.engineering.title": "Engineering",
        "area.engineering.description": "Technological transformation, systems, and professional evolution.",
        "area.data.title": "Data & AI",
        "area.data.description": "Modeling, quantitative analysis, automation, and learning.",
        "area.simulation.title": "Simulation",
        "area.simulation.description": "Representation of complex systems and scenario experimentation.",
        "area.health.title": "Health",
        "area.health.description": "Processes, operations, and models supporting interdisciplinary analysis.",
        "area.finance.title": "Finance",
        "area.finance.description": "Quantitative research, systems, and market analysis.",
        "area.systems.title": "Systems",
        "area.systems.description": "Architecture, operations, data, and construction of reproducible solutions.",

        "process.eyebrow": "Process",
        "process.title": "From problem to knowledge.",
        "process.problem": "Problem",
        "process.evidence": "Evidence",
        "process.model": "Model",
        "process.experiment": "Experiment",
        "process.results": "Results",
        "process.validation": "Validation",
        "process.discussion": "Discussion",
        "process.evolution": "Evolution",

        "principle.eyebrow": "Principle",
        "principle.title": "Research is continuously evolving.",
        "principle.description": "The work published here can be found at different stages: from an initial essay to a computational model, research under validation, or a reproducible system.",
        "principle.signature": "The website makes the work visible so that specialists from other disciplines can understand it, question it, and contribute to it.",

        "collab.eyebrow": "Interdisciplinary Collaboration",
        "collab.title": "Engineering does not work alone.",
        "collab.description": "Some projects originate in engineering, but they require the experience of physicians, finance professionals, researchers, operational specialists, or other experts to validate their assumptions and improve their results.",
        "collab.button": "EXPLORE THE PROJECTS →",

        "about.eyebrow": "About the Author",
        "about.description": "Engineer specializing in data, complex systems, simulation, and technology.",
        "about.site": "This site documents research work and the systems that emerge from that process, making its ideas and results accessible to people who do not necessarily work with code.",

        "footer.description": "Applied Research · Engineering · Data · Systems"
    }
};

function applyLanguage(language) {
    const dictionary = translations[language] || translations.es;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
        const active = button.dataset.lang === language;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem("sidhartha-language", language);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("sidhartha-language") || "es";

    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang);
        });
    });

    applyLanguage(savedLanguage);
});
