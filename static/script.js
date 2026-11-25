const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const navigation = document.querySelector(".nav");
const navigationToggle = document.querySelector(".nav-toggle");
const navigationLinks = document.getElementById("primary-navigation");

if (navigation && navigationToggle && navigationLinks) {
    const setNavigationOpen = (isOpen) => {
        navigationLinks.classList.toggle("is-open", isOpen);
        navigationToggle.setAttribute("aria-expanded", String(isOpen));
        navigationToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation",
        );
        navigationToggle.querySelector(".nav-toggle-label").textContent = isOpen
            ? "Close"
            : "Menu";
    };

    navigationToggle.addEventListener("click", () => {
        const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
        setNavigationOpen(!isOpen);
    });

    navigationLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setNavigationOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setNavigationOpen(false);
        }
    });

    document.addEventListener("click", (event) => {
        if (!navigation.contains(event.target)) {
            setNavigationOpen(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            setNavigationOpen(false);
        }
    });
}