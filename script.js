const root=document.documentElement;
const saved=localStorage.getItem("kova-theme");
if(saved) root.dataset.theme=saved;

const themeButton=document.querySelector(".theme-toggle");
themeButton.addEventListener("click",()=>{
  const next=root.dataset.theme==="dark"?"light":"dark";
  root.dataset.theme=next;
  localStorage.setItem("kova-theme",next);
});

const menuButton=document.querySelector(".menu-toggle");
const mobileMenu=document.querySelector(".mobile-menu");
menuButton.addEventListener("click",()=>{
  const open=mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",open);
  menuButton.setAttribute("aria-label",open?"Close menu":"Open menu");
});
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>{
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","Open menu");
}));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in-view")});
},{threshold:.08});
document.querySelectorAll(".section").forEach(s=>observer.observe(s));

// Highlight active section in navigation menu
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu nav a");
const sections = document.querySelectorAll("main section[id]");

function highlightActiveMenu() {
  let activeId = "";
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeId = section.getAttribute("id");
    }
  });

  if (!activeId && window.scrollY < 250 && sections.length > 0) {
    activeId = sections[0].getAttribute("id");
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

window.addEventListener("scroll", highlightActiveMenu, { passive: true });
window.addEventListener("load", highlightActiveMenu);

