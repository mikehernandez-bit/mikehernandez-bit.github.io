(() => {
  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  // Año en footer
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Tema (dark/light)
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
  // Idioma (ES / EN)
  // =========================
  const i18n = {
    es: {
      page_title: "Jhoan Hernández | Portafolio",
      toggle_lang_sr: "Cambiar idioma",
      skip_link: "Saltar al contenido",
      aria_go_top: "Ir al inicio",
      aria_main_nav: "Navegación principal",
      open_menu: "Abrir menú",
      nav_about: "Sobre mí",
      nav_skills: "Habilidades",
      nav_projects: "Proyectos",
      nav_certs: "Certificaciones",
      nav_contact: "Contacto",

      hero_badge: "UNS · Ing. de Sistemas e Informática",
      hero_title: 'Estudiante de Ingeniería de Sistemas e Informática <span class="accent">| Software Developer</span>',
      hero_lead:
        'Soy <strong>Jhoan Hernández</strong>. Me apasiona el desarrollo de software y la lógica de programación. Trabajo con <strong>Java</strong>, <strong>Python</strong>, <strong>SQL Server</strong> y <strong>Git</strong>.',
      cta_projects: "Ver proyectos",
      cta_contact: "Contactar",
      cta_cv: "Descargar CV",

      profile_role: "Estudiante · UNS",
      quick_stack: "Stack",
      quick_interest: "Interés",

      about_title: "Sobre mí",
      about_subtitle: "Tu resumen profesional, claro y directo.",
      about_p1:
        'Estudiante de Ingeniería de Sistemas de la <strong>Universidad Nacional del Santa (UNS)</strong>, apasionado por el desarrollo de software y la lógica de programación.',
      about_p2:
        'Tengo experiencia usando <strong>Java</strong> para aplicaciones orientadas a objetos y <strong>Python</strong> para automatización, scripts y manejo de datos. Complemento con <strong>SQL</strong> (SQL Server), control de versiones con <strong>Git/GitHub</strong> y fundamentos de redes.',
      about_p3:
        'Busco una oportunidad de <strong>Prácticas Preprofesionales</strong> donde pueda aportar y aprender en un entorno real.',

      skills_title: "Habilidades",
      skills_subtitle: "Ordenadas y respaldadas por proyectos.",
      skills_languages: "Lenguajes",
      skills_frameworks: "Frameworks",
      skills_databases: "Bases de datos",
      skills_data: "Datos",
      skills_tools_methods: "Herramientas / Metodologías",

      projects_title: "Proyectos",
      projects_subtitle: "Tu evidencia. Un proyecto bien presentado vale oro.",
      pill_featured: "Destacado",
      radar_desc:
        "Pipeline en Python que recolecta publicaciones y comentarios de subreddits de IA, calcula sentimiento y muestra KPIs + gráficos en un dashboard web.",
      radar_li1: "ETL: extracción, guardado y actualización de datos",
      radar_li2: "API: endpoints para KPIs, actividad y filtros por fecha",
      radar_li3: "Visualización: métricas, tabla y gráficos",
      btn_code: "Código",

      research_title: "Investigación — Detección de EPP en tiempo real (YOLO)",
      pill_inprogress: "En curso",
      research_desc:
        'Detección de equipo de protección personal (EPP) en entornos industriales mediante Deep Learning. <span class="muted">2025–Actual</span><br />YOLO (v8/v5) · Edge Computing · App en tiempo real (webcam)',
      research_real_time: "Tiempo real",

      certs_title: "Licencias y certificaciones",
      certs_subtitle: "Certificados y cursos relevantes para mi perfil profesional.",
      cert_view: "Ver certificado (PDF)",

      contact_title: "Contacto",
      contact_subtitle: "Fácil de encontrarte. Sin complicaciones.",
      contact_talk_title: "Hablemos",
      contact_talk_p:
        "Si te interesa mi perfil para prácticas o proyectos, puedes escribirme por email o LinkedIn.",
      btn_send_email: "Enviar correo",

      form_title: "Mensaje rápido",
      label_name: "Nombre",
      label_email: "Email",
      label_message: "Mensaje",
      btn_prepare_email: "Preparar correo",

      backtop: "Volver arriba ↑",
      footer_made: "Hecho con HTML, CSS y JavaScript",

      form_fill_required: "Por favor completa todos los campos.",
      form_invalid_email: "Email inválido.",
      form_opening_client: "Abriendo tu cliente de correo…",
      form_subject_prefix: "Portafolio | Mensaje de",
      form_body_name: "Nombre",
      form_body_email: "Email",
      form_body_message: "Mensaje"
    },
    en: {
      page_title: "Jhoan Hernández | Portfolio",
      toggle_lang_sr: "Switch language",
      skip_link: "Skip to content",
      aria_go_top: "Back to top",
      aria_main_nav: "Main navigation",
      open_menu: "Open menu",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_certs: "Certifications",
      nav_contact: "Contact",

      hero_badge: "UNS · Systems & Computer Engineering",
      hero_title: 'Systems & Computer Engineering Student <span class="accent">| Software Developer</span>',
      hero_lead:
        'I’m <strong>Jhoan Hernández</strong>. I’m passionate about software development and programming logic. I work with <strong>Java</strong>, <strong>Python</strong>, <strong>SQL Server</strong> and <strong>Git</strong>.',
      cta_projects: "View projects",
      cta_contact: "Contact",
      cta_cv: "Download CV",

      profile_role: "Student · UNS",
      quick_stack: "Stack",
      quick_interest: "Focus",

      about_title: "About",
      about_subtitle: "A clear, direct professional summary.",
      about_p1:
        'Systems Engineering student at <strong>Universidad Nacional del Santa (UNS)</strong>, passionate about software development and programming logic.',
      about_p2:
        'I have experience using <strong>Java</strong> for object-oriented applications and <strong>Python</strong> for automation, scripting and data handling. I complement this with <strong>SQL</strong> (SQL Server), version control with <strong>Git/GitHub</strong>, and networking fundamentals.',
      about_p3:
        'I’m seeking a <strong>pre-professional internship</strong> where I can contribute and learn in a real environment.',

      skills_title: "Skills",
      skills_subtitle: "Organized and backed by projects.",
      skills_languages: "Languages",
      skills_frameworks: "Frameworks",
      skills_databases: "Databases",
      skills_data: "Data",
      skills_tools_methods: "Tools / Methodologies",

      projects_title: "Projects",
      projects_subtitle: "Your evidence. A well-presented project is worth gold.",
      pill_featured: "Featured",
      radar_desc:
        "Python pipeline that collects posts and comments from AI subreddits, performs sentiment analysis, and shows KPIs + charts in a web dashboard.",
      radar_li1: "ETL: extract, store, and update data",
      radar_li2: "API: endpoints for KPIs, activity, and date filters",
      radar_li3: "Visualization: metrics, table, and charts",
      btn_code: "Code",

      research_title: "Research — Real-time PPE detection (YOLO)",
      pill_inprogress: "In progress",
      research_desc:
        'Personal protective equipment (PPE) detection in industrial environments using Deep Learning. <span class="muted">2025–Present</span><br />YOLO (v8/v5) · Edge Computing · Real-time app (webcam)',
      research_real_time: "Real-time",

      certs_title: "Licenses & certifications",
      certs_subtitle: "Certificates and courses relevant to my professional profile.",
      cert_view: "View certificate (PDF)",

      contact_title: "Contact",
      contact_subtitle: "Easy to reach. No hassle.",
      contact_talk_title: "Let’s talk",
      contact_talk_p:
        "If you're interested in my profile for internships or projects, you can reach me via email or LinkedIn.",
      btn_send_email: "Send email",

      form_title: "Quick message",
      label_name: "Name",
      label_email: "Email",
      label_message: "Message",
      btn_prepare_email: "Compose email",

      backtop: "Back to top ↑",
      footer_made: "Built with HTML, CSS and JavaScript",

      form_fill_required: "Please fill in all fields.",
      form_invalid_email: "Invalid email.",
      form_opening_client: "Opening your email client…",
      form_subject_prefix: "Portfolio | Message from",
      form_body_name: "Name",
      form_body_email: "Email",
      form_body_message: "Message"
    }
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

    // label shows the OTHER language (so the user knows what will happen)
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
  }

  applyLang(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }

  // =========================
  // Menú móvil
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

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  // Cerrar menú al hacer click en un link
  if (menu) {
    $$(".nav__link", menu).forEach((a) => a.addEventListener("click", closeMenu));
  }

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // =========================
  // Animación reveal on scroll
  // =========================
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // =========================
  // Formulario -> mailto
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
        `${t("form_body_name")}: ${name}\n${t("form_body_email")}: ${email}\n\n${t("form_body_message")}:\n${message}\n`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      setMsg(t("form_opening_client"));
      form.reset();
      setTimeout(() => setMsg(""), 4000);
    });
  }
})();