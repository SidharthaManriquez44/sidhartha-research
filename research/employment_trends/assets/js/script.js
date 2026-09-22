(function () {
    const box = document.getElementById('lightbox');
    const out = document.getElementById('lightboxImage');
    const title = document.getElementById('lightboxTitle');

    if (!box || !out) return;

    document.querySelectorAll('.figure img').forEach(img => {
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute(
            'aria-label',
            'Ampliar gráfico: ' + (img.alt || 'gráfico')
        );

        const open = () => {
            out.src = img.currentSrc || img.src;
            out.alt = img.alt || 'Gráfico ampliado';
            title.textContent = img.alt || 'Gráfico de la investigación';
            box.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        img.addEventListener('click', open);

        img.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });
    });

    const close = () => {
        box.classList.remove('open');
        out.removeAttribute('src');
        document.body.style.overflow = '';
    };

    box.addEventListener('click', e => {
        if (e.target === box) close();
    });

    const closeButton = box.querySelector('.lightbox-close');

    if (closeButton) {
        closeButton.addEventListener('click', close);
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && box.classList.contains('open')) {
            close();
        }
    });
})();

const data = {
    industrial: {
        title: "Ingeniería Industrial",
        desc: "Una de las áreas con mayor volumen de profesionistas y una fuerte presencia en manufactura. Su transformación se vincula con datos, IA, automatización y Operations Research.",
        jobs: [
            "Industrial Engineer",
            "Process Engineer",
            "Operations Engineer",
            "Supply Chain Engineer",
            "Manufacturing Engineer",
            "Automation Engineer",
            "Operations Research Analyst"
        ],
        tech: [
            "Python",
            "SQL",
            "Data Analytics",
            "IA",
            "Automatización",
            "Simulación",
            "Optimización"
        ],
        sector: "Manufactura · logística · operaciones · supply chain"
    },

    software: {
        title: "Software / Sistemas",
        desc: "Área de alta ocupación y fuerte expansión tecnológica. El software se integra con cloud, datos, IA, plataformas y ciberseguridad.",
        jobs: [
            "Software Engineer",
            "Backend Engineer",
            "Full-Stack Engineer",
            "Cloud Engineer",
            "DevOps Engineer",
            "Platform Engineer",
            "Systems Engineer"
        ],
        tech: [
            "Python",
            "Cloud",
            "DevOps",
            "APIs",
            "Datos",
            "IA",
            "Ciberseguridad"
        ],
        sector: "Tecnología · servicios · manufactura · comercio · comunicaciones"
    },

    datos: {
        title: "Datos / Inteligencia Artificial",
        desc: "La investigación identifica datos e IA como uno de los bloques de demanda emergente y de mayor especialización.",
        jobs: [
            "Data Engineer",
            "Data Scientist",
            "Machine Learning Engineer",
            "AI Engineer",
            "Analytics Engineer",
            "MLOps Engineer"
        ],
        tech: [
            "Python",
            "SQL",
            "Machine Learning",
            "IA",
            "MLOps",
            "Big Data",
            "Modelos"
        ],
        sector: "Tecnología · finanzas · manufactura · servicios · analítica"
    },

    electronica: {
        title: "Electrónica / Automatización",
        desc: "Conecta electrónica, control, sensores, hardware y automatización con manufactura avanzada y semiconductores.",
        jobs: [
            "Electronics Engineer",
            "Controls Engineer",
            "Automation Engineer",
            "Hardware Engineer",
            "Embedded Systems Engineer",
            "Semiconductor Engineer"
        ],
        tech: [
            "Embedded",
            "Control",
            "PLC",
            "Sensores",
            "Hardware",
            "Testing",
            "Semiconductores"
        ],
        sector: "Automotriz · electrónica · manufactura · semiconductores"
    },

    mecanica: {
        title: "Mecánica / Robótica",
        desc: "La ingeniería mecánica mantiene una alta ocupación y se transforma mediante CAD/CAE, simulación, robótica, automatización y confiabilidad.",
        jobs: [
            "Mechanical Engineer",
            "Manufacturing Engineer",
            "Robotics Engineer",
            "Controls Engineer",
            "Mechatronics Engineer",
            "Reliability Engineer"
        ],
        tech: [
            "CAD/CAE",
            "Simulación",
            "Robótica",
            "Automatización",
            "Control",
            "Impresión 3D"
        ],
        sector: "Manufactura · automotriz · robótica · maquinaria"
    },

    energia: {
        title: "Electricidad / Energía",
        desc: "Integra sistemas eléctricos, redes, electrificación, renovables, almacenamiento y eficiencia energética.",
        jobs: [
            "Electrical Engineer",
            "Power Systems Engineer",
            "Renewable Energy Engineer",
            "Battery Engineer",
            "Solar Engineer",
            "Energy Engineer"
        ],
        tech: [
            "Power Systems",
            "Redes",
            "Baterías",
            "Solar",
            "Eólica",
            "Electrificación"
        ],
        sector: "Energía · infraestructura · manufactura · transición energética"
    }
};

function render(k) {
    const d = data[k];
    const profile = document.getElementById('profile');

    if (!profile || !d) return;

    profile.innerHTML =
        '<h3>' + d.title + '</h3>' +
        '<p class="desc">' + d.desc + '</p>' +
        '<h4>Puestos asociados</h4>' +
        '<div class="tags">' +
        d.jobs.map(x => '<span class="tag">' + x + '</span>').join('') +
        '</div>' +
        '<h4>Tecnologías / habilidades</h4>' +
        '<div class="tags">' +
        d.tech.map(x => '<span class="tag">' + x + '</span>').join('') +
        '</div>' +
        '<h4>Sectores</h4>' +
        '<p class="desc">' + d.sector + '</p>';

    document.querySelectorAll('.tab').forEach(b => {
        b.classList.toggle('active', b.dataset.area === k);
    });
}

document.querySelectorAll('.tab').forEach(b => {
    b.addEventListener('click', () => render(b.dataset.area));
});

render('industrial');
