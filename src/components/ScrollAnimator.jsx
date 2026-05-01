import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
  "main section",
  "main article",
  "main form",
  "main table",
  "main iframe",
  "main .card",
  "main .rounded-lg",
  "main .rounded-xl",
  "main .rounded-2xl",
  "main img",
].join(",");

export default function ScrollAnimator() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const root = document.querySelector("main");
    if (!root) return undefined;

    const elements = Array.from(root.querySelectorAll(revealSelector)).filter((element) => {
      if (element.closest("nav")) return false;
      if (element.closest("[data-no-scroll-reveal='true']")) return false;
      return !element.classList.contains("scroll-reveal");
    });

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 35}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
