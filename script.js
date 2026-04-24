import {
    availability,
    contact,
    education,
    experience,
    hero,
    intro,
    message,
    navigation,
    now,
    principles,
    profile,
    projects,
    stackGroups,
    stats,
    tickerItems,
} from "./data.js";
import { arabicContent, uiByLanguage } from "./translations.js";
import {
    renderAvailability,
    renderButtons,
    renderBulletList,
    renderContactPills,
    renderEducation,
    renderExperience,
    renderNav,
    renderPrinciples,
    renderProjects,
    renderSocialLinks,
    renderStackGroups,
    renderStats,
    renderTicker,
} from "./components.js";

const themeStorageKey = "portfolio-theme";
const languageStorageKey = "portfolio-language";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const orbitalScene = [
    { size: 320, top: "8%", left: "-6%", color: "rgba(255, 159, 28, 0.34)", duration: "18s", parallax: 0.2, driftX: -10, driftY: 0, scale: 1.1 },
    { size: 260, top: "18%", right: "4%", color: "rgba(46, 196, 182, 0.28)", duration: "22s", parallax: 0.14, driftX: 20, driftY: -10, scale: 0.9 },
    { size: 220, top: "52%", left: "8%", color: "rgba(123, 223, 242, 0.24)", duration: "20s", parallax: 0.1, driftX: 0, driftY: 10, scale: 0.95 },
    { size: 280, top: "64%", right: "-4%", color: "rgba(255, 191, 105, 0.22)", duration: "26s", parallax: 0.16, driftX: -16, driftY: 14, scale: 1.05 },
];

