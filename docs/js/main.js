document.addEventListener("DOMContentLoaded", function() {
  const iconMap = {
    "theme-icon": { light: "/images/moon.svg", dark: "/images/sun.svg" },
    "github-icon": { light: "/images/github.svg", dark: "/images/github-white.svg" },
    "hakyll-icon": { light: "/images/hakyll.svg", dark: "/images/hakyll-white.svg" },
    "menu-icon": { light: "/images/menu.svg", dark: "/images/menu-white.svg" }
  };
  const isDark = document.documentElement.classList.contains("dark-mode");
  function setIcons(isDark2) {
    for (const [id, paths] of Object.entries(iconMap)) {
      const img = document.getElementById(id);
      if (img) {
        img.src = isDark2 ? paths.dark : paths.light;
      }
    }
  }
  window.toggleDarkMode = function() {
    const isDark2 = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark2 ? "dark" : "light");
    setIcons(isDark2);
  };
  setIcons(isDark);
  const hamburger = document.getElementById("hamburger-button");
  if (hamburger) {
    hamburger.addEventListener("click", function() {
      const nav = document.getElementById("nav-menu");
      if (nav) {
        nav.classList.toggle("active");
      }
    });
  }
});
