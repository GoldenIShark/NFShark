const CONFIG = {
  whatsappNumber: "6289630984238",
  packagesPath: "./data/packages.json",
};

const defaultWhatsappMessage =
  "Halo NFShark, saya tertarik dengan proposal website dan ingin mendiskusikan project saya.";

function createWhatsappUrl(message = defaultWhatsappMessage) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function setWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const message = link.getAttribute("data-whatsapp");
    if (message) {
      link.setAttribute("href", createWhatsappUrl(message));
    }
  });
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");

  if (!toggle || !navigation) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka navigasi");
    navigation.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Buka navigasi" : "Tutup navigasi");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      event.target instanceof Node &&
      !navigation.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 761px)");
  desktopQuery.addEventListener("change", closeMenu);
}

function initScrollEffects() {
  const header = document.querySelector(".site-header");
  const readingProgress = document.querySelector(".reading-progress span");
  const timeline = document.querySelector(".timeline");
  let frameRequested = false;

  const update = () => {
    frameRequested = false;

    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 14);
    }

    if (readingProgress) {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      readingProgress.style.width = `${Math.round(progress * 100)}%`;
    }

    if (timeline) {
      const bounds = timeline.getBoundingClientRect();
      const visibleDistance = window.innerHeight - bounds.top;
      const trackDistance = bounds.height + window.innerHeight * 0.3;
      const progress =
        trackDistance > 0
          ? Math.max(0, Math.min(visibleDistance / trackDistance, 1))
          : 0;
      timeline.style.setProperty(
        "--timeline-progress",
        `${Math.round(progress * 100)}%`,
      );
    }
  };

  const requestUpdate = () => {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();

  const navLinks = document.querySelectorAll(
    '.site-nav a[href^="#"]:not(.nav-cta)',
  );
  const navSections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section instanceof HTMLElement);

  if ("IntersectionObserver" in window && navSections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const activeLink = document.querySelector(
            `.site-nav a[href="#${CSS.escape(entry.target.id)}"]`,
          );

          navLinks.forEach((link) => link.removeAttribute("aria-current"));
          activeLink?.setAttribute("aria-current", "location");
        });
      },
      { rootMargin: "-28% 0px -62% 0px" },
    );

    navSections.forEach((section) => sectionObserver.observe(section));
  }
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length === 0) return;

  document.documentElement.classList.add("has-reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    revealObserver.observe(item);
  });
}

function createFeatureList(features) {
  const list = document.createElement("ul");
  list.className = "package-features";

  features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    list.append(item);
  });

  return list;
}

function createPackageCard(packageInfo) {
  const article = document.createElement("article");
  article.className = `package-card${packageInfo.featured ? " is-featured" : ""} reveal`;

  const badge = document.createElement("span");
  badge.className = "package-badge";
  badge.textContent = packageInfo.badge || packageInfo.name;

  const name = document.createElement("h3");
  name.textContent = packageInfo.name;

  const price = document.createElement("p");
  price.className = "package-price";
  price.textContent = packageInfo.price;

  const estimate = document.createElement("p");
  estimate.className = "package-estimate";
  estimate.textContent = packageInfo.estimate;

  const link = document.createElement("a");
  link.className = "package-link";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.href = createWhatsappUrl(
    `${defaultWhatsappMessage} Saya ingin bertanya tentang Paket ${packageInfo.name}.`,
  );

  const linkText = document.createElement("span");
  linkText.textContent = packageInfo.button || "Tanyakan paket";

  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";

  link.append(linkText, arrow);
  article.append(badge, name, price, estimate, createFeatureList(packageInfo.features));

  if (packageInfo.customNote) {
    const note = document.createElement("p");
    note.className = "package-note";
    note.textContent = packageInfo.customNote;
    article.append(note);
  }

  article.append(link);
  return article;
}

function isValidPackage(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    "name" in value &&
    typeof value.name === "string" &&
    "price" in value &&
    typeof value.price === "string" &&
    "estimate" in value &&
    typeof value.estimate === "string" &&
    "features" in value &&
    Array.isArray(value.features) &&
    value.features.every((feature) => typeof feature === "string")
  );
}

async function loadPackages() {
  const packageList = document.querySelector("#package-list");
  if (!packageList) return;

  try {
    const response = await fetch(CONFIG.packagesPath);
    if (!response.ok) {
      throw new Error(`Paket gagal dimuat (HTTP ${response.status}).`);
    }

    const packages = await response.json();
    if (!Array.isArray(packages) || !packages.every(isValidPackage)) {
      throw new Error("Format data paket tidak sesuai.");
    }

    packageList.replaceChildren(
      ...packages.map((packageInfo) => createPackageCard(packageInfo)),
    );
    packageList.setAttribute("aria-busy", "false");

    const newCards = packageList.querySelectorAll(".reveal");
    if (document.documentElement.classList.contains("has-reveal")) {
      if ("IntersectionObserver" in window) {
        const cardObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.12 },
        );

        newCards.forEach((card) => cardObserver.observe(card));
      } else {
        newCards.forEach((card) => card.classList.add("is-visible"));
      }
    }
  } catch (error) {
    packageList.setAttribute("aria-busy", "false");
    const status = document.createElement("p");
    status.className = "package-status";
    status.dataset.error = "true";
    status.setAttribute("role", "status");
    status.textContent =
      error instanceof Error
        ? `${error.message} Buka proposal melalui static hosting atau server lokal, lalu coba muat ulang.`
        : "Informasi paket tidak dapat dimuat. Buka proposal melalui static hosting atau server lokal, lalu coba muat ulang.";
    packageList.replaceChildren(status);
    console.error("Gagal memuat data paket proposal.", error);
  }
}

function dismissLoader() {
  const loader = document.querySelector(".loading-screen");
  if (!loader) return;

  window.setTimeout(() => {
    loader.classList.add("is-dismissed");
    loader.setAttribute("aria-hidden", "true");
    loader.hidden = true;
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 80 : 480);
}

function initProposal() {
  setWhatsappLinks();
  initNavigation();
  initScrollEffects();
  initRevealAnimations();
  dismissLoader();
  loadPackages();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProposal, { once: true });
} else {
  initProposal();
}
