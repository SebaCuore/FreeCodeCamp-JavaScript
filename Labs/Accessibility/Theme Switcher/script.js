const themes = [
    {
        name: "dark",
        message: "Dark mode is on. Switch to light mode for a brighter experience."
    },
    {
        name: "light",
        message: "Light mode is on. Switch to dark mode for a more subdued experience."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcherBtn = document.getElementById("theme-switcher-button");
    const themeDropdown = document.getElementById("theme-dropdown");
    const themeStatus = document.getElementById("status");

    themeSwitcherBtn.addEventListener("click", () => {
        const isOpened = !themeDropdown.hasAttribute("hidden");

        if (isOpened) {
            themeDropdown.setAttribute("hidden", "");
            themeSwitcherBtn.setAttribute("aria-expanded", "false");
        } else {
            themeDropdown.removeAttribute("hidden");
            themeSwitcherBtn.setAttribute("aria-expanded", "true");
        }
    });

    themeDropdown.addEventListener("click", (event) => {
        const targetId = event.target.id; // Ejemplo: "theme-dark"
        const selectedThemeName = targetId.replace("theme-", ""); // Resultado: "dark"
        
        const selectedTheme = themes.find(t => t.name === selectedThemeName);
        
        if (selectedTheme) {
            document.body.className = "";
            document.body.classList.add(targetId);
            
            themeStatus.textContent = selectedTheme.message;
            
            themeDropdown.setAttribute("hidden", "");
            themeSwitcherBtn.setAttribute("aria-expanded", "false");
        }
    });
});