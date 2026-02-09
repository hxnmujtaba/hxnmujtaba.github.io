gsap.registerPlugin(ScrollTrigger);

/* REVEAL ANIMATIONS */
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  });
});

/* STICKY NAV ACTIVE STATE */
const navLinks = document.querySelectorAll(".project-nav a");
const sections = [...navLinks].map(link =>
  document.querySelector(link.getAttribute("href"))
);

window.addEventListener("scroll", () => {
  let current = 0;

  sections.forEach((section, i) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
      current = i;
    }
  });

  navLinks.forEach((link, i) => {
    link.classList.toggle("active", i === current);
  });
});
