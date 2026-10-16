const tabs = [...document.querySelectorAll('[role="tab"]')];

function activate(tab) {
    tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !selected
    })
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const next = tabs[(index + direction + tabs.length) % tabs.length];
            activate(next);
            next.focus()
        }
    })
});

const copy = {
    en: {
        title: "Capacity Decisions | Aeroméxico",
        description: "Decision-making simulation, comparing airline capacity strategies under uncertainty using decision analysis, break-even analysis, and Monte Carlo results.",
        ".nav": {aria: "Main navigation"},
        ".brand>span:last-child": "Decision · Aeroméxico",
        ".navlinks>a": ["Model", "Results", "Monte Carlo", "Scope"],
        ".language-switch": {aria: "Language selector"},
        ".eyebrow": "Business decision analysis · Simulation",
        ".hero h1": "How much capacity <em>should we offer?</em>",
        ".hero-lede": "A quantitative case comparing three airline capacity strategies when demand, revenue, and operating costs are uncertain.",
        ".hero-meta>div": ["<strong>Author</strong>Sidhartha Manríquez", "<strong>Applied model</strong>Scenarios + break-even analysis", "<strong>Case study</strong>Hypothetical route · MXN"],
        ".hero-art": {aria: "Conceptual illustration of an airline route between two points"},
        ".hero-art svg": {aria: "Illustrative flight path"},
        ".hero-stamp": "decide<br>under<br>uncertainty",
        ".art-label.one": "demand",
        ".art-label.two": "capacity",
        ".art-note": "Conceptual illustration",
        "#pregunta .kicker": "01 / The decision",
        "#pregunta h2": "The goal is not simply to fill seats. It is to balance revenue and exposure.",
        "#pregunta .intro": "Too little capacity can leave demand unserved; too much can add costs the revenue cannot recover. This analysis compares alternatives by expected profit, break-even point, and financial risk.",
        "#pregunta .question .small-label": ["Central question", "Case scope"],
        "#pregunta .question p": ["Which capacity strategy offers a favorable balance of expected return and financial risk across uncertain demand and costs?", "One equivalent operation on a fictional route. All inputs and results are hypothetical and do not describe Aeroméxico's actual performance."],
        ".alternatives": {aria: "Capacity alternatives evaluated"},
        ".alt h3": ["Current capacity", "Higher frequency", "Larger aircraft"],
        ".alt p": ["One operation with 120 available seats.", "Equivalent aggregate capacity of 180 seats.", "One operation with 240 available seats."],
        ".alt .metric": ["Base cost: MXN $180,000", "Base cost: MXN $260,000", "Base cost: MXN $350,000"],
        "#modelo .kicker": "02 / Method",
        "#modelo h2": "One unit margin, three demand scenarios.",
        "#modelo .intro": "The decision tree assigns a profit to each combination of strategy and demand scenario. Scenario probabilities are used to calculate expected monetary value (EMV).",
        ".model-card h3": ["Profit by strategy", "Demand scenarios"],
        ".model-card p": ["Only passengers who fit within available capacity are counted. Operating cost is deducted for each equivalent operation.", "A discrete distribution used to compare all three strategies under the same probabilities."],
        ".chip": ["Revenue: MXN $2,500 / passenger", "Variable cost: MXN $300 / passenger", "Contribution margin: MXN $2,200"],
        ".scenario span": ["Low · 100", "Medium · 150", "High · 210"],
        ".methods-note": "<b>Comparison assumption.</b> Strategy B represents equivalent added capacity, not the actual cost of adding a flight frequency. Costs are in MXN per equivalent operation.",
        "#resultados .kicker": "03 / Results",
        "#resultados h2": "Current capacity leads in the base case.",
        "#resultados .intro": "The result depends on the assumed demand probabilities, revenue per passenger, and operating costs. Changing those inputs may change the preferred strategy.",
        ".tabs": {aria: "Explore model results"},
        ".tabs .tab": ["Expected value", "Profit by scenario"],
        "#panel-vme thead th": ["Strategy", "EMV (MXN)", "Probability of loss", "Best-case profit"],
        "#panel-vme tbody tr td:first-child": ["A · Current", "B · Frequency", "C · Aircraft"],
        "#panel-vme .table-foot": "EMV and probability of loss recalculated from the payoff matrix and scenario probabilities. The EMV_C = +MXN $14,500; weighting its payoff matrix gives −MXN $14,500 and a 75% probability of loss.",
        ".chart h3": "Expected monetary value",
        ".chart>p": "MXN per equivalent operation · decision tree",
        ".bar-caption span": ["A · Current capacity", "B · Higher frequency", "C · Larger aircraft"],
        ".takeaway": "In this case, A exceeds B by <strong>MXN $14,000</strong> in expected profit.",
        "#panel-utility thead th": ["Strategy", "Low demand · 100", "Medium demand · 150", "High demand · 210"],
        "#panel-utility tbody tr td:first-child": ["A · Current", "B · Frequency", "C · Aircraft"],
        "#panel-utility .table-foot": "Strategy B yields the highest profit when demand is high. A performs better in the low and medium scenarios.",
        "#equilibrio .kicker": "04 / Break-even point",
        "#equilibrio h2": "More seats also raise the minimum demand needed to cover costs.",
        "#equilibrio .intro": "With a contribution margin of MXN $2,200 per passenger, this is the demand required to cover each strategy's fixed operating cost.",
        "#equilibrio .formula": "Q* = Fixed cost ÷ (Revenue − Variable cost)",
        ".be-card .letter": ["A · Current capacity", "B · Higher frequency", "C · Larger aircraft"],
        ".be-card .units": "passengers to cover costs",
        ".be-card .occupancy": ["Minimum load factor <strong>68.3%</strong>", "Minimum load factor <strong>66.1%</strong>", "Minimum load factor <strong>66.7%</strong>"],
        ".be-note": "Passenger counts are rounded up to the next whole number. Minimum load factors use each strategy's available capacity.",
        "#simulacion .kicker": "05 / Code validation",
        "#simulacion h2": "Monte Carlo: reported figures, reproducibility pending.",
        "#simulacion .intro": "The essay also reports results from 10,000 iterations with seed 42. A later methodology section describes the simulation as future implementation work. These figures are therefore presented as reported in the document and should be verified against the linked code.",
        ".sim-status": "Review assumptions and reproduce",
        ".sim-card h3": ["C · Larger aircraft", "A · Current capacity", "B · Higher frequency"],
        ".sim-card .sub": "Approximate reported EMV",
        ".sim-card .risk": ["6.9% probability of loss", "2.9% probability of loss", "16.2% probability of loss"],
        ".sim-caveat": "<strong>Consistency note:</strong> The PDF does not clearly explain the time horizon or scale for these Monte Carlo values and later says the simulation remains future implementation work. They should not be compared directly with the decision-tree EMVs (MXN $73,000, $59,000, and $14,500 per operation); they appear to use different scales or models. Reproduce the run and review its assumptions before drawing a business conclusion.",
        ".repo-label": "Validate the simulation on GitHub",
        "#alcance .kicker": "06 / Scope and limitations",
        "#alcance h2": "A comparison framework, not an operating recommendation.",
        ".limits-copy": "This case shows how to structure a decision under uncertainty. Its value depends on the quality of the data and how well the model represents a real route.",
        ".pdf-essay-link": "View the full essay (PDF)",
        ".limit-row p": ["<strong>Hypothetical scenarios</strong>No internal booking, fare, or route-cost data were used.", "<strong>Simplified operations</strong>The model excludes network connections, seasonality, competition, cancellations, fleet and crew constraints, maintenance, taxes, and cargo.", "<strong>Distributions to validate</strong>To treat Monte Carlo as evidence, review the distributions and calibrate them with historical data when available.", "<strong>Risk and management judgment</strong>EMV alone does not account for risk aversion or extreme losses. A final business decision needs additional criteria and expert review."],
        ".sources h2": "Sources and materials",
        ".sources-head .small-label": "References and reproducibility",
        ".source-links a": ["Manríquez (2026) · Monte Carlo simulation code ↗", "Grupo Aeroméxico · Annual reports ↗", "Xu, Wandelt & Sun (2024) · Airline scheduling optimization ↗", "NIST (2025) · Monte Carlo tool ↗", "Jamroz & Williams (2020) · Consistency in Monte Carlo uncertainty analyses ↗", "Leber & Herrmann (2012) · Uncertainty in decision analysis ↗"],
        ".footer span": ["Sidhartha Research · Business decision analysis", "All values in the Aeroméxico case are hypothetical."],
        ".pdf-label": "Open the essay PDF",
        "html": {lang: "en"}
    }
};
const original = {
    title: document.title,
    description: document.querySelector('meta[name="description"]').content,
    lang: document.documentElement.lang,
    html: {},
    aria: {},
    alt: {}
};
for (const selector of Object.keys(copy.en)) {
    if (selector === "title" || selector === "description" || selector === "html") continue;
    const nodes = [...document.querySelectorAll(selector)];
    if (typeof copy.en[selector] !== "object" || Array.isArray(copy.en[selector])) original.html[selector] = nodes.map(node => node.innerHTML);
    original.aria[selector] = nodes.map(node => node.getAttribute("aria-label"));
    original.alt[selector] = nodes.map(node => node.getAttribute("alt"));
}

