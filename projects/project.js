gsap.registerPlugin(ScrollTrigger);

/* ========================= */
/* REVEAL ANIMATIONS */
/* ========================= */
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power2.out"
  });
});

/* ========================= */
/* PROJECT NAV SCROLL SPY */
/* ========================= */

const navLinks = document.querySelectorAll(".project-nav-links a");

/**
 * Map nav links to existing sections
 * (NO HTML changes required)
 */
const sectionMap = [
  { id: "overview", el: document.querySelector("#overview") },
  { id: "responsibilities", el: document.querySelector("#responsibilities") },
  { id: "challenges", el: document.querySelector("#challenges") },
  { id: "ai", el: document.querySelector("#ai") },
  { id: "impact", el: document.querySelector("#impact") }
];

sectionMap.forEach(section => {
  if (!section.el) return;

  ScrollTrigger.create({
    trigger: section.el,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActive(section.id),
    onEnterBack: () => setActive(section.id)
  });
});

function setActive(activeId) {
  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${activeId}`
    );
  });
}

/* ========================= */
/* SMOOTH NAV CLICK SCROLL */
/* ========================= */

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    const offset = 96; // height of sticky nav
    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});
