gsap.registerPlugin(ScrollTrigger);

/* HERO TEXT */
gsap.from(".reveal", {
  opacity: 0,
  y: 24,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});

/* WORK CARDS */
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".work",
    start: "top 80%"
  },
  opacity: 0,
  y: 60,
  stagger: 0.2,
  duration: 0.9,
  ease: "power2.out"
});

/* HEADER SCROLL STATE */
const header = document.querySelector(".header");
const HEADER_OFFSET = header.offsetHeight + 16;

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});


/* HEADER NAV SMOOTH SCROLL */
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_OFFSET;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});

/* SECTION INDICATOR */
const sections = [
  document.querySelector("#hero"),
  document.querySelector("#work"),
  document.querySelector("#process"),
  document.querySelector("#contact")
];

const indicatorButtons = document.querySelectorAll(".section-indicator button");

window.addEventListener("scroll", () => {
  let current = 0;

  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.45) {
      current = index;
    }
  });

  indicatorButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index === current);
  });
});

/* INDICATOR CLICK SCROLL */
indicatorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (!target) return;

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});
