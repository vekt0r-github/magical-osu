interface IconPaths {
  light: string;
  dark: string;
}

declare global {
  interface Window {
    toggleDarkMode: () => void;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const iconMap: Record<string, IconPaths> = {
    "theme-icon":  { light: "/images/moon.svg",          dark: "/images/sun.svg"           },
    "github-icon": { light: "/images/github.svg",        dark: "/images/github-white.svg"  },
    "hakyll-icon": { light: "/images/hakyll.svg",        dark: "/images/hakyll-white.svg"  },
    "menu-icon":   { light: "/images/menu.svg",          dark: "/images/menu-white.svg"    },
  };

  const isDark = document.documentElement.classList.contains("dark-mode");

  function setIcons(isDark: boolean): void {
    for (const [id, paths] of Object.entries(iconMap)) {
      const img = document.getElementById(id) as HTMLImageElement | null;
      if (img) {
        img.src = isDark ? paths.dark : paths.light;
      }
    }
  }

  window.toggleDarkMode = function (): void {
    const isDark = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIcons(isDark);
  };

  setIcons(isDark);

  const hamburger = document.getElementById("hamburger-button");
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      const nav = document.getElementById("nav-menu");
      if (nav) {
        nav.classList.toggle("active");
      }
    });
  }
});
