document.addEventListener("DOMContentLoaded", function () {

    // Add icon element IDs here to swap their src on dark mode toggle.
    // Format: "<element-id>": { light: "<light-mode-path>", dark: "<dark-mode-path>" }
    const icon_map = {
        "theme-icon": {
            light: "/images/moon.svg",
            dark: "/images/sun.svg",
        },
        "github-icon": {
            light: "/images/github.svg",
            dark: "/images/github-white.svg",
        },
        "hakyll-icon": {
            light: "/images/hakyll.svg",
            dark: "/images/hakyll-white.svg",
        },
        "menu-icon": {
            light: "/images/menu.svg",
            dark: "/images/menu-white.svg",
        },
    };

    const theme = localStorage.getItem("theme");
    const is_dark = theme === "dark";

    if (is_dark) {
        document.documentElement.classList.toggle("dark-mode", is_dark);

    }

    function setIcons(is_dark) {
        for (const [id, paths] of Object.entries(icon_map)) {
            const img = document.getElementById(id);

            if (img) {
                img.src = is_dark ? paths.dark : paths.light;

            }
        }
    }

    window.toggleDarkMode = function () {
        const is_dark = document.documentElement.classList.toggle("dark-mode");
        localStorage.setItem("theme", is_dark ? "dark" : "light");
        setIcons(is_dark);

    };

    setIcons(is_dark);

    document.getElementById("hamburger-button").addEventListener("click", function () {
        const nav = document.getElementById("nav-menu");
        nav.classList.toggle("active");

    });
});
