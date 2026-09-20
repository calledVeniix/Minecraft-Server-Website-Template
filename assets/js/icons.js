/* ==========================================================================================
   ICONS - pixel art graphics in Minecraft style
   ------------------------------------------------------------------------------------------
   You do NOT need to edit this file.
   In config.js you simply write the name of an icon, e.g.  icon: "sword"
   All available names are listed below (and in the README).
   You can also use an emoji instead of a name, e.g.  icon: "⚔️"
   ========================================================================================== */

(function () {
  "use strict";

  /* Every icon is a 12x12 grid. Each letter maps to a color in "p" (the palette). */
  const ICONS = {
    /* ---------------- Weapons & tools ---------------- */
    sword: {
      p: { a: "#e8f0ff", b: "#9db3dd", g: "#c9d6ef", h: "#7a4a24", j: "#5a3418" },
      r: [
        "..........aa",
        ".........aab",
        "........aab.",
        ".......aab..",
        "......aab...",
        ".....aab....",
        ".g...aab....",
        ".gg.aab.....",
        "..gaab......",
        ".hjgab......",
        "hj..........",
        "j...........",
      ],
    },
    pickaxe: {
      p: { a: "#d8e4fb", b: "#8ea6d4", h: "#8a5a2b", j: "#5f3c1a" },
      r: [
        "..aaa..aaa..",
        ".aabaaaabaa.",
        ".ab...hj..ba",
        "......hj....",
        ".....hj.....",
        ".....hj.....",
        "....hj......",
        "....hj......",
        "...hj.......",
        "...hj.......",
        "..hj........",
        "..hj........",
      ],
    },
    axe: {
      p: { a: "#d8e4fb", b: "#8ea6d4", h: "#8a5a2b", j: "#5f3c1a" },
      r: [
        "...aaaaa....",
        "..aabbbaa...",
        "..abbbbba...",
        "..abbbbba...",
        "...abbhj....",
        "....abhj....",
        "......hj....",
        ".....hj.....",
        ".....hj.....",
        "....hj......",
        "....hj......",
        "...hj.......",
      ],
    },
    shield: {
      p: { a: "#8a9ec4", b: "#3f5a8f", c: "#f2f6ff" },
      r: [
        ".aaaaaaaaaa.",
        ".abbbbbbbba.",
        ".abbbccbbba.",
        ".abbbccbbba.",
        ".abcccccbba.",
        "..bbbccbbb..",
        "..abbccbba..",
        "...abccba...",
        "....abba....",
        ".....aa.....",
        "............",
        "............",
      ],
    },

    /* ---------------- Blocks & items ---------------- */
    diamond: {
      p: { a: "#bff4ff", b: "#3ac6f0", c: "#ffffff" },
      r: [
        ".....aa.....",
        "....aaaa....",
        "...aabbaa...",
        "..aacbbbaa..",
        ".aacbbbbbaa.",
        "aabbbbbbbbaa",
        ".aabbbbbbaa.",
        "..aabbbbaa..",
        "...aabbaa...",
        "....aaaa....",
        ".....aa.....",
        "............",
      ],
    },
    block: {
      p: { a: "#6ac44a", b: "#4f9e36", c: "#8b5a2b", d: "#714721" },
      r: [
        ".aaaaaaaaaa.",
        ".abaaabaaba.",
        ".aaabaaaaaa.",
        ".cccccccccc.",
        ".ccdcccdccc.",
        ".cccccdcccc.",
        ".cdccccccdc.",
        ".cccccccccc.",
        ".ccdcccccdc.",
        ".cccccdcccc.",
        ".cccccccccc.",
        "............",
      ],
    },
    tnt: {
      p: { a: "#d03a3a", b: "#a62626", w: "#f4f6fb", d: "#2b2f38", f: "#c9c9c9" },
      r: [
        "......ff....",
        ".aaaaaaaaaa.",
        ".abaaaaaaba.",
        ".aaaaaaaaaa.",
        ".wwwwwwwwww.",
        ".wdwwdwwdww.",
        ".wdwwdwwdww.",
        ".wwwwwwwwww.",
        ".aaaaaaaaaa.",
        ".abaaaaaaba.",
        ".aaaaaaaaaa.",
        "............",
      ],
    },
    chest: {
      p: { a: "#a9732f", b: "#7d5220", c: "#ffcf5c", d: "#5c3a13" },
      r: [
        "............",
        ".aaaaaaaaaa.",
        ".abbbbbbbba.",
        ".abbbbbbbba.",
        ".aaaaccaaaa.",
        ".ddddccdddd.",
        ".abbbccbbba.",
        ".abbbbbbbba.",
        ".abbbbbbbba.",
        ".abbbbbbbba.",
        ".aaaaaaaaaa.",
        "............",
      ],
    },
    apple: {
      p: { a: "#e03b45", b: "#b3222c", g: "#57a742", s: "#7a4a24", w: "#ff8a90" },
      r: [
        ".....s..g...",
        ".....s.gg...",
        "...aaaaaa...",
        "..awaaaaaa..",
        ".awaaaaaaab.",
        ".aaaaaaaaab.",
        ".aaaaaaaaab.",
        ".aaaaaaaaab.",
        "..aaaaaaab..",
        "..aabaabab..",
        "...aa..aa...",
        "............",
      ],
    },
    potion: {
      p: { a: "#cfe0ff", b: "#8a4ad6", c: "#b07ef0", d: "#8a5a2b" },
      r: [
        ".....dd.....",
        ".....dd.....",
        "....aaaa....",
        "....a..a....",
        "...a....a...",
        "..a......a..",
        "..a.cccc.a..",
        "..a.bbbb.a..",
        "..a.bbbb.a..",
        "..a.bbbb.a..",
        "...aaaaaa...",
        "............",
      ],
    },

    /* ---------------- Symbols ---------------- */
    heart: {
      p: { a: "#ff4d5e", b: "#c31832", w: "#ffb3bb" },
      r: [
        "............",
        "..aaa..aaa..",
        ".awaaaaaaaa.",
        ".awaaaaaaab.",
        ".aaaaaaaaab.",
        "..aaaaaaab..",
        "...aaaaab...",
        "....aaab....",
        ".....ab.....",
        "............",
        "............",
        "............",
      ],
    },
    crown: {
      p: { a: "#ffd15c", b: "#d99a22", j: "#ff4d6d", k: "#4dc3ff" },
      r: [
        "............",
        ".a...aa...a.",
        ".a...aa...a.",
        ".aa.aaaa.aa.",
        ".aaaaaaaaaa.",
        ".aaaaaaaaaa.",
        ".ajaakkaaja.",
        ".aaaaaaaaaa.",
        ".bbbbbbbbbb.",
        "............",
        "............",
        "............",
      ],
    },
    star: {
      p: { a: "#ffd75c", b: "#e0a52e", w: "#fff4c2" },
      r: [
        ".....ww.....",
        ".....aa.....",
        "....aaaa....",
        "aaaaaaaaaaaa",
        ".aaaaaaaaaa.",
        "..aaaaaaaa..",
        "...aaaaaa...",
        "..aaaaaaaa..",
        "..aab..baa..",
        ".ab......ba.",
        "............",
        "............",
      ],
    },
    trophy: {
      p: { a: "#ffd15c", b: "#d99a22", c: "#8a5a2b" },
      r: [
        "..aaaaaaaa..",
        ".baaaaaaaab.",
        "b.aaaaaaaa.b",
        "b.aaaaaaaa.b",
        "b.aaaaaaaa.b",
        ".b.aaaaaa.b.",
        "....aaaa....",
        ".....aa.....",
        ".....aa.....",
        "...cccccc...",
        "..cccccccc..",
        "............",
      ],
    },
    flame: {
      p: { a: "#ff8a1f", b: "#ffd75c", c: "#ff4d16" },
      r: [
        ".....a......",
        "....aa......",
        "....aaa.....",
        "...caaaa....",
        "...caabaa...",
        "..ccabbba...",
        "..ccabbbaa..",
        "..ccabbbaa..",
        "..ccaabbaa..",
        "...ccaaaa...",
        "....cccc....",
        "............",
      ],
    },
    globe: {
      p: { a: "#57c7ff", b: "#1f6fd0", w: "#eaf6ff" },
      r: [
        "...aaaaaa...",
        "..aabaabaa..",
        ".aaabaabaaa.",
        "aaaabaabaaaa",
        "bbbbbbbbbbbb",
        "aaaabaabaaaa",
        "aaaabaabaaaa",
        "bbbbbbbbbbbb",
        ".aaabaabaaa.",
        "..aabaabaa..",
        "...aaaaaa...",
        "............",
      ],
    },
    compass: {
      p: { a: "#c7d3ea", b: "#39415c", r: "#ff4d5e", w: "#f7faff" },
      r: [
        "............",
        ".bbbbbbbbbb.",
        ".bwwwwwwwwb.",
        ".bwwwrrwwwb.",
        ".bwwwrrwwwb.",
        ".bwwwrrwwwb.",
        ".bwwwaawwwb.",
        ".bwwwaawwwb.",
        ".bwwwaawwwb.",
        ".bwwwwwwwwb.",
        ".bbbbbbbbbb.",
        "............",
      ],
    },
  };

  /* Creeper defined separately so the texture stays readable */
  ICONS.creeper = {
    p: { g: "#62b34a", G: "#4d9138", h: "#7cc963", d: "#0f2412" },
    r: [
      "gGgggghggGgg",
      "ggghgggggGgg",
      "ggddggggddgg",
      "ggddggggddgg",
      "ggddggggddgg",
      "gGgggddggghg",
      "ggggddddgggg",
      "ggggddddgggg",
      "ggggdggdggGg",
      "ghggdggdgggg",
      "ggGgggggghgg",
      "gggghgggggGg",
    ],
  };

  /* ---------------- Social media icons (single color) ---------------- */
  const SOCIAL = {
    discord: [
      "............",
      "..aaaaaaaa..",
      ".aaaaaaaaaa.",
      "aaaaaaaaaaaa",
      "aa.aaaaaa.aa",
      "aa.aaaaaa.aa",
      "aaaaaaaaaaaa",
      "aaaaaaaaaaaa",
      ".aaaaaaaaaa.",
      ".aa.a..a.aa.",
      ".aa......aa.",
      "............",
    ],
    youtube: [
      "............",
      ".aaaaaaaaaa.",
      "aaaaaaaaaaaa",
      "aaaa.aaaaaaa",
      "aaaa..aaaaaa",
      "aaaa...aaaaa",
      "aaaa...aaaaa",
      "aaaa..aaaaaa",
      "aaaa.aaaaaaa",
      "aaaaaaaaaaaa",
      ".aaaaaaaaaa.",
      "............",
    ],
    instagram: [
      "............",
      ".aaaaaaaaaa.",
      ".a........a.",
      ".a...aaa.aa.",
      ".a..aa.aa.a.",
      ".a..a...a.a.",
      ".a..a...a.a.",
      ".a..aa.aa.a.",
      ".a...aaa..a.",
      ".a........a.",
      ".aaaaaaaaaa.",
      "............",
    ],
    tiktok: [
      "............",
      "....aaa.aa..",
      "....aaa.aaa.",
      "....aaaaaa..",
      "....aaaaa...",
      "..aaaaa.....",
      ".aa.aaa.....",
      ".aa.aaa.....",
      ".aaaaaa.....",
      "..aaaa......",
      "............",
      "............",
    ],
    twitter: [
      "............",
      ".aa......aa.",
      ".aaa....aaa.",
      "..aaa..aaa..",
      "...aaaaaa...",
      "....aaaa....",
      "....aaaa....",
      "...aaaaaa...",
      "..aaa..aaa..",
      ".aaa....aaa.",
      ".aa......aa.",
      "............",
    ],
    twitch: [
      "............",
      ".aaaaaaaaa..",
      ".aaaaaaaaa..",
      ".aa.aa.aaa..",
      ".aa.aa.aaa..",
      ".aa.aa.aaa..",
      ".aaaaaaaaa..",
      "..aaaaaaa...",
      "....aa..a...",
      "....aa...a..",
      "....aa....a.",
      "............",
    ],
    store: [
      "............",
      "..aa........",
      "..aa........",
      "..aaaaaaaaa.",
      "..aaaaaaaaa.",
      "...aaaaaaa..",
      "...aaaaaaa..",
      "....aaaaa...",
      "............",
      "...aa..aa...",
      "...aa..aa...",
      "............",
    ],
    web: [
      "...aaaaaa...",
      "..aa.aa.aa..",
      ".aaa.aa.aaa.",
      "aaaa.aa.aaaa",
      "aaaaaaaaaaaa",
      "aaaaaaaaaaaa",
      "aaaa.aa.aaaa",
      "aaaa.aa.aaaa",
      ".aaa.aa.aaa.",
      "..aa.aa.aa..",
      "...aaaaaa...",
      "............",
    ],
  };

  /* Merge neighbouring pixels into as few rectangles as possible (faster in the browser) */
  function toSvg(rows, palette, opts) {
    const o = opts || {};
    const n = rows.length;
    let out = "";
    for (let y = 0; y < n; y++) {
      const row = rows[y];
      let x = 0;
      while (x < row.length) {
        const ch = row[x];
        const color = palette[ch];
        if (!color) { x++; continue; }
        let w = 1;
        while (x + w < row.length && row[x + w] === ch) w++;
        out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="1" fill="' + color + '"/>';
        x += w;
      }
    }
    return (
      '<svg viewBox="0 0 ' + (rows[0] ? rows[0].length : n) + " " + n + '" ' +
      'width="' + (o.size || 32) + '" height="' + (o.size || 32) + '" ' +
      'shape-rendering="crispEdges" aria-hidden="true" focusable="false">' + out + "</svg>"
    );
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  window.MCIcons = {
    /* List of all icon names - handy for the README */
    names: function () { return Object.keys(ICONS); },

    /* Returns a pixel icon. An unknown name is returned as plain text (e.g. an emoji). */
    get: function (name, opts) {
      const icon = ICONS[name];
      if (!icon || !icon.r || !icon.r.length) return escapeHtml(name || "");
      return toSvg(icon.r, icon.p, opts);
    },

    /* Social icon, drawn in the current text color */
    social: function (name, opts) {
      const rows = SOCIAL[name] || SOCIAL.web;
      return toSvg(rows, { a: "currentColor" }, opts || { size: 20 });
    },
  };
})();
