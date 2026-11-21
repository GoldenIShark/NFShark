(() => {
  "use strict";

  const cleanAddress = () => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const raw = link.getAttribute("href");
    if (!raw || (!raw.startsWith("#") && !raw.includes("#"))) return;
    const destination = new URL(raw, window.location.href);
    if (destination.origin !== window.location.origin || !destination.hash) return;

    const id = decodeURIComponent(destination.hash.slice(1));
    const target = document.getElementById(id);
    const samePage = destination.pathname.replace(/index\.html$/, "") === window.location.pathname.replace(/index\.html$/, "");
    if (samePage && target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", destination.pathname + destination.search);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cleanAddress, { once: true });
  } else {
    cleanAddress();
  }
})();
