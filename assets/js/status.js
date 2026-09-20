/* ==========================================================================================
   LIVE SERVER STATUS - player count, version and MOTD
   ------------------------------------------------------------------------------------------
   You do NOT need to edit this file.
   Set your server IP in "assets/js/config.js" under  server.javaIp.

   Free APIs used here (no account, no API key required):
     1. https://api.mcsrvstat.us   (primary source)
     2. https://api.mcstatus.io    (fallback if the first one does not answer)
   ========================================================================================== */

(function () {
  "use strict";

  const TIMEOUT = 9000;          // give up after 9 seconds
  const CACHE_MS = 45000;        // cache the result for a short while

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* Minecraft color codes */
  const MC_COLORS = {
    "0": "#000000", "1": "#0000aa", "2": "#00aa00", "3": "#00aaaa",
    "4": "#aa0000", "5": "#aa00aa", "6": "#ffaa00", "7": "#aaaaaa",
    "8": "#555555", "9": "#5555ff", a: "#55ff55", b: "#55ffff",
    c: "#ff5555", d: "#ff55ff", e: "#ffff55", f: "#ffffff",
  };

  /* Turns a MOTD with color codes into safe, colored HTML */
  function motdToHtml(lines) {
    const rows = (Array.isArray(lines) ? lines : String(lines || "").split("\n")).slice(0, 3);
    return rows
      .map((line) => {
        let html = "";
        let style = { color: "", bold: false, italic: false, underline: false, strike: false };
        const parts = String(line).split(/§|§/);
        const open = () => {
          const css =
            (style.color ? "color:" + style.color + ";" : "") +
            (style.bold ? "font-weight:700;" : "") +
            (style.italic ? "font-style:italic;" : "") +
            (style.underline || style.strike
              ? "text-decoration:" + (style.underline ? "underline " : "") + (style.strike ? "line-through" : "") + ";"
              : "");
          return css ? '<span style="' + css + '">' : "<span>";
        };
        html += open();
        parts.forEach((part, i) => {
          if (i === 0) { html += esc(part); return; }
          const code = part.charAt(0).toLowerCase();
          const rest = part.slice(1);
          if (MC_COLORS[code]) { style = { color: MC_COLORS[code], bold: false, italic: false, underline: false, strike: false }; }
          else if (code === "l") style.bold = true;
          else if (code === "o") style.italic = true;
          else if (code === "n") style.underline = true;
          else if (code === "m") style.strike = true;
          else if (code === "r") style = { color: "", bold: false, italic: false, underline: false, strike: false };
          html += "</span>" + open() + esc(rest);
        });
        return html + "</span>";
      })
      .join("<br>");
  }

  function fetchJson(url) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), TIMEOUT);
    return fetch(url, { signal: ctrl.signal, headers: { Accept: "application/json" } })
      .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .finally(() => clearTimeout(t));
  }

  /* --- Source 1: mcsrvstat.us --- */
  function fromMcsrvstat(host, bedrock) {
    const url = "https://api.mcsrvstat.us/" + (bedrock ? "bedrock/3/" : "3/") + encodeURIComponent(host);
    return fetchJson(url).then((d) => {
      if (typeof d.online === "undefined") throw new Error("invalid response");
      return {
        online: !!d.online,
        players: (d.players && d.players.online) || 0,
        max: (d.players && d.players.max) || 0,
        version: (d.version && String(d.version)) || "",
        motd: (d.motd && (d.motd.raw || d.motd.clean)) || null,
        host: d.hostname || d.ip || host,
        source: "mcsrvstat.us",
      };
    });
  }

  /* --- Source 2: mcstatus.io --- */
  function fromMcstatus(host, bedrock) {
    const url = "https://api.mcstatus.io/v2/status/" + (bedrock ? "bedrock/" : "java/") + encodeURIComponent(host);
    return fetchJson(url).then((d) => {
      if (typeof d.online === "undefined") throw new Error("invalid response");
      return {
        online: !!d.online,
        players: (d.players && d.players.online) || 0,
        max: (d.players && d.players.max) || 0,
        version: (d.version && (d.version.name_clean || d.version.name || d.version.name_raw)) || "",
        motd: (d.motd && (d.motd.raw || d.motd.clean)) || null,
        host: d.host || host,
        source: "mcstatus.io",
      };
    });
  }

  function load(host, bedrock) {
    return fromMcsrvstat(host, bedrock).catch(() => fromMcstatus(host, bedrock));
  }

  /* ---------------------------------------------------------------------------------------
     Rendering
     ------------------------------------------------------------------------------------- */
  let cfg = {}, timer = null, lastUpdate = 0, tickTimer = null;

  function setLoading(on) {
    $$("[data-st-load]").forEach((el) => el.classList.toggle("is-loading", !!on));
  }

  function animateNumber(el, to) {
    if (!el) return;
    const from = Number(String(el.textContent).replace(/\D/g, "")) || 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || from === to) {
      el.textContent = to.toLocaleString("en-US");
      return;
    }
    const t0 = performance.now(), dur = 900;
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function paint(data) {
    const s = cfg.status || {};
    const dot = $("#stDot");
    const state = $("#stStateText");

    if (dot) dot.classList.toggle("dot--off", !data.online);
    if (state) state.textContent = data.online ? "Server online" : "Server offline";

    $$("[data-live-dot]").forEach((el) => el.classList.toggle("dot--off", !data.online));

    /* Player count */
    animateNumber($("#stPlayers"), data.online ? data.players : 0);
    $$("[data-live-players]").forEach((el) => animateNumber(el, data.online ? data.players : 0));
    const max = $("#stMax");
    if (max) max.textContent = data.max ? "/ " + data.max.toLocaleString("en-US") : "";

    /* Version */
    const versionText = (data.online && data.version) || (cfg.server || {}).versionFallback || "—";
    const ver = $("#stVersion");
    if (ver) ver.textContent = versionText;
    $$("[data-live-version]").forEach((el) => { el.textContent = versionText; });

    /* Capacity bar */
    const bar = $("#stBar");
    if (bar) {
      const pct = data.online && data.max ? Math.min((data.players / data.max) * 100, 100) : 0;
      bar.style.width = Math.max(pct, data.online ? 2 : 0) + "%";
      const legend = $("#stBarText");
      if (legend) legend.textContent = data.online ? Math.round(pct) + "% capacity used" : "No connection";
    }

    /* MOTD */
    const motd = $("#stMotdBox");
    if (motd) {
      const showMotd = s.showMotd !== false && data.online && !!data.motd;
      motd.style.display = showMotd ? "" : "none";
      if (showMotd) $("#stMotd").innerHTML = motdToHtml(data.motd);
    }

    lastUpdate = Date.now();
    tickAgo();
    setLoading(false);
  }

  function paintError() {
    const state = $("#stStateText");
    const dot = $("#stDot");
    if (state) state.textContent = "Status unavailable";
    if (dot) dot.classList.add("dot--off");
    const ver = $("#stVersion");
    if (ver) ver.textContent = (cfg.server || {}).versionFallback || "—";
    const players = $("#stPlayers");
    if (players) players.textContent = "—";
    const legend = $("#stBarText");
    if (legend) legend.textContent = "Server is not responding";
    const motd = $("#stMotdBox");
    if (motd) motd.style.display = "none";
    setLoading(false);
  }

  function refresh(useCache) {
    const host = (cfg.server || {}).javaIp;
    if (!host) return;
    const key = "mcstatus:" + host;

    if (useCache) {
      try {
        const raw = sessionStorage.getItem(key);
        if (raw) {
          const c = JSON.parse(raw);
          if (Date.now() - c.t < CACHE_MS) { paint(c.d); return; }
        }
      } catch (e) { /* ignore */ }
    }

    setLoading(true);
    load(host, false)
      .then((data) => {
        paint(data);
        try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: data })); } catch (e) { /* ignore */ }
      })
      .catch(paintError);
  }

  function tickAgo() {
    const el = $("#stAgo");
    if (!el || !lastUpdate) return;
    const sec = Math.round((Date.now() - lastUpdate) / 1000);
    el.textContent = sec < 5 ? "just now" : (sec < 60 ? sec + "s ago" : Math.round(sec / 60) + " min ago");
  }

  window.MCStatus = {
    init: function (config) {
      cfg = config || {};
      const s = cfg.status || {};
      const section = $("#status");
      if (!section) return;

      if (s.enabled === false || !(cfg.server || {}).javaIp) { section.remove(); return; }

      if (s.title) { const t = $("#statusTitle"); if (t) t.textContent = s.title; }
      if (s.subtitle) { const t = $("#statusSub"); if (t) t.textContent = s.subtitle; }
      if (s.showVersion === false) { const v = $("#stVersionTile"); if (v) v.remove(); }
      if (s.showPlayerList === false) { const b = $("#stBarWrap"); if (b) b.remove(); }

      const addr = $("#stAddress");
      if (addr) addr.textContent = (cfg.server || {}).javaIp;

      const btn = $("#stRefresh");
      if (btn) btn.addEventListener("click", () => refresh(false));

      refresh(true);

      const every = Math.max(Number(s.refreshSeconds) || 60, 20) * 1000;
      clearInterval(timer);
      timer = setInterval(() => { if (!document.hidden) refresh(false); }, every);

      clearInterval(tickTimer);
      tickTimer = setInterval(tickAgo, 5000);
      document.addEventListener("visibilitychange", () => { if (!document.hidden && Date.now() - lastUpdate > every) refresh(false); });
    },
    refresh: () => refresh(false),
  };
})();
