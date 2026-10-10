(() => {
  const root = document.documentElement;

  // Theme Persistence & Toggle
  const savedTheme = localStorage.getItem("kova-theme");
  if (savedTheme) {
    root.dataset.theme = savedTheme;
  } else {
    root.dataset.theme = "light";
  }

  const themeButton = document.querySelector(".theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem("kova-theme", nextTheme);
    });
  }

  // RTL Direction Toggle & Persistence
  const savedDir = localStorage.getItem("kova-dir");
  const rtlButton = document.querySelector(".rtl-toggle");
  const rtlLabel = document.querySelector(".rtl-label");

  if (savedDir) {
    root.setAttribute("dir", savedDir);
    if (rtlLabel) rtlLabel.textContent = savedDir === "rtl" ? "LTR" : "RTL";
  }

  if (rtlButton) {
    rtlButton.addEventListener("click", () => {
      const currentDir = root.getAttribute("dir") === "rtl" ? "rtl" : "ltr";
      const nextDir = currentDir === "rtl" ? "ltr" : "rtl";
      root.setAttribute("dir", nextDir);
      localStorage.setItem("kova-dir", nextDir);
      if (rtlLabel) rtlLabel.textContent = nextDir === "rtl" ? "LTR" : "RTL";
    });
  }

  // Mobile Menu Toggle
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Active Menu Link Detection
  const currentFile = location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const targetFile = href ? href.split("#")[0].split("/").pop() : "";

    if (
      targetFile === currentFile ||
      (currentFile === "" && targetFile === "index.html") ||
      (currentFile === "index.html" && (href === "index.html" || href === "#home" || href === "#"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Floating Back to Top Button
  const backToTopBtn = document.getElementById("floating-back-to-top");
  if (backToTopBtn) {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Enquiry Forms Email Submissions
  document.querySelectorAll(".mailto-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [];
      for (const [key, value] of data.entries()) {
        lines.push(`${key}: ${value}`);
      }
      const subject = form.dataset.subject || "KOVA website enquiry";
      const mailto = `mailto:hello@kovabrew.co?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(lines.join("\n\n"))}`;
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent =
          "Opening your email app with the enquiry details. Please send the message to complete.";
      }
      window.location.href = mailto;
    });
  });
})();