function applyLanguage(lang) {
    if (lang !== "en" && lang !== "es") lang = "es";
    if (lang === "es") {
        document.title = original.title;
        document.querySelector('meta[name="description"]').content = original.description;
        document.documentElement.lang = original.lang;
        for (const [selector, values] of Object.entries(original.html)) {
            document.querySelectorAll(selector).forEach((node, index) => {
                node.innerHTML = values[index] ?? values[values.length - 1]
            });
        }
        for (const [selector, values] of Object.entries(original.aria)) document.querySelectorAll(selector).forEach((node, index) => {
            const aria = values[index];
            if (aria === null) node.removeAttribute("aria-label"); else if (aria !== undefined) node.setAttribute("aria-label", aria)
        });
        for (const [selector, values] of Object.entries(original.alt)) document.querySelectorAll(selector).forEach((node, index) => {
            const alt = values[index];
            if (alt === null) node.removeAttribute("alt"); else if (alt !== undefined) node.setAttribute("alt", alt)
        });
    } else {
        for (const [selector, translation] of Object.entries(copy.en)) {
            if (selector === "title") {
                document.title = translation;
                continue
            }
            if (selector === "description") {
                document.querySelector('meta[name="description"]').content = translation;
                continue
            }
            if (selector === "html") {
                document.documentElement.lang = translation.lang;
                continue
            }
            if ([".nav", ".language-switch", ".hero-art", ".hero-art svg", ".alternatives", ".tabs"].includes(selector)) {
                const target = document.querySelector(selector);
                if (target && translation.aria) target.setAttribute("aria-label", translation.aria);
                continue;
            }
            if (selector === ".hero-art img") {
                const target = document.querySelector(selector);
                if (target) target.setAttribute("alt", translation.alt);
                continue;
            }
            const nodes = [...document.querySelectorAll(selector)];
            const texts = Array.isArray(translation) ? translation : [translation];
            nodes.forEach((node, index) => {
                node.innerHTML = texts[index] ?? texts[texts.length - 1]
            });
        }
    }
    document.querySelectorAll(".language-switch button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
    localStorage.setItem("essay-language", lang);
}

document.querySelectorAll(".language-switch button").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
applyLanguage(localStorage.getItem("essay-language") || "es");