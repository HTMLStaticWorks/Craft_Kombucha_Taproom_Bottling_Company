const root = document.documentElement;
const saved = localStorage.getItem("kova-theme");
if (saved) root.dataset.theme = saved;

const themeButton = document.querySelector(".theme-toggle");
themeButton.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("kova-theme", next);
});

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuButton.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

document.querySelectorAll(".mobile-menu a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  })
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in-view");
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll(".section").forEach((s) => observer.observe(s));

// Active section navigation menu scroll spy
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu nav a");
const sections = document.querySelectorAll("main > section[id]");

function updateActiveMenu() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.35;
  let activeId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeId = section.getAttribute("id");
    }
  });

  // Fallbacks for top of page & bottom of page
  if (window.scrollY < 100 && sections.length > 0) {
    activeId = sections[0].getAttribute("id");
  } else if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
    sections.length > 0
  ) {
    activeId = sections[sections.length - 1].getAttribute("id");
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === `#${activeId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveMenu, { passive: true });
window.addEventListener("load", updateActiveMenu);
window.addEventListener("resize", updateActiveMenu);