function canUseHeroTilt() {
    return !prefersReducedMotion
        && window.innerWidth > 1024
        && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function getLanguage() {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    if (savedLanguage === "ar" || savedLanguage === "en") {
        return savedLanguage;
    }

    return document.documentElement.lang === "ar" ? "ar" : "en";
}

function getLocaleBundle(language) {
    if (language === "ar") {
        return {
            ui: uiByLanguage.ar,
            navigation: arabicContent.navigation,
            hero: arabicContent.hero,
            intro: arabicContent.intro,
            profile: { ...profile, ...arabicContent.profile },
            message: arabicContent.message,
            stats: arabicContent.stats,
            principles: arabicContent.principles,
            experience: arabicContent.experience,
            education: arabicContent.education,
            projects: arabicContent.projects,
            stackGroups: arabicContent.stackGroups,
            now: arabicContent.now,
            availability: arabicContent.availability,
            contact: arabicContent.contact,
        };
    }

    return {
        ui: uiByLanguage.en,
        navigation,
        hero,
        intro,
        profile,
        message,
        stats,
        principles,
        experience,
        education,
        projects,
        stackGroups,
        now,
        availability,
        contact,
    };
}

function applyStaticCopy(copy) {
    setText(".skip-link", copy.skipLink);
    setText(".brand-text span", copy.brandRole);
    setText("[data-copy='hero-eyebrow']", copy.heroEyebrow);
    setText("#hero-title", copy.heroTitle);
    setText("[data-copy='intro-label']", copy.introLabel);
    setText("[data-copy='links-eyebrow']", copy.linksEyebrow);
    setText("[data-copy='links-title']", copy.linksTitle);
    setText("[data-copy='about-eyebrow']", copy.aboutEyebrow);
    setText("#about-title", copy.aboutTitle);
    setText("[data-copy='message-label']", copy.messageLabel);
    setText("[data-copy='experience-eyebrow']", copy.experienceEyebrow);
    setText("#experience-title", copy.experienceTitle);
    setText("[data-copy='experience-copy']", copy.experienceCopy);
    setText("[data-copy='education-eyebrow']", copy.educationEyebrow);
    setText("#education-title", copy.educationTitle);
    setText("[data-copy='education-copy']", copy.educationCopy);
    setText("[data-copy='projects-eyebrow']", copy.projectsEyebrow);
    setText("#projects-title", copy.projectsTitle);
    setText("[data-copy='projects-copy']", copy.projectsCopy);
    setText("[data-copy='stack-eyebrow']", copy.stackEyebrow);
    setText("#stack-title", copy.stackTitle);
    setText("[data-copy='stack-copy']", copy.stackCopy);
    setText("[data-copy='now-eyebrow']", copy.nowEyebrow);
    setText("#now-title", copy.nowTitle);
    setText("[data-copy='priorities-label']", copy.prioritiesLabel);
    setText("[data-copy='availability-label']", copy.availabilityLabel);
    setText("[data-copy='contact-eyebrow']", copy.contactEyebrow);
    setText("#contact-title", copy.contactTitle);
    setText("[data-copy='footer-copy']", copy.footerCopy);
}

function setLanguage(language) {
    const locale = getLocaleBundle(language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dataset.language = language;
    document.title = locale.ui.siteTitle;

    document.querySelector('meta[name="description"]')?.setAttribute("content", locale.ui.siteDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", locale.ui.siteTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", locale.ui.ogDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", locale.ui.siteTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", locale.ui.twitterDescription);

    document.querySelector(".brand")?.setAttribute("aria-label", locale.ui.brandHomeLabel);
    document.querySelector(".site-nav")?.setAttribute("aria-label", locale.ui.navAriaLabel);
    document.querySelector(".ticker")?.setAttribute("aria-label", locale.ui.tickerAriaLabel);

    applyStaticCopy(locale.ui);
    setText("#hero-summary", locale.hero.summary);
    setText("#intro-title", locale.intro.title);
    setText("#intro-copy", locale.intro.copy);
    setText("#about-copy", locale.profile.about);
    setText("#message-copy", locale.message.copy);
    setText("#now-copy", locale.now.copy);
    setText("#contact-copy", locale.contact.copy);
    setText("#year", String(new Date().getFullYear()));

    const navList = document.querySelector("#nav-list");
    const heroActions = document.querySelector("#hero-actions");
    const socialLinks = document.querySelector("#social-links");
    const heroMeta = document.querySelector("#hero-meta");
    const statsGrid = document.querySelector("#stats-grid");
    const principlesGrid = document.querySelector("#principles-grid");
    const experienceGrid = document.querySelector("#experience-grid");
    const educationGrid = document.querySelector("#education-grid");
    const projectsGrid = document.querySelector("#projects-grid");
    const stackGrid = document.querySelector("#stack-grid");
    const nowList = document.querySelector("#now-list");
    const availabilityList = document.querySelector("#availability-list");
    const tickerTrack = document.querySelector("#ticker-track");
    const contactActions = document.querySelector("#contact-actions");

    if (navList) navList.innerHTML = renderNav(locale.navigation);
    if (heroActions) heroActions.innerHTML = renderButtons(locale.hero.actions);
    if (socialLinks) socialLinks.innerHTML = renderSocialLinks(locale.profile.socials);
    if (heroMeta) heroMeta.innerHTML = renderStats(locale.stats);
    if (statsGrid) statsGrid.innerHTML = renderStats(locale.stats);
    if (principlesGrid) principlesGrid.innerHTML = renderPrinciples(locale.principles);
    if (experienceGrid) experienceGrid.innerHTML = renderExperience(locale.experience);
    if (educationGrid) educationGrid.innerHTML = renderEducation(locale.education);
    if (projectsGrid) {
        projectsGrid.innerHTML = renderProjects(locale.projects, {
            livePreview: locale.ui.projectLinks.live,
            repository: locale.ui.projectLinks.repo,
        });
    }
    if (stackGrid) stackGrid.innerHTML = renderStackGroups(locale.stackGroups);
    if (nowList) nowList.innerHTML = renderBulletList(locale.now.priorities);
    if (availabilityList) availabilityList.innerHTML = renderAvailability(locale.availability);
    if (tickerTrack) tickerTrack.innerHTML = renderTicker(tickerItems);
    if (contactActions) contactActions.innerHTML = renderContactPills(locale.contact.actions);

    const languageButton = document.querySelector("#language-toggle");
    if (languageButton) {
        languageButton.textContent = language === "ar" ? "🇺🇸" : "🇸🇦";
        languageButton.setAttribute("aria-label", locale.ui.languageToggleLabel);
        languageButton.setAttribute("aria-pressed", String(language === "ar"));
    }

    setTheme(document.body.dataset.theme || "dark");
}

function setTheme(theme) {
    document.body.dataset.theme = theme;

    const button = document.querySelector("#theme-toggle");
    const buttonIcon = button?.querySelector(".theme-toggle-icon");
    const language = getLanguage();
    const uiCopy = uiByLanguage[language];
    if (button) {
        const isLight = theme === "light";
        button.setAttribute("aria-pressed", String(isLight));
        button.setAttribute("aria-label", isLight ? uiCopy.themeToggleLabel.dark : uiCopy.themeToggleLabel.light);
        if (buttonIcon) {
            buttonIcon.innerHTML = isLight
                ? '<i class="fa-solid fa-moon"></i>'
                : '<i class="fa-solid fa-sun"></i>';
        }
    }

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute("content", theme === "light" ? "#f6efe4" : "#08111f");
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

    setTheme(savedTheme || systemTheme);

    document.querySelector("#theme-toggle")?.addEventListener("click", () => {
        const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
        localStorage.setItem(themeStorageKey, nextTheme);
        setTheme(nextTheme);
    });
}

function renderPage() {
    setLanguage(getLanguage());
}

function initializeLanguage() {
    const languageButton = document.querySelector("#language-toggle");

    if (!languageButton) {
        return;
    }

    languageButton.addEventListener("click", () => {
        const nextLanguage = getLanguage() === "ar" ? "en" : "ar";
        localStorage.setItem(languageStorageKey, nextLanguage);
        setLanguage(nextLanguage);
    });
}

function initializeReveal() {
    const items = document.querySelectorAll("[data-reveal]");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
}

function initializeKineticScene() {
    document.querySelectorAll("[data-reveal]").forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 560)}ms`);
    });

    document
        .querySelectorAll(".project-card, .experience-card, .education-card, .stack-card, .principle-card, .stat-card")
        .forEach((card, index) => {
            card.style.setProperty("--float-delay", String((index % 6) * 1.35));
        });

    if (prefersReducedMotion) {
        return;
    }

    const existingScene = document.querySelector(".motion-orbs");
    if (!existingScene) {
        const scene = document.createElement("div");
        scene.className = "motion-orbs";
        scene.setAttribute("aria-hidden", "true");
        scene.innerHTML = orbitalScene
            .map((orb) => {
                const horizontal = orb.left ? `left:${orb.left};` : `right:${orb.right};`;
                return `<span class="motion-orb" style="width:${orb.size}px;height:${orb.size}px;top:${orb.top};${horizontal}background:${orb.color};--duration:${orb.duration};--parallax:${orb.parallax};--drift-x:${orb.driftX}px;--drift-y:${orb.driftY}px;--scale:${orb.scale};"></span>`;
            })
            .join("");
        document.body.prepend(scene);
    }

    document.body.addEventListener("pointermove", (event) => {
        const x = ((event.clientX / window.innerWidth) - 0.5) * 36;
        const y = ((event.clientY / window.innerHeight) - 0.5) * 30;
        document.documentElement.style.setProperty("--orb-shift-x", `${x}px`);
        document.documentElement.style.setProperty("--orb-shift-y", `${y}px`);
    }, { passive: true });
}

function initializeSpotlight() {
    document
        .querySelectorAll(".hero-panel, .spotlight-card, .content-card, .project-card, .experience-card, .education-card, .stack-card, .stat-card, .principle-card, .contact-panel")
        .forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty("--pointer-x", `${x}%`);
                card.style.setProperty("--pointer-y", `${y}%`);

                if (card.classList.contains("hero-panel") && canUseHeroTilt()) {
                    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -4;
                    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
                    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });

            card.addEventListener("pointerleave", () => {
                card.style.setProperty("--pointer-x", "20%");
                card.style.setProperty("--pointer-y", "20%");
                if (card.classList.contains("hero-panel")) {
                    card.style.transform = "";
                }
            });
        });
}

function initializeScrollSpy() {
    if (!("IntersectionObserver" in window)) {
        return;
    }

    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-list a")];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {
                    const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
                    if (isCurrent) {
                        link.setAttribute("aria-current", "true");
                    } else {
                        link.removeAttribute("aria-current");
                    }
                });
            });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
}

function initializeServiceWorker() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => { });
    });
}

renderPage();
initializeTheme();
initializeLanguage();
initializeKineticScene();
initializeReveal();
initializeSpotlight();
initializeScrollSpy();
initializeServiceWorker();