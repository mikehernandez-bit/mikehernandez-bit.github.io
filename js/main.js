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
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  // Menú móvil
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

    // Cierra al click fuera
    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedInside = menu.contains(target) || menuBtn.contains(target);
      if (!clickedInside) closeMenu();
    });

    // Cierra con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Cierra al hacer click en un link del menú
    $$(".nav__link", menu).forEach((a) => a.addEventListener("click", closeMenu));
  }

  // Reveal on scroll
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    const revealEls = $$(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  // Formulario: genera mailto
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
        setMsg("Por favor completa todos los campos.");
        return;
      }

      const to = "ing.mikehernandez@gmail.com";

      const subject = encodeURIComponent(`Portafolio | Mensaje de ${name}`);
      const body = encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      setMsg("Abriendo tu cliente de correo…");
      form.reset();
      setTimeout(() => setMsg(""), 4000);
    });
  }
})();
