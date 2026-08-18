function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      icon.setAttribute("aria-expanded", "false");
    }
  });
});

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  const revealSelectors = [
    "#about .about-grid__photo",
    "#about .stat-chip",
    "#experience .skills-col",
    "#projects .bento-card",
    "#contact .contact-grid",
  ];

  const revealTargets = document.querySelectorAll(revealSelectors.join(", "));

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal-init");
    el.style.transitionDelay = `${(index % 4) * 100}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}
