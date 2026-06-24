const intro = document.querySelector(".site-intro");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (intro) {
  const introLogo = intro.querySelector(".intro-logo-mark");
  const navLogo = document.querySelector(".wordmark");
  let introFinished = false;

  const setIntroLogoTarget = () => {
    if (!introLogo || !navLogo) return null;

    const introBox = introLogo.getBoundingClientRect();
    const navBox = navLogo.getBoundingClientRect();
    const introCenterX = introBox.left + introBox.width / 2;
    const introCenterY = introBox.top + introBox.height / 2;
    const navCenterX = navBox.left + navBox.width / 2;
    const navCenterY = navBox.top + navBox.height / 2;

    const x = navCenterX - introCenterX;
    const y = navCenterY - introCenterY;
    const scale = navBox.width / introBox.width;

    document.body.style.setProperty("--intro-logo-x", `${x}px`);
    document.body.style.setProperty("--intro-logo-y", `${y}px`);
    document.body.style.setProperty("--intro-logo-scale", scale);

    return { x, y, scale };
  };

  setIntroLogoTarget();
  window.addEventListener("resize", setIntroLogoTarget, { passive: true });

  const finishIntro = () => {
    if (introFinished) return;
    introFinished = true;
    if (introLogo) {
      introLogo.style.opacity = "0";
      introLogo.style.visibility = "hidden";
    }
    intro.style.display = "none";
    intro.style.visibility = "hidden";
    intro.style.opacity = "0";
    const navLogoImage = document.querySelector(".wordmark img");
    if (navLogoImage) {
      navLogoImage.style.removeProperty("opacity");
    }
    document.body.classList.remove("intro-active");
    document.body.classList.remove("intro-exiting");
    document.body.classList.add("intro-done");
  };

  window.setTimeout(() => {
    const target = setIntroLogoTarget();
    document.body.classList.add("intro-exiting");

    if (reduceMotion || !target || !introLogo) {
      finishIntro();
      return;
    }

    const duration = 1200;
    const startedAt = performance.now();
    const easeFlight = (progress) => 1 - Math.pow(1 - progress, 3);

    const flyLogo = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = easeFlight(progress);
      const scale = 1 + (target.scale - 1) * eased;

      introLogo.style.transform = `translate(${target.x * eased}px, ${target.y * eased}px) scale(${scale})`;
      introLogo.style.opacity = 1;

      if (progress < 1) {
        window.requestAnimationFrame(flyLogo);
      } else {
        finishIntro();
      }
    };

    window.requestAnimationFrame(flyLogo);
    window.setTimeout(finishIntro, duration + 180);
  }, reduceMotion ? 50 : 2000);
}

if (!reduceMotion) {
  let ticking = false;

  const setMotionScroll = () => {
    document.body.style.setProperty("--scroll-y", Math.min(window.scrollY, 700));
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(setMotionScroll);
      ticking = true;
    }
  }, { passive: true });

  setMotionScroll();
}

const cursor = document.querySelector(".cursor-dot");
const hoverTargets = document.querySelectorAll("a, button, .project");

window.addEventListener("pointermove", (event) => {
  cursor.style.transform = `translate(${event.clientX - 6}px, ${event.clientY - 6}px)`;
});

hoverTargets.forEach((target) => {
  target.addEventListener("pointerenter", () => cursor.classList.add("hovered"));
  target.addEventListener("pointerleave", () => cursor.classList.remove("hovered"));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".magnetic").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const box = element.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;
    element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  element.addEventListener("pointerleave", () => {
    element.style.transform = "translate(0, 0)";
  });
});

document.querySelectorAll("[data-href]").forEach((element) => {
  element.setAttribute("tabindex", "0");
  element.setAttribute("role", "link");
  const open = () => (window.location.href = element.dataset.href);
  element.addEventListener("click", open);
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") open();
  });
});
