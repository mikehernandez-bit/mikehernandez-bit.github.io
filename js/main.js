(() => {
  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  const html = document.documentElement;

  // =========================
  // Footer year
  // =========================
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // =========================
  // Theme (dark/light)
  // =========================
  const themeBtn = $("#themeBtn");

  function getPreferredTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  setTheme(getPreferredTheme());

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  // =========================
  // i18n (ES / EN)
  // =========================
  const langBtn = $("#langBtn");
  const langLabel = $("#langLabel");

  const I18N = {
    es: {
      doc_title: "Jhoan Hernández | Portafolio",
      meta_desc: "Portafolio de Jhoan Hernández (UNS). Desarrollo de software, proyectos, habilidades, certificaciones y contacto.",
      og_desc: "Estudiante de Ing. de Sistemas e Informática (UNS). Java, Python, SQL Server, Git. Proyecto destacado: Radar IA.",

      skip_link: "Saltar al contenido",
      menu_open_sr: "Abrir menú",
      nav_about: "Sobre mí",
      nav_skills: "Habilidades",
      nav_projects: "Proyectos",
      nav_certs: "Certificaciones",
      nav_contact: "Contacto",
      theme_toggle_sr: "Cambiar tema",
      lang_toggle_sr: "Cambiar idioma",
      theme_toggle_aria: "Cambiar tema",
      lang_toggle_aria: "Cambiar idioma",

      hero_badge: "UNS · Ing. de Sistemas e Informática",
      hero_title: "Estudiante de Ingeniería de Sistemas e Informática <span class=\"accent\">| Software Developer</span>",
      hero_lead: "Soy <strong>Jhoan Hernández</strong>. Me apasiona el desarrollo de software y la lógica de programación. Trabajo con <strong>Java</strong>, <strong>Python</strong>, <strong>SQL Server</strong> y <strong>Git</strong>.",
      btn_view_projects: "Ver proyectos",
      btn_contact: "Contactar",
      btn_download_cv: "Descargar CV",

      profile_role: "Estudiante · UNS",
      quick_stack_label: "Stack",
      quick_stack_value: "Java · Python · SQL Server · Git",
      quick_interest_label: "Interés",
      quick_interest_value: "Backend · Datos · Web",

      about_title: "Sobre mí",
      about_subtitle: "Resumen profesional, claro y directo.",
      about_p1: "Estudiante de Ingeniería de Sistemas de la <strong>Universidad Nacional del Santa (UNS)</strong>, apasionado por el desarrollo de software y la lógica de programación.",
      about_p2: "Tengo experiencia usando <strong>Java</strong> para aplicaciones orientadas a objetos y <strong>Python</strong> para automatización, scripts y manejo de datos. Complemento con <strong>SQL</strong> (SQL Server), control de versiones con <strong>Git/GitHub</strong> y fundamentos de redes.",
      about_p3: "Busco una oportunidad de <strong>Prácticas Preprofesionales</strong> donde pueda aportar y aprender en un entorno real.",

      skills_title: "Habilidades",
      skills_subtitle: "Organizadas para lectura rápida.",
      skills_languages: "Lenguajes",
      skills_frameworks: "Frameworks",
      skills_databases: "Bases de datos",
      skills_tools: "Herramientas / Metodologías",

      projects_title: "Proyectos",
      projects_subtitle: "Evidencia real (proyecto + enfoque + stack).",
      pill_featured: "Destacado",
      radar_desc: "Pipeline en Python que recolecta publicaciones y comentarios de subreddits de IA, calcula sentimiento y muestra KPIs + gráficos en un dashboard web.",
      radar_b1: "ETL: extracción, guardado y actualización de datos",
      radar_b2: "API: endpoints para KPIs, actividad y filtros por fecha",
      radar_b3: "Visualización: métricas, tabla y gráficos",
      btn_code: "Código",

      research_title: "Investigación — Detección de EPP con YOLO",
      pill_in_progress: "En curso",
      research_desc: "Semillero de investigación: desarrollo de un sistema para detectar Equipos de Protección Personal (EPP) usando modelos YOLO y una aplicación en tiempo real.",
      research_b1: "Objetivo: mejorar seguridad industrial con visión por computadora",
      research_b2: "Salida: artículo científico (en preparación)",
      research_b3: "Nota: sin repositorio/demostración pública por el momento",

      certs_title: "Licencias y certificaciones",
      certs_subtitle: "PDF + vista previa (primera página).",
      cert_view_pdf: "Ver certificado (PDF)",
      cert_scrum_meta: "SCRUMstudy · dic. 2025",
      cert_sql_title: "SQL Server – Base de Datos",
      cert_sql_meta: "Universidad Nacional de Ingeniería · mar. 2025",
      cert_net_title: "Conceptos básicos de redes",
      cert_net_meta: "Cisco Networking Academy · ago. 2025",
      cert_pt_title: "Introducción a Cisco Packet Tracer",
      cert_pt_meta: "Cisco Networking Academy · ago. 2025",
      cert_intern_title: "Pasantía Nacional Universitaria",
      cert_intern_meta: "Universidad Nacional del Santa · dic. 2025",

      contact_title: "Contacto",
      contact_subtitle: "Fácil de encontrarte. Sin complicaciones.",
      contact_talk_title: "Hablemos",
      contact_talk_desc: "Si te interesa mi perfil para prácticas o proyectos, puedes escribirme por email o LinkedIn.",
      btn_email: "Enviar correo",
      btn_linkedin: "LinkedIn",
      btn_github: "GitHub",
      contact_form_title: "Mensaje rápido",
      field_name: "Nombre",
      field_email: "Email",
      field_message: "Mensaje",
      form_btn: "Preparar correo",
      back_to_top: "Volver arriba ↑",
      footer_made: "Hecho con HTML, CSS y JavaScript",

      form_err_fill: "Por favor completa todos los campos.",
      form_opening: "Abriendo tu cliente de correo…",
      form_subject: "Portafolio | Mensaje de",
      form_body_name: "Nombre",
      form_body_email: "Email",
      form_body_message: "Mensaje",
    },

    en: {
      doc_title: "Jhoan Hernández | Portfolio",
      meta_desc: "Portfolio of Jhoan Hernández (UNS). Software development, projects, skills, certifications and contact.",
      og_desc: "Systems Engineering student (UNS). Java, Python, SQL Server, Git. Featured project: Radar IA.",

      skip_link: "Skip to content",
      menu_open_sr: "Open menu",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_certs: "Certifications",
      nav_contact: "Contact",
      theme_toggle_sr: "Toggle theme",
      lang_toggle_sr: "Toggle language",
      theme_toggle_aria: "Toggle theme",
      lang_toggle_aria: "Toggle language",

      hero_badge: "UNS · Systems Engineering and Informatics",
      hero_title: "Systems Engineering and Informatics Student <span class=\"accent\">| Software Developer</span>",
      hero_lead: "I'm <strong>Jhoan Hernández</strong>. I'm passionate about software development and programming logic. I work with <strong>Java</strong>, <strong>Python</strong>, <strong>SQL Server</strong>, and <strong>Git</strong>.",
      btn_view_projects: "View projects",
      btn_contact: "Contact",
      btn_download_cv: "Download CV",

      profile_role: "Student · UNS",
      quick_stack_label: "Stack",
      quick_stack_value: "Java · Python · SQL Server · Git",
      quick_interest_label: "Focus",
      quick_interest_value: "Backend · Data · Web",

      about_title: "About",
      about_subtitle: "A clear and direct professional summary.",
      about_p1: "Systems Engineering student at <strong>Universidad Nacional del Santa (UNS)</strong>, passionate about software development and programming logic.",
      about_p2: "Experience using <strong>Java</strong> for object-oriented applications and <strong>Python</strong> for automation, scripting, and data handling. Complemented with <strong>SQL</strong> (SQL Server), version control with <strong>Git/GitHub</strong>, and networking fundamentals.",
      about_p3: "Seeking a <strong>pre-professional internship</strong> where I can contribute and learn in a real-world environment.",

      skills_title: "Skills",
      skills_subtitle: "Organized for fast scanning.",
      skills_languages: "Languages",
      skills_frameworks: "Frameworks",
      skills_databases: "Databases",
      skills_tools: "Tools / Methodologies",

      projects_title: "Projects",
      projects_subtitle: "Real evidence (project + approach + stack).",
      pill_featured: "Featured",
      radar_desc: "Python pipeline that collects posts and comments from AI subreddits, runs sentiment analysis, and shows KPIs + charts in a web dashboard.",
      radar_b1: "ETL: extract, store, and refresh data",
      radar_b2: "API: endpoints for KPIs, activity, and date filters",
      radar_b3: "Visualization: metrics, tables, and charts",
      btn_code: "Code",

      research_title: "Research — PPE Detection with YOLO",
      pill_in_progress: "In progress",
      research_desc: "Research group project: building a system to detect Personal Protective Equipment (PPE) using YOLO models and a real-time application.",
      research_b1: "Goal: improve industrial safety with computer vision",
      research_b2: "Output: scientific paper (in preparation)",
      research_b3: "Note: no public repository/demo yet",

      certs_title: "Licenses and certifications",
      certs_subtitle: "PDF + preview (first page).",
      cert_view_pdf: "View certificate (PDF)",
      cert_scrum_meta: "SCRUMstudy · Dec 2025",
      cert_sql_title: "SQL Server – Database",
      cert_sql_meta: "Universidad Nacional de Ingeniería · Mar 2025",
      cert_net_title: "Networking Basics",
      cert_net_meta: "Cisco Networking Academy · Aug 2025",
      cert_pt_title: "Introduction to Cisco Packet Tracer",
      cert_pt_meta: "Cisco Networking Academy · Aug 2025",
      cert_intern_title: "National University Internship",
      cert_intern_meta: "Universidad Nacional del Santa · Dec 2025",

      contact_title: "Contact",
      contact_subtitle: "Easy to reach. No hassle.",
      contact_talk_title: "Let's talk",
      contact_talk_desc: "If you're interested in my profile for internships or projects, feel free to reach out by email or LinkedIn.",
      btn_email: "Send email",
      btn_linkedin: "LinkedIn",
      btn_github: "GitHub",
      contact_form_title: "Quick message",
      field_name: "Name",
      field_email: "Email",
      field_message: "Message",
      form_btn: "Prepare email",
      back_to_top: "Back to top ↑",
      footer_made: "Built with HTML, CSS and JavaScript",

      form_err_fill: "Please fill in all fields.",
      form_opening: "Opening your email client…",
      form_subject: "Portfolio | Message from",
      form_body_name: "Name",
      form_body_email: "Email",
      form_body_message: "Message",
    },
  };

  function getPreferredLang() {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;

    // Browser preference
    const navLang = (navigator.language || "es").toLowerCase();
    return navLang.startsWith("en") ? "en" : "es";
  }

  let currentLang = getPreferredLang();

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key;
  }

  function applyLang() {
    html.setAttribute("lang", currentLang);

    // Text nodes
    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = t(key);
    });

    // HTML nodes (allow strong/span)
    $$('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = t(key);
    });

    // Document metadata
    document.title = t("doc_title");
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta_desc"));

    const ogDesc = $('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("og_desc"));

    // A11y labels
    if (themeBtn) themeBtn.setAttribute("aria-label", t("theme_toggle_aria"));
    if (langBtn) langBtn.setAttribute("aria-label", t("lang_toggle_aria"));

    // Button label shows the target language
    if (langLabel) langLabel.textContent = currentLang === "es" ? "EN" : "ES";
  }

  function setLang(next) {
    currentLang = next;
    localStorage.setItem("lang", currentLang);
    applyLang();
  }

  applyLang();

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLang(currentLang === "es" ? "en" : "es");
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

  function openMenu() {
    if (!menu || !menuBtn) return;
    menu.classList.add("is-open");
    menuBtn.setAttribute("aria-expanded", "true");
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedInside = menu.contains(target) || menuBtn.contains(target);
      if (!clickedInside) closeMenu();
    });

    // Close with ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close after clicking a link
    $$(".nav__link", menu).forEach((a) => a.addEventListener("click", closeMenu));
  }

  // =========================
  // Reveal on scroll
  // =========================
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    const revealEls = $$(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  // =========================
  // Avatar fallback (no inline JS)
  // =========================
  const profileCard = $("#profileCard") || $(".profile");
  const avatar = $(".profile__img");
  if (avatar && profileCard) {
    avatar.addEventListener("error", () => {
      profileCard.classList.add("profile--fallback");
    });
  }

  // =========================
  // Contact form: generate mailto
  // =========================
  const form = $("#contactForm");
  const formMsg = $("#formMsg");

  function setMsg(text) {
    if (formMsg) formMsg.textContent = text;
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        setMsg(t("form_err_fill"));
        return;
      }

      const to = "ing.mikehernandez@gmail.com";

      const subject = encodeURIComponent(`${t("form_subject")} ${name}`);
      const body = encodeURIComponent(
        `${t("form_body_name")}: ${name}\n${t("form_body_email")}: ${email}\n\n${t("form_body_message")}:\n${message}\n`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      setMsg(t("form_opening"));
      form.reset();
      setTimeout(() => setMsg(""), 4000);
    });
  }
})();
