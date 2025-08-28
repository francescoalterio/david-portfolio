// Actualiza año del footer
(function updateYear() {
  const yEl = document.getElementById("year");
  if (yEl) yEl.textContent = new Date().getFullYear();
})();

// Menú responsive
(function navToggle() {
  const btn = document.querySelector(".nav__toggle");
  const list = document.querySelector(".nav__links");
  if (!btn || !list) return;
  btn.addEventListener("click", () => {
    const open = list.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// Accesibilidad: permitir abrir overlay con teclado enfocando la tarjeta
(function cardsFocus() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const link = card.querySelector("a.project-card__link");
        if (link) link.click();
      }
    });
  });
})();
