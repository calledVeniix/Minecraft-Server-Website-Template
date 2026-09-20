/* ==========================================================================================
   MAIN - builds the page from your config.js and drives every animation.
   ------------------------------------------------------------------------------------------
   You do NOT need to edit this file. Everything you can change lives in "assets/js/config.js".
   ========================================================================================== */

(function () {
  "use strict";

  const C = window.CONFIG || {};
  const ICONS = window.MCIcons;
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FX = Object.assign(
    { particles: true, cursorGlow: true, scrollProgress: true, tiltCards: true, scrollReveal: true },
    C.effects || {}
  );

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* Only allow safe links (http, https, mailto, # and relative paths) */
  const safeUrl = (u) => {
    const v = String(u == null ? "" : u).trim();
    return /^(https?:|mailto:|#|\/|\.\/|[\w\-./]+$)/i.test(v) ? v : "#";
  };

  const iconMarkup = (name, size) => {
    if (!name) return "";
    const out = ICONS ? ICONS.get(name, { size: size || 34 }) : esc(name);
    return out.charAt(0) === "<" ? out : '<span class="emoji">' + out + "</span>";
  };

  /* ========================================================================================
     1. APPLY COLORS AND META DATA FROM THE CONFIG
     ====================================================================================== */
  function applyBranding() {
    const b = C.branding || {};
    const col = b.colors || {};
    const root = document.documentElement.style;

    if (col.primary)    root.setProperty("--c-primary", col.primary);
    if (col.secondary)  root.setProperty("--c-secondary", col.secondary);
    if (col.accent)     root.setProperty("--c-accent", col.accent);
    if (col.background) root.setProperty("--c-bg", col.background);

    /* #2b6bff -> "43, 107, 255"  (needed for semi transparent effects) */
    if (col.primary) {
      let h = col.primary.replace("#", "");
      if (h.length === 3) h = h.split("").map((x) => x + x).join("");
      const n = parseInt(h, 16);
      if (!isNaN(n)) root.setProperty("--c-primary-rgb", [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(", "));
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", col.primary);
    }

    if (b.auroraGlow === false) $$(".aurora").forEach((el) => el.remove());

    const s = C.server || {};
    const full = [s.name, s.nameAccent].filter(Boolean).join(" ");
    document.title = full + (s.tagline ? " — " + s.tagline : " — Minecraft Server");

    const setMeta = (sel, val) => { const el = $(sel); if (el && val) el.setAttribute("content", val); };
    setMeta('meta[name="description"]', s.description);
    setMeta('meta[property="og:title"]', document.title);
    setMeta('meta[property="og:description"]', s.description);
    setMeta('meta[property="og:image"]', b.ogImage);
    setMeta('meta[name="twitter:image"]', b.ogImage);

    if (b.logo) {
      $$("[data-logo]").forEach((img) => { img.src = b.logo; img.alt = full + " Logo"; });
    }
    if (b.logoFooter) { const f = $("[data-logo-footer]"); if (f) f.src = b.logoFooter; }
  }

  /* ========================================================================================
     2. RENDER THE CONTENT
     ====================================================================================== */
  function renderAnnouncement() {
    const a = C.announcement || {};
    const box = $("#announce");
    if (!box) return;
    if (!a.enabled || !a.text) { box.remove(); return; }
    box.innerHTML =
      "<span>" + esc(a.text) + "</span>" +
      (a.linkLabel && a.linkUrl ? ' <a href="' + safeUrl(a.linkUrl) + '">' + esc(a.linkLabel) + " →</a>" : "") +
      '<button class="announce__close" aria-label="Close banner">&times;</button>';
    $(".announce__close", box).addEventListener("click", () => {
      box.style.height = box.offsetHeight + "px";
      requestAnimationFrame(() => {
        box.style.cssText += "height:0;padding:0;opacity:0;overflow:hidden;transition:.4s cubic-bezier(.22,1,.36,1)";
      });
      setTimeout(() => box.remove(), 420);
    });
  }

  function renderBrand() {
    const s = C.server || {};
    $$("[data-brand-name]").forEach((el) => {
      el.innerHTML = esc(s.name || "") + (s.nameAccent ? "<span>" + esc(s.nameAccent) + "</span>" : "");
    });

    const nav = $("#navLinks");
    const mob = $("#mobileMenu");
    const items = C.navigation || [];
    if (nav) nav.innerHTML = items.map((i) => '<a class="nav__link" href="' + safeUrl(i.href) + '">' + esc(i.label) + "</a>").join("");
    if (mob) {
      mob.innerHTML =
        items.map((i, n) => '<a href="' + safeUrl(i.href) + '" style="animation-delay:' + (n * 60 + 90) + 'ms">' + esc(i.label) + "</a>").join("") +
        (C.navButton && C.navButton.url
          ? '<a class="btn btn--primary" style="margin-top:18px;animation-delay:' + (items.length * 60 + 120) + 'ms" href="' +
            safeUrl(C.navButton.url) + '" target="_blank" rel="noopener">' + esc(C.navButton.label) + "</a>"
          : "");
    }

    const nb = $("#navBtn");
    if (nb) {
      if (C.navButton && C.navButton.url) {
        nb.href = safeUrl(C.navButton.url);
        nb.textContent = C.navButton.label || "Discord";
        nb.target = "_blank";
        nb.rel = "noopener";
      } else nb.remove();
    }
  }

  function renderHero() {
    const s = C.server || {};
    const h = C.hero || {};

    const badge = $("#heroBadge");
    if (badge) {
      if (h.badge) badge.innerHTML = '<span class="dot"></span>' + esc(h.badge);
      else badge.remove();
    }

    const title = $("#heroTitle");
    if (title) title.innerHTML = esc(s.name || "") + (s.nameAccent ? "<span>" + esc(s.nameAccent) + "</span>" : "");

    const tag = $("#heroTagline");
    if (tag) {
      if (!s.tagline) tag.remove();
      else if (h.typewriter && !reduceMotion) typewriter(tag, s.tagline);
      else tag.textContent = s.tagline;
    }

    const text = $("#heroText");
    if (text) text.textContent = s.description || "";

    /* Buttons */
    const act = $("#heroActions");
    if (act) {
      const mk = (btn, cls) => {
        if (!btn || !btn.label) return "";
        if (btn.action === "copy-ip")
          return '<button class="btn ' + cls + '" data-copy-ip>' + esc(btn.label) + "</button>";
        return '<a class="btn ' + cls + '" href="' + safeUrl(btn.url) + '" target="_blank" rel="noopener">' + esc(btn.label) + "</a>";
      };
      act.innerHTML = mk(h.primaryButton, "btn--primary") + mk(h.secondaryButton, "btn--ghost");
    }

    /* IP-Box */
    const java = $("#ipJava");
    if (java) java.textContent = s.javaIp || "—";
    const bed = $("#ipBedrockRow");
    if (bed) {
      if (s.bedrockIp) $("#ipBedrock").textContent = s.bedrockIp + (s.bedrockPort ? " : " + s.bedrockPort : "");
      else bed.remove();
    }
    $$("[data-copy-target]").forEach((btn) => {
      btn.addEventListener("click", () => copyText(btn.dataset.copyTarget === "bedrock" ? (s.bedrockIp || "") : (s.javaIp || ""), btn));
    });
  }

  function renderStats() {
    const grid = $("#statsGrid");
    if (!grid) return;
    const list = C.stats || [];
    if (!list.length) { const sec = grid.closest("section"); if (sec) sec.remove(); return; }
    grid.innerHTML = list
      .map(
        (s, i) =>
          '<div class="stat glass glass--live" data-reveal="zoom" style="--delay:' + i * 90 + 'ms">' +
          '<div class="stat__value" data-count="' + Number(s.value || 0) + '" data-suffix="' + esc(s.suffix || "") + '">0</div>' +
          '<div class="stat__label">' + esc(s.label) + "</div></div>"
      )
      .join("");
  }

  function cardMarkup(item, i) {
    return (
      '<article class="card glass glass--live" data-reveal data-tilt style="--delay:' + i * 90 + 'ms">' +
      (item.tag ? '<span class="card__tag">' + esc(item.tag) + "</span>" : "") +
      '<div class="card__icon">' + iconMarkup(item.icon) + "</div>" +
      '<h3 class="card__title">' + esc(item.title) + "</h3>" +
      '<p class="card__text">' + esc(item.text) + "</p>" +
      (item.link ? '<a class="card__link" href="' + safeUrl(item.link) + '" target="_blank" rel="noopener">Learn more &rarr;</a>' : "") +
      "</article>"
    );
  }

  function renderSections() {
    const setText = (sel, val) => { const el = $(sel); if (el && val != null) el.textContent = val; };

    setText("#modesTitle", C.gamemodesTitle);
    setText("#modesSub", C.gamemodesSubtitle);
    const modes = $("#modesGrid");
    if (modes) modes.innerHTML = (C.gamemodes || []).map(cardMarkup).join("");

    setText("#featuresTitle", C.featuresTitle);
    setText("#featuresSub", C.featuresSubtitle);
    const feats = $("#featuresGrid");
    if (feats) feats.innerHTML = (C.features || []).map(cardMarkup).join("");

    setText("#joinTitle", C.joinTitle);
    const steps = $("#stepsGrid");
    if (steps)
      steps.innerHTML = (C.joinSteps || [])
        .map((s, i) =>
          '<div class="step glass glass--live" data-reveal style="--delay:' + i * 120 + 'ms">' +
          "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>"
        )
        .join("");

    setText("#faqTitle", C.faqTitle);
    setText("#faqSub", C.faqSubtitle);
    const faq = $("#faqList");
    if (faq)
      faq.innerHTML = (C.faq || [])
        .map((f, i) =>
          '<div class="faq-item glass" data-reveal style="--delay:' + i * 70 + 'ms">' +
          '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
          "<span>" + esc(f.q) + '</span><span class="faq-icon"></span></button>' +
          '<div class="faq-a" id="faq-a-' + i + '"><p>' + esc(f.a) + "</p></div></div>"
        )
        .join("");

    /* CTA */
    const cta = C.cta || {};
    const box = $("#ctaBox");
    if (box) {
      if (cta.enabled === false) { const sec = box.closest("section"); if (sec) sec.remove(); }
      else {
        const btn =
          cta.buttonAction === "copy-ip"
            ? '<button class="btn btn--primary" data-copy-ip>' + esc(cta.buttonLabel || "Copy IP") + "</button>"
            : '<a class="btn btn--primary" href="' + safeUrl(cta.buttonAction) + '" target="_blank" rel="noopener">' + esc(cta.buttonLabel || "Join") + "</a>";
        box.innerHTML = "<h2>" + esc(cta.title || "") + "</h2><p>" + esc(cta.text || "") + "</p>" + btn;
      }
    }
  }

  function renderFooter() {
    const f = C.footer || {};
    const about = $("#footerAbout");
    if (about) about.textContent = f.about || "";

    const cols = $("#footerCols");
    if (cols)
      cols.innerHTML = (f.columns || [])
        .map(
          (c) =>
            "<div><h4>" + esc(c.title) + '</h4><ul class="footer__links">' +
            (c.links || []).map((l) => '<li><a href="' + safeUrl(l.url) + '">' + esc(l.label) + "</a></li>").join("") +
            "</ul></div>"
        )
        .join("");

    const soc = $("#socials");
    if (soc)
      soc.innerHTML = (C.socials || [])
        .map(
          (s) =>
            '<a class="social" href="' + safeUrl(s.url) + '" target="_blank" rel="noopener" title="' + esc(s.label) +
            '" aria-label="' + esc(s.label) + '">' + (ICONS ? ICONS.social(s.icon, { size: 20 }) : "") + "</a>"
        )
        .join("");

    const cr = $("#copyright");
    if (cr) {
      const name = [(C.server || {}).name, (C.server || {}).nameAccent].filter(Boolean).join("");
      cr.textContent = "© " + new Date().getFullYear() + " " + name + ". " + (f.copyright || "");
    }
  }

  /* ========================================================================================
     3. INTERACTIONS
     ====================================================================================== */
  function typewriter(el, text) {
    el.textContent = "";
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.innerHTML = "&nbsp;";
    el.appendChild(caret);
    let i = 0;
    const tick = () => {
      if (i <= text.length) {
        caret.insertAdjacentText("beforebegin", text.charAt(i - 1) || "");
        i++;
        setTimeout(tick, 42 + Math.random() * 45);
      }
    };
    setTimeout(tick, 650);
  }

  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("is-on"), 2400);
  }

  function copyText(value, btn) {
    if (!value) return;
    const done = () => {
      toast("Copied: " + value);
      if (!btn) return;
      const label = btn.innerHTML;
      btn.classList.add("is-done");
      btn.innerHTML = "Copied!";
      setTimeout(() => { btn.classList.remove("is-done"); btn.innerHTML = label; }, 1800);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(done).catch(() => fallbackCopy(value, done));
    } else fallbackCopy(value, done);
  }

  function fallbackCopy(value, done) {
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { toast("IP: " + value); }
    document.body.removeChild(ta);
  }

  function initCopyButtons() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-copy-ip]");
      if (btn) copyText((C.server || {}).javaIp || "", btn);
    });
  }

  function initNav() {
    const nav = $("#nav");
    const burger = $("#burger");
    const menu = $("#mobileMenu");

    const onScroll = () => {
      if (nav) nav.classList.toggle("is-stuck", window.scrollY > 24);
      const top = $("#toTop");
      if (top) top.classList.toggle("is-on", window.scrollY > 600);
      if (FX.scrollProgress) {
        const bar = $("#progress");
        if (bar) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
        }
      }
      /* highlight the menu item of the current section */
      let current = "";
      $$("section[id]").forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 140) current = "#" + sec.id;
      });
      $$(".nav__link").forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === current));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (burger && menu) {
      const toggle = (open) => {
        burger.classList.toggle("is-open", open);
        menu.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      };
      burger.addEventListener("click", () => toggle(!menu.classList.contains("is-open")));
      menu.addEventListener("click", (e) => { if (e.target.tagName === "A") toggle(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });
    }

    const top = $("#toTop");
    if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  function initFaq() {
    document.addEventListener("click", (e) => {
      const q = e.target.closest(".faq-q");
      if (!q) return;
      const item = q.parentElement;
      const answer = q.nextElementSibling;
      const open = item.classList.contains("is-open");

      $$(".faq-item.is-open").forEach((other) => {
        if (other === item) return;
        other.classList.remove("is-open");
        other.querySelector(".faq-a").style.height = "0px";
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });

      item.classList.toggle("is-open", !open);
      q.setAttribute("aria-expanded", open ? "false" : "true");
      answer.style.height = open ? "0px" : answer.scrollHeight + "px";
    });
    window.addEventListener("resize", () => {
      $$(".faq-item.is-open .faq-a").forEach((a) => { a.style.height = a.scrollHeight + "px"; });
    });
  }

  function initReveal() {
    const items = $$("[data-reveal]");
    if (!FX.scrollReveal || reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      startCounters(document);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("is-in");
          startCounters(en.target);
          io.unobserve(en.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px" }
    );
    items.forEach((el) => io.observe(el));
  }

  function startCounters(scope) {
    $$("[data-count]", scope).forEach((el) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const target = Number(el.dataset.count) || 0;
      const suffix = el.dataset.suffix || "";
      if (reduceMotion) { el.textContent = target.toLocaleString("en-US") + suffix; return; }
      const dur = 1700;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* Cards tilt in 3D and the glass reflection follows the mouse */
  function initTilt() {
    const pointerFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!pointerFine || reduceMotion) return;

    $$(".glass--live").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.setProperty("--mx", x + "px");
        el.style.setProperty("--my", y + "px");
        if (FX.tiltCards && el.hasAttribute("data-tilt")) {
          const rx = ((y / r.height) - 0.5) * -7;
          const ry = ((x / r.width) - 0.5) * 7;
          el.style.transform = "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-6px)";
        }
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  function initCursorGlow() {
    if (!FX.cursorGlow || reduceMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const glow = $("#cursorGlow");
    if (!glow) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, cx = x, cy = y;
    window.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; glow.classList.add("is-on"); });
    (function loop() {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      glow.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";
      requestAnimationFrame(loop);
    })();
  }

  function initRipple() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn");
      if (!btn || reduceMotion) return;
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const span = document.createElement("span");
      span.className = "ripple";
      span.style.cssText =
        "width:" + size + "px;height:" + size + "px;left:" + (e.clientX - r.left - size / 2) +
        "px;top:" + (e.clientY - r.top - size / 2) + "px";
      btn.appendChild(span);
      setTimeout(() => span.remove(), 650);
    });
  }

  /* Floating pixel blocks in the background */
  function initParticles() {
    const cv = $("#particles");
    if (!cv || !FX.particles || reduceMotion) { if (cv) cv.remove(); return; }
    const ctx = cv.getContext("2d");
    let w, h, blocks = [], raf = null;
    const colors = () => {
      const st = getComputedStyle(document.documentElement);
      return [st.getPropertyValue("--c-primary").trim(), st.getPropertyValue("--c-secondary").trim(), st.getPropertyValue("--c-accent").trim()];
    };
    let palette = colors();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.width = window.innerWidth * dpr;
      h = cv.height = window.innerHeight * dpr;
      cv.style.width = window.innerWidth + "px";
      cv.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = window.innerWidth < 700 ? 14 : 30;
      blocks = Array.from({ length: count }, spawn);
    }
    function spawn() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight + window.innerHeight * 0.15,
        s: 5 + Math.random() * 16,
        vy: 0.12 + Math.random() * 0.42,
        vx: (Math.random() - 0.5) * 0.22,
        a: Math.random() * Math.PI,
        va: (Math.random() - 0.5) * 0.012,
        o: 0.07 + Math.random() * 0.2,
        c: palette[Math.floor(Math.random() * palette.length)],
      };
    }
    function frame() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      blocks.forEach((b) => {
        b.y -= b.vy; b.x += b.vx; b.a += b.va;
        if (b.y + b.s < -20) { Object.assign(b, spawn(), { y: window.innerHeight + 30 }); }
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.a);
        ctx.globalAlpha = b.o;
        ctx.fillStyle = b.c;
        ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s);
        ctx.globalAlpha = b.o * 1.8;
        ctx.strokeStyle = b.c;
        ctx.lineWidth = 1;
        ctx.strokeRect(-b.s / 2, -b.s / 2, b.s, b.s);
        ctx.restore();
      });
      raf = requestAnimationFrame(frame);
    }
    resize();
    frame();
    window.addEventListener("resize", () => { palette = colors(); resize(); });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) frame();
    });
  }

  /* Subtle parallax for the logo and the background lights */
  function initParallax() {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const logo = $("#heroLogoWrap");
    window.addEventListener("mousemove", (e) => {
      const dx = (e.clientX / window.innerWidth - 0.5);
      const dy = (e.clientY / window.innerHeight - 0.5);
      if (logo) logo.style.transform = "rotateY(" + dx * 16 + "deg) rotateX(" + -dy * 14 + "deg) translateZ(30px)";
      $$(".aurora").forEach((a, i) => {
        const f = (i + 1) * 12;
        a.style.marginLeft = dx * f + "px";
        a.style.marginTop = dy * f + "px";
      });
    });
  }

  /* ========================================================================================
     4. BOOT
     ====================================================================================== */
  function init() {
    if (!window.CONFIG) {
      console.error("config.js was not loaded or contains a syntax error.");
    }
    applyBranding();
    renderAnnouncement();
    renderBrand();
    renderHero();
    renderStats();
    renderSections();
    renderFooter();

    initNav();
    initFaq();
    initCopyButtons();
    initReveal();
    initTilt();
    initCursorGlow();
    initRipple();
    initParticles();
    initParallax();

    if (window.MCStatus) window.MCStatus.init(C);

    document.body.classList.add("is-ready");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
