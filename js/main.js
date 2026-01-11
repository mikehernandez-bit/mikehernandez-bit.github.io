(() => {
  "use strict";

  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  // =========================
  // Footer year
  // =========================
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // =========================
  // Theme (dark/light)
  // =========================
  const html = document.documentElement;
  const themeBtn = $("#themeBtn");

  function getPreferredTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;

    const prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

    return prefersLight ? "light" : "dark";
  }

  function setTheme(theme) {
    html.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }

  setTheme(getPreferredTheme());

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.dataset.theme === "light" ? "light" : "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }

  // =========================
  // i18n (ES / EN)
  // =========================
  const i18n = {
    es: {
      page_title: "Jhoan Hernández | Portafolio",
      toggle_theme_sr: "Cambiar tema",
      toggle_lang_sr: "Cambiar idioma",

      // a11y / nav
      skip_link: "Saltar al contenido",
      aria_go_top: "Ir al inicio",
      aria_main_nav: "Navegación principal",
      open_menu: "Abrir menú",

      nav_about: "Sobre mí",
      nav_skills: "Habilidades",
      nav_engineering: "Ingeniería",
      nav_projects: "Proyectos",
      nav_certs: "Certificaciones",
      nav_contact: "Contacto",

      // Command palette
      open_palette: "Abrir comandos",
      open_palette_aria: "Abrir paleta de comandos",
      palette_aria: "Paleta de comandos",
      palette_close_aria: "Cerrar paleta",
      palette_title: "Ir a…",
      palette_search_label: "Buscar",
      palette_search_placeholder: "Buscar sección o acción…",
      palette_tip: "Escribe para filtrar y presiona Enter.",

      // Hero
      hero_badge: "UNS · Ing. de Sistemas e Informática",
      hero_title:
        'Estudiante de Ingeniería de Sistemas e Informática <span class="accent">| Software Developer</span>',
      hero_lead: `Soy <strong>Jhoan Hernández</strong>. Desarrollo aplicaciones web y backend con enfoque en
      <strong>buenas prácticas</strong>, <strong>lógica</strong> y <strong>control de versiones</strong>.
      He construido proyectos con <strong>Java</strong> (<strong>Spring Boot</strong>) y <strong>Python</strong>, integrando bases de datos
      (<strong>PostgreSQL</strong>/<strong>SQL Server</strong>), y también interfaces responsivas con
      <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>.`,
      cta_projects: "Ver proyectos",
      cta_contact: "Contactar",
      cta_cv: "Descargar CV",

      profile_role: "Estudiante · UNS",
      profile_alt: "Foto de Jhoan Hernández",
      quick_stack: "Stack",
      quick_stack_value: "Java · Python · SQL Server · Git",
      quick_interest: "Interés",
      quick_interest_value: "Frontend · Backend · IA",
      quick_availability: "Disponibilidad",
      quick_availability_value: "Prácticas Preprofesionales 2026",

      // Terminal
      terminal_aria: "Resumen en estilo terminal",
      terminal_title: "system-status",
      terminal_block:
        'jh@portfolio:~$ whoami\nJhoan Hernández\njh@portfolio:~$ cat focus.txt\nFrontend · Backend · Datos · IA · Redes\njh@portfolio:~$ echo "Abierto a prácticas"\n✔',

      // About
      about_title: "Sobre mí",
      
      about_p1: `Estudiante de Ingeniería de Sistemas e Informática en la <strong>Universidad Nacional del Santa (UNS)</strong>.
      Me enfoco en construir software claro, mantenible y orientado a resolver problemas reales.`,

      about_p2: `He desarrollado <strong>aplicaciones web</strong> y <strong>backend</strong> con <strong>Java (Spring Boot)</strong> y <strong>Python</strong>, integrando <strong>bases de datos</strong> (<strong>PostgreSQL</strong>, <strong>SQL Server</strong>)
      y consumo de <strong>APIs</strong>. En frontend, trabajo con <strong>HTML/CSS/JavaScript</strong> aplicando diseño responsivo.
      Uso <strong>Git/GitHub</strong> para control de versiones y flujo de trabajo.`,

      about_p3: `Busco <strong>Prácticas Preprofesionales 2026</strong> en desarrollo de software (frontend, backend o full-stack),
      donde pueda aportar con proyectos reales, aprender del equipo y mejorar continuamente.`,
      
      // Skills
      skills_title: "Habilidades",
      skills_subtitle: "Ordenadas y respaldadas por proyectos.",
      skills_languages: "Lenguajes",
      skills_frameworks: "Frameworks",
      skills_databases: "Bases de datos",
      skills_data: "Datos",
      skills_tools_methods: "Herramientas / Metodologías",
      skills_learning: "En aprendizaje",
      skills_learning_note: "Roadmap 2026: deploy, buenas prácticas y tooling.",

      // Engineering
      engineering_title: "Ingeniería de Sistemas",
      engineering_subtitle: "Cómo pienso, diseño y entrego software.",
      eng1_title: "Análisis y modelado",
      eng1_desc: "Requisitos claros, estructura modular y documentación para que el software sea mantenible.",
      eng2_title: "Backend + Datos",
      eng2_desc: "APIs, ETL y persistencia: convierto datos en funcionalidades que aportan valor.",
      eng3_title: "Calidad y entrega",
      eng3_desc: "Git, revisión, pruebas y automatización (cuando aplica) para entregar con confianza.",
      eng_diagram_title: "Pipeline de ingeniería (simplificado)",
      eng_diagram_desc: "Del problema al producto: requisitos → diseño → implementación → pruebas → despliegue.",
      eng_step1: "Reqs",
      eng_step2: "Diseño",
      eng_step3: "Build",
      eng_step4: "Tests",
      eng_step5: "Deploy",

      // Projects
      projects_title: "Proyectos",
      projects_subtitle: "Tu evidencia. Un proyecto bien presentado vale oro.",
      pill_featured: "Analítica Web",
      radar_title: "Radar IA — Dashboard de analítica de Reddit",
      radar_desc:
        "Pipeline en Python que recolecta publicaciones y comentarios de subreddits de IA, calcula sentimiento y muestra KPIs + gráficos en un dashboard web.",
      radar_li1: "ETL: extracción, guardado y actualización de datos",
      radar_li2: "API: endpoints para KPIs, actividad y filtros por fecha",
      radar_li3: "Visualización: métricas, tabla y gráficos",
      radar_img_alt: "Captura del dashboard Radar IA",
      btn_code: "Código",

      research_title: "Investigación — Detección de EPP en tiempo real (YOLO)",
      pill_inprogress: "Investigación",
      research_desc:
        'Detección de equipo de protección personal (EPP) en entornos industriales mediante Deep Learning. <span class="muted">2025–Actual</span><br />YOLO (v8/v5) · Edge Computing · App en tiempo real (webcam)',
      research_real_time: "Tiempo real",
      research_li1: "Entrenamiento y comparación de arquitecturas YOLO (v8s/v8n/v5s/v5n/v5l) para detección multiclase de EPP.",
      research_li2: "Desarrollo de aplicación de escritorio en tiempo real usando webcam e integración con móvil (p.ej. iVCam).",
      research_li3: "Evaluación con métricas estándar (Precisión, Recall, F1-Score, mAP) y análisis visual de predicciones.",

      pill_fullstack: "E-commerce",
      karnaval_title: "BAZAR — El Karnaval (E-commerce + Stripe)",
      karnaval_desc: "Tienda demo full-stack con Spring Boot + Thymeleaf: login, carrito y pagos con Stripe.",
      karnaval_li1: "Autenticación y vistas (login, dashboard, catálogo).",
      karnaval_li2: "Carrito de compras con JS (agregar, quitar, contador).",
      karnaval_li3: "Checkout integrado con Stripe (modo prueba).",
      btn_readme: "Guía",

      // Certs
      certs_title: "Licencias y certificaciones",
      certs_subtitle: "Certificados y cursos relevantes para mi perfil profesional.",
      cert_view: "Ver certificado (PDF)",
      cert_scrum_title: "Scrum Fundamentals Certified",
      cert_scrum_meta: "SCRUMstudy · dic. 2025",
      cert_scrum_alt: "Vista previa del certificado Scrum Fundamentals Certified",
      cert_sql_title: "SQL Server – Base de Datos",
      cert_sql_meta: "Universidad Nacional de Ingeniería · mar. 2025",
      cert_sql_alt: "Vista previa del certificado SQL Server – Base de Datos",
      cert_network_title: "Conceptos básicos de redes",
      cert_network_meta: "Cisco Networking Academy · ago. 2025",
      cert_network_alt: "Vista previa del certificado Conceptos básicos de redes",
      cert_packet_title: "Introducción a Cisco Packet Tracer",
      cert_packet_meta: "Cisco Networking Academy · ago. 2025",
      cert_packet_alt: "Vista previa del certificado Introducción a Cisco Packet Tracer",
      cert_intern_title: "Pasantía Nacional Universitaria",
      cert_intern_meta: "Universidad Nacional del Santa · dic. 2025",
      cert_intern_alt: "Vista previa del certificado Pasantía Nacional Universitaria",
      cert_drones_title: "Drones: Soluciones tecnológicas para ingeniería",
      cert_drones_meta: "Universidad Nacional del Santa · jun. 2025",
      cert_drones_alt: "Vista previa del certificado Drones: Soluciones tecnológicas para ingeniería",

      // Contact
      contact_title: "Contacto",
      contact_subtitle: "Fácil de encontrarte. Sin complicaciones.",
      contact_talk_title: "Hablemos",
      contact_talk_p:
        "Si te interesa mi perfil para prácticas o proyectos, puedes escribirme por email o LinkedIn.",
      btn_send_email: "Enviar correo",

      // Form
      form_title: "Mensaje rápido",
      label_name: "Nombre",
      label_email: "Email",
      label_message: "Mensaje",
      btn_prepare_email: "Preparar correo",
      footer_made: "Hecho con HTML, CSS y JavaScript",

      // Form messages
      form_fill_required: "Por favor completa todos los campos.",
      form_invalid_email: "Email inválido.",
      form_opening_client: "Abriendo tu cliente de correo…",
      form_subject_prefix: "Portafolio | Mensaje de",
      form_body_name: "Nombre",
      form_body_email: "Email",
      form_body_message: "Mensaje",
    },

    en: {
      page_title: "Jhoan Hernández | Portfolio",
      toggle_theme_sr: "Switch theme",
      toggle_lang_sr: "Switch language",

      // a11y / nav
      skip_link: "Skip to content",
      aria_go_top: "Back to top",
      aria_main_nav: "Main navigation",
      open_menu: "Open menu",

      nav_about: "About",
      nav_skills: "Skills",
      nav_engineering: "Engineering",
      nav_projects: "Projects",
      nav_certs: "Certifications",
      nav_contact: "Contact",

      // Command palette
      open_palette: "Open commands",
      open_palette_aria: "Open command palette",
      palette_aria: "Command palette",
      palette_close_aria: "Close palette",
      palette_title: "Go to…",
      palette_search_label: "Search",
      palette_search_placeholder: "Search section or action…",
      palette_tip: "Type to filter and press Enter.",

      // Hero
      hero_badge: "UNS · Systems & Computer Engineering",
      hero_title:
        'Systems & Computer Engineering Student <span class="accent">| Software Developer</span>',
      hero_lead: `I'm <strong>Jhoan Hernández</strong>. I build web applications and backend services focused on
      <strong>best practices</strong>, <strong>logic</strong>, and <strong>version control</strong>.
      I've built projects with <strong>Java</strong> (<strong>Spring Boot</strong>) and <strong>Python</strong>, integrating databases
      (<strong>PostgreSQL</strong>/<strong>SQL Server</strong>), plus responsive interfaces using
      <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.`,
      cta_projects: "View projects",
      cta_contact: "Contact",
      cta_cv: "Download CV",

      profile_role: "Student · UNS",
      profile_alt: "Photo of Jhoan Hernández",
      quick_stack: "Stack",
      quick_stack_value: "Java · Python · SQL Server · Git",
      quick_interest: "Focus",
      quick_interest_value: "Frontend · Backend · AI",
      quick_availability: "Availability",
      quick_availability_value: "Pre-professional internships 2026",

      // Terminal
      terminal_aria: "Terminal-style summary",
      terminal_title: "system-status",
      terminal_block:
        'jh@portfolio:~$ whoami\nJhoan Hernández\njh@portfolio:~$ cat focus.txt\nFrontend · Backend · Data · AI · Networks\njh@portfolio:~$ echo "Open to internships"\n✔',

      // About
      about_title: "About",
      about_subtitle: "A clear, direct professional summary.",
      
      about_p1: `Systems and Computer Engineering student at <strong>Universidad Nacional del Santa (UNS)</strong>.
      I focus on building clear, maintainable software that solves real problems.`,

      about_p2: `I’ve built <strong>web applications</strong> and <strong>backend</strong> solutions with <strong>Java (Spring Boot)</strong> and <strong>Python</strong>, integrating <strong>databases</strong> (<strong>PostgreSQL</strong>, <strong>SQL Server</strong>)
      and consuming <strong>APIs</strong>. On the frontend, I work with <strong>HTML/CSS/JavaScript</strong> applying responsive design.
      I use <strong>Git/GitHub</strong> for version control and workflow.`,

      about_p3: `I'm looking for <strong>2026 Pre-professional Internships</strong> in software development (frontend, backend, or full-stack),
      where I can contribute with real projects, learn from the team, and continuously improve.`,
      
      // Skills
      skills_title: "Skills",
      skills_subtitle: "Organized and backed by projects.",
      skills_languages: "Languages",
      skills_frameworks: "Frameworks",
      skills_databases: "Databases",
      skills_data: "Data",
      skills_tools_methods: "Tools / Methodologies",
      skills_learning: "Learning",
      skills_learning_note: "2026 roadmap: deployment, best practices, and tooling.",

      // Engineering
      engineering_title: "Systems Engineering",
      engineering_subtitle: "How I think, design, and deliver software.",
      eng1_title: "Analysis & modeling",
      eng1_desc: "Clear requirements, modular structure, and docs to keep software maintainable.",
      eng2_title: "Backend + Data",
      eng2_desc: "APIs, ETL, and persistence: turning data into product features.",
      eng3_title: "Quality & delivery",
      eng3_desc: "Git, reviews, testing, and automation (when it makes sense) to ship with confidence.",
      eng_diagram_title: "Engineering pipeline (simplified)",
      eng_diagram_desc: "From problem to product: requirements → design → implementation → testing → deployment.",
      eng_step1: "Reqs",
      eng_step2: "Design",
      eng_step3: "Build",
      eng_step4: "Tests",
      eng_step5: "Deploy",

      // Projects
      projects_title: "Projects",
      projects_subtitle: "Your proof. A well-presented project is worth gold.",
      pill_featured: "Web Analytics",
      radar_title: "Radar IA — Reddit Analytics Dashboard",
      radar_desc:
        "Python pipeline that collects posts and comments from AI subreddits, performs sentiment analysis, and shows KPIs + charts in a web dashboard.",
      radar_li1: "ETL: extract, store, and update data",
      radar_li2: "API: endpoints for KPIs, activity, and date filters",
      radar_li3: "Visualization: metrics, table, and charts",
      radar_img_alt: "Radar IA dashboard screenshot",
      btn_code: "Code",

      research_title: "Research — Real-time PPE detection (YOLO)",
      pill_inprogress: "investigation",
      research_desc:
        'Personal protective equipment (PPE) detection in industrial environments using Deep Learning. <span class="muted">2025–Present</span><br />YOLO (v8/v5) · Edge Computing · Real-time app (webcam)',
      research_real_time: "Real-time",
      research_li1: "Training and comparison of YOLO architectures (v8s/v8n/v5s/v5n/v5l) for multi-class PPE detection.",
      research_li2: "Development of a real-time desktop application using webcam and mobile integration (e.g., iVCam).",
      research_li3: "Evaluation with standard metrics (Precision, Recall, F1-Score, mAP) and visual analysis of predictions.",

      pill_fullstack: "E-commerce",
      karnaval_title: "BAZAR — El Karnaval (E-commerce + Stripe)",
      karnaval_desc: "Full-stack demo store with Spring Boot + Thymeleaf: login, cart, and Stripe payments.",
      karnaval_li1: "Auth + views (login, dashboard, catalog).",
      karnaval_li2: "Shopping cart with JS (add/remove/items counter).",
      karnaval_li3: "Stripe checkout integration (test mode).",
      btn_readme: "Guide",

      // Certs
      certs_title: "Licenses & certifications",
      certs_subtitle: "Certificates and courses relevant to my professional profile.",
      cert_view: "View certificate (PDF)",
      cert_scrum_title: "Scrum Fundamentals Certified",
      cert_scrum_meta: "SCRUMstudy · Dec. 2025",
      cert_scrum_alt: "Preview of the Scrum Fundamentals Certified certificate",
      cert_sql_title: "SQL Server – Database",
      cert_sql_meta: "Universidad Nacional de Ingeniería · Mar. 2025",
      cert_sql_alt: "Preview of the SQL Server – Database certificate",
      cert_network_title: "Basic Networking Concepts",
      cert_network_meta: "Cisco Networking Academy · Aug. 2025",
      cert_network_alt: "Preview of the Basic Networking Concepts certificate",
      cert_packet_title: "Introduction to Cisco Packet Tracer",
      cert_packet_meta: "Cisco Networking Academy · Aug. 2025",
      cert_packet_alt: "Preview of the Introduction to Cisco Packet Tracer certificate",
      cert_intern_title: "National University Internship",
      cert_intern_meta: "Universidad Nacional del Santa · Dec. 2025",
      cert_intern_alt: "Preview of the National University Internship certificate",
      cert_drones_title: "Drones: Technological Solutions for Engineering",
      cert_drones_meta: "Universidad Nacional del Santa · Jun. 2025",
      cert_drones_alt: "Preview of the Drones: Technological Solutions for Engineering certificate",

      // Contact
      contact_title: "Contact",
      contact_subtitle: "Easy to reach. No hassle.",
      contact_talk_title: "Let’s talk",
      contact_talk_p:
        "If you're interested in my profile for internships or projects, you can reach me via email or LinkedIn.",
      btn_send_email: "Send email",

      // Form
      form_title: "Quick message",
      label_name: "Name",
      label_email: "Email",
      label_message: "Message",
      btn_prepare_email: "Compose email",
      footer_made: "Built with HTML, CSS and JavaScript",

      // Form messages
      form_fill_required: "Please fill in all fields.",
      form_invalid_email: "Invalid email.",
      form_opening_client: "Opening your email client…",
      form_subject_prefix: "Portfolio | Message from",
      form_body_name: "Name",
      form_body_email: "Email",
      form_body_message: "Message",
    },
  };

  const langBtn = $("#langBtn");
  const langLabel = $("#langLabel");

  function getPreferredLang() {
    const saved = localStorage.getItem("lang");
    if (saved && (saved === "es" || saved === "en")) return saved;
    const navLang = (navigator.language || "es").toLowerCase();
    return navLang.startsWith("es") ? "es" : "en";
  }

  let currentLang = getPreferredLang();

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || key;
  }

  function applyLang(lang) {
    currentLang = lang === "en" ? "en" : "es";
    localStorage.setItem("lang", currentLang);

    document.documentElement.lang = currentLang;
    document.title = i18n[currentLang].page_title;

    // Label shows the OTHER language (so the user knows what will happen)
    if (langLabel) langLabel.textContent = currentLang === "es" ? "EN" : "ES";

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = i18n[currentLang][key];
      if (typeof val === "string") el.textContent = val;
    });

    $$("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      const val = i18n[currentLang][key];
      if (typeof val === "string") el.innerHTML = val;
    });

    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      const val = i18n[currentLang][key];
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });

    $$('[data-i18n-alt]').forEach((el) => {
      const key = el.dataset.i18nAlt;
      const val = i18n[currentLang][key];
      if (typeof val === "string") el.setAttribute("alt", val);
    });

    // Placeholder support
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const val = i18n[currentLang][key];
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
  }

  applyLang(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }

  // =========================
  // Mobile menu
  // =========================
  const menuBtn = $("#menuBtn");
  const menu = $("#navMenu");

  function closeMenu() {
    if (!menu || !menuBtn) return;
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!menu || !menuBtn) return;
    const isOpen = menu.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  if (menuBtn) menuBtn.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  if (menu) $$(".nav__link", menu).forEach((a) => a.addEventListener("click", closeMenu));

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu || !menuBtn) return;
    if (!menu.classList.contains("is-open")) return;
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (menu.contains(target) || menuBtn.contains(target)) return;
    closeMenu();
  });

  // Close with ESC (also used by palette)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // =========================
  // Reveal (scroll animation)
  // =========================
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // =========================
  // Scrollspy for nav
  // =========================
  const sectionIds = ["about", "skills", "engineering", "projects", "certs", "contact"];
  const linkById = new Map();

  sectionIds.forEach((id) => {
    const link = $(`.nav__link[href="#${id}"]`);
    if (link) linkById.set(id, link);
  });

  function setActiveLink(id) {
    linkById.forEach((linkEl) => linkEl.classList.remove("is-active"));
    const targetLink = linkById.get(id);
    if (targetLink) targetLink.classList.add("is-active");
  }

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        // Prefer the entry closest to top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && visible.target && visible.target.id) setActiveLink(visible.target.id);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.01, 0.15, 0.3],
      }
    );

    sectionIds.forEach((id) => {
      const sec = document.getElementById(id);
      if (sec) spy.observe(sec);
    });
  }

  // =========================
  // Contact form -> mailto
  // =========================
  const form = $("#contactForm");
  const msg = $("#formMsg");

  function setMsg(text) {
    if (!msg) return;
    msg.textContent = text;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        setMsg(t("form_fill_required"));
        return;
      }
      if (!isValidEmail(email)) {
        setMsg(t("form_invalid_email"));
        return;
      }

      const to = "ing.mikehernandez@gmail.com";

      const subject = encodeURIComponent(`${t("form_subject_prefix")} ${name}`);
      const body = encodeURIComponent(
        `${t("form_body_name")}: ${name}\n${t("form_body_email")}: ${email}\n\n${t(
          "form_body_message"
        )}:\n${message}\n`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      setMsg(t("form_opening_client"));
      form.reset();
      setTimeout(() => setMsg(""), 4000);
    });
  }

  // =========================
  // Command palette (Ctrl/Cmd + K)
  // =========================
  const cmdBtn = $("#cmdBtn");
  const cmdPalette = $("#cmdPalette");
  const cmdSearch = $("#cmdSearch");
  const cmdItems = cmdPalette ? $$(".palette__item", cmdPalette) : [];
  const cmdClose = cmdPalette ? $('[data-action="close"]', cmdPalette) : null;
  const cmdKeyHint = $("#cmdKeyHint");
  const cmdModKey = $("#cmdModKey");

  function getModKeyLabel() {
    const isMac =
      navigator.platform.toLowerCase().includes("mac") ||
      navigator.userAgent.toLowerCase().includes("mac");
    return isMac ? "⌘" : "Ctrl";
  }

  function openPalette() {
    if (!cmdPalette) return;

    // Reset state
    if (cmdSearch) {
      cmdSearch.value = "";
      cmdItems.forEach((btn) => (btn.hidden = false));
    }

    if (typeof cmdPalette.showModal === "function") cmdPalette.showModal();
    else cmdPalette.setAttribute("open", "");

    setTimeout(() => cmdSearch && cmdSearch.focus(), 0);
  }

  function closePalette() {
    if (!cmdPalette) return;
    if (typeof cmdPalette.close === "function") cmdPalette.close();
    else cmdPalette.removeAttribute("open");
  }

  // Update key hints in UI
  const modLabel = getModKeyLabel();
  if (cmdKeyHint) cmdKeyHint.textContent = modLabel === "⌘" ? "⌘K" : "Ctrl K";
  if (cmdModKey) cmdModKey.textContent = modLabel;

  if (cmdBtn) cmdBtn.addEventListener("click", openPalette);
  if (cmdClose) cmdClose.addEventListener("click", closePalette);

  if (cmdSearch) {
    cmdSearch.addEventListener("input", () => {
      const q = cmdSearch.value.toLowerCase().trim();
      cmdItems.forEach((btn) => {
        const text = (btn.textContent || "").toLowerCase();
        btn.hidden = q ? !text.includes(q) : false;
      });
    });

    cmdSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const first = cmdItems.find((btn) => !btn.hidden);
        if (first) first.click();
      }
      if (e.key === "Escape") closePalette();
    });
  }

  cmdItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const href = btn.dataset.href;
      const url = btn.dataset.url;
      const newtab = btn.dataset.newtab === "true";

      closePalette();

      if (href) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.location.hash = href;
        return;
      }

      if (url) {
        if (newtab) window.open(url, "_blank", "noopener,noreferrer");
        else window.location.href = url;
      }
    });
  });

  // Global shortcut
  document.addEventListener("keydown", (e) => {
    const key = (e.key || "").toLowerCase();
    if ((e.ctrlKey || e.metaKey) && key === "k") {
      e.preventDefault();
      openPalette();
    }
    if (key === "escape") closePalette();
  });
})();
