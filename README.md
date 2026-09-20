<div align="center">

<img src="assets/img/logo.webp" alt="Logo" width="130">

# Minecraft Server Website Template

**A modern Minecraft server website with liquid-glass design, pixel styling and a live server status.**
Fully customisable without any coding knowledge — you only edit **one single file**.

`Liquid Glass` · `Minecraft font` · `Live player count` · `MOTD` · `5 gamemodes` · `FAQ` · `100% free`

</div>

---

## 📖 Contents

1. [What can this website do?](#-what-can-this-website-do)
2. [Quick start in 5 minutes](#-quick-start-in-5-minutes)
3. [Putting the website online](#-putting-the-website-online)
4. [Customising everything (config.js)](#-customising-everything-configjs)
   - [Server info & IP](#1-server--your-most-important-info)
   - [Logo & colors](#2-branding--logo--colors)
   - [Announcement bar](#3-announcement--bar-at-the-top)
   - [Menu](#4-navigation--the-menu-at-the-top)
   - [Hero area](#5-hero--the-big-area-at-the-top)
   - [Live server status](#6-status--live-player-count-version--motd)
   - [Stats bar](#7-stats--the-numbers-strip)
   - [Gamemodes](#8-gamemodes--your-5-gamemodes)
   - [Features](#9-features--why-play-here)
   - [How to join](#10-joinsteps--how-to-join)
   - [FAQ](#11-faq--frequently-asked-questions)
   - [Call to action](#12-cta--the-final-call-to-action)
   - [Social media & footer](#13-socials--footer)
   - [Effects on/off](#14-effects--animations-onoff)
5. [Icon list](#-icon-list)
6. [Using your own Minecraft font](#-using-your-own-minecraft-font)
7. [Troubleshooting](#-troubleshooting)
8. [Project structure](#-project-structure)
9. [License & notice](#-license--notice)

---

## ✨ What can this website do?

| Feature | Description |
|---|---|
| 🧊 **Liquid glass design** | Real glass look with blur, specular highlights and depth |
| 🎮 **Minecraft look** | Pixel font, hand-drawn pixel icons, dark neon theme |
| 📡 **Live server status** | Player count, version and MOTD are pulled from your server automatically |
| 🎬 **Lots of animations** | Floating blocks, parallax logo, typewriter effect, tilting cards, counting numbers, cursor glow |
| 📋 **One-click IP copy** | Visitors copy your IP with a single click |
| 🧩 **5 gamemodes + FAQ** | Extend or shorten every list as you like |
| 📱 **Mobile friendly** | Looks good on phones, tablets and desktops |
| ⚡ **No backend needed** | Plain HTML — runs for free on GitHub Pages, Netlify or any web host |
| ♿ **Considerate** | Anyone using "reduce motion" in their system settings gets a calm version |

---

## 🚀 Quick start in 5 minutes

### Step 1 — Download the files

On this GitHub page click the green **`Code`** button → **`Download ZIP`** and unpack it on your computer.

> 💡 Have a GitHub account? Then click **`Use this template`** or **`Fork`** at the top right instead.

### Step 2 — Look at the website

Double-click **`index.html`**. The page opens in your browser. Done!

> ℹ️ When you open it by double-click, the live player count may not load yet.
> That is normal and works as soon as the page is properly online (see below).

### Step 3 — Enter your own data

Open **`assets/js/config.js`** in a text editor.

> 🧰 **What do I open the file with?**
> Free programs: [Visual Studio Code](https://code.visualstudio.com) (recommended), Notepad++ or the plain Windows editor.
> Right-click the file → "Open with".

Change these **5 things** — that is all you need to get started:

```js
name: "NEXUS",                    // 1. Your server name
nameAccent: "MC",                 //    Second part (shown in color) — or "" for none
javaIp: "mc.hypixel.net",         // 2. Your server IP  ⭐ IMPORTANT
```
```js
logo: "assets/img/logo.webp",     // 3. Your logo (put the file into assets/img/)
primary: "#2b6bff",               // 4. Your main color
```
```js
navButton: {
  label: "Discord",
  url: "https://discord.gg/",     // 5. Your Discord link
},
```

### Step 4 — Save & reload

Save the file (**Ctrl + S**) and reload the browser with **Ctrl + F5**. Your changes show up right away. 🎉

> ⚠️ **The three golden rules for editing:**
> 1. Only change text **between the quotes** `"like this"`.
> 2. **Never** delete a comma `,` at the end of a line.
> 3. If the page suddenly turns blank: press **Ctrl + Z** (undo) and save again.

---

## 🌍 Putting the website online

Pick **one** of the three options. All of them are free.

### Option A — GitHub Pages (recommended, completely free)

1. Create a new repository on [github.com](https://github.com) (e.g. `my-server-website`).
2. Upload all files (`Add file` → `Upload files` → drag the files in → `Commit changes`).
3. Go to **`Settings`** → **`Pages`** in the left sidebar.
4. Under **Source** choose `Deploy from a branch`, branch `main`, folder `/ (root)` → **Save**.
5. Wait 1–2 minutes. Your link appears at the top:
   `https://YOUR-NAME.github.io/my-server-website/`

**Own domain (e.g. `www.yourserver.com`)?**
Settings → Pages → *Custom domain* → enter your domain. Then add a `CNAME` record pointing to
`YOUR-NAME.github.io` at your domain registrar.

### Option B — Netlify (fastest)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the **whole unpacked folder** into the window.
3. Done — your link appears instantly.

### Option C — Your own web host / FTP

Upload **all files and folders** (`index.html`, `404.html`, `assets/`) into the main directory
(usually `public_html/` or `htdocs/`) of your hosting provider.

---

## 🔧 Customising everything (config.js)

All texts, colors, links and content live in **`assets/js/config.js`**.
The file is split into 14 numbered sections — each one is explained below.

---

### 1. `server` — Your most important info

```js
server: {
  name: "NEXUS",                  // Server name (big text on the homepage)
  nameAccent: "MC",               // Second part, shown in your accent color ("" = off)
  tagline: "The ultimate Minecraft experience",   // Slogan (with typewriter effect)
  description: "Custom gamemodes, ...",           // Short text below it
  javaIp: "mc.hypixel.net",       // ⭐ Your Java IP — this powers the live status!
  bedrockIp: "",                  // Bedrock IP (mobile/console). "" = the row is hidden
  bedrockPort: "19132",
  versionFallback: "1.8 - 1.21+", // Shown whenever your server is offline
},
```

> 💡 **Example:** `name: "CRAFT"` + `nameAccent: "LAND"` renders as **CRAFT**LAND, with "LAND" in your accent color.
> Only want one word? Leave `nameAccent: ""` empty.

---

### 2. `branding` — Logo & colors

```js
branding: {
  logo: "assets/img/logo.webp",        // Logo in the header and the hero
  logoFooter: "assets/img/logo.webp",  // Logo in the footer (can be the same)
  ogImage: "assets/img/og-image.png",  // Preview image when sharing (Discord/WhatsApp)
  colors: {
    primary:    "#2b6bff",   // Main color: buttons, glow, links
    secondary:  "#7ab6ff",   // Secondary color: gradients, highlights
    accent:     "#9d6bff",   // Accent: small details
    background: "#05070f",   // Page background (keep it dark!)
  },
  auroraGlow: true,          // Colored lights in the background (false = off)
},
```

#### 🖼️ Using your own logo

1. Put your logo file into the **`assets/img/`** folder.
2. Write the file name here, e.g. `logo: "assets/img/my-logo.png"`.

| What | Recommendation |
|---|---|
| Format | **PNG** or **WebP** with a **transparent background** |
| Size | at least **512 × 512 pixels**, ideally square |
| File size | below 500 KB (otherwise the page loads slowly) |

> 🪄 You can remove a background for free at [remove.bg](https://www.remove.bg) or [photopea.com](https://www.photopea.com).

#### 🎨 Changing the colors

Find color codes at [htmlcolorcodes.com](https://htmlcolorcodes.com) — just copy the `#` code.

| Style | primary | secondary | accent |
|---|---|---|---|
| 💙 Blue (default) | `#2b6bff` | `#7ab6ff` | `#9d6bff` |
| 💚 Green / Survival | `#31d158` | `#8ef2a8` | `#14b8a6` |
| ❤️ Red / PvP | `#ff3b52` | `#ff8a95` | `#ff8a3d` |
| 💜 Purple / Magic | `#9d4edd` | `#c77dff` | `#5a189a` |
| 🧡 Orange / Summer | `#ff8c1a` | `#ffc46b` | `#ff4d6d` |

---

### 3. `announcement` — Bar at the top

```js
announcement: {
  enabled: true,                              // false = hide the bar completely
  text: "Season 4 is LIVE - new map!",
  linkLabel: "Learn more",                    // "" = no link
  linkUrl: "#gamemodes",
},
```

---

### 4. `navigation` — The menu at the top

```js
navigation: [
  { label: "Home",        href: "#home" },
  { label: "Status",      href: "#status" },
  { label: "Gamemodes",   href: "#gamemodes" },
  { label: "Features",    href: "#features" },
  { label: "How to join", href: "#join" },
  { label: "FAQ",         href: "#faq" },
],
```

- **Remove an item:** delete the whole line.
- **Add an item:** copy a line and edit it.
- An `href` starting with `#` jumps down the page. External links work too: `href: "https://..."`.

Available jump targets: `#home` · `#status` · `#gamemodes` · `#features` · `#join` · `#faq`

---

### 5. `hero` — The big area at the top

```js
hero: {
  badge: "Season 4 - Now online",        // Small label above the title ("" = off)
  typewriter: true,                      // Typewriter effect for the slogan
  primaryButton:   { label: "Copy IP", action: "copy-ip" },
  secondaryButton: { label: "Join Discord", url: "https://discord.gg/" },
},
```

> 🔘 **`action: "copy-ip"`** turns the button into a copy button for your IP.
> If the button should open a link instead, write `url: "https://..."` in place of `action`.

---

### 6. `status` — Live player count, version & MOTD

```js
status: {
  enabled: true,           // false = hide the whole section
  refreshSeconds: 60,      // How often the data reloads (seconds, minimum 20)
  showMotd: true,          // Show the MOTD
  showVersion: true,       // Show the version
  showPlayerList: true,    // Show the capacity bar
  title: "Live Server Status",
  subtitle: "Straight from our server - refreshes automatically.",
},
```

**How it works:** the page automatically queries the IP you set in `server.javaIp` and displays
player count, version and MOTD. **No plugin and no account** required.

Free services used (with an automatic fallback if one is down):
[mcsrvstat.us](https://mcsrvstat.us) and [mcstatus.io](https://mcstatus.io).

> ⚠️ The status only works when the page is opened over **http/https** (so: online, or through a
> local web server) — not by double-clicking `index.html`.

---

### 7. `stats` — The numbers strip

```js
stats: [
  { value: 12500, suffix: "+",  label: "Registered players" },
  { value: 99,    suffix: "%",  label: "Uptime" },
  { value: 5,     suffix: "",   label: "Gamemodes" },
  { value: 24,    suffix: "/7", label: "Support" },
],
```

The numbers count up while scrolling. `value` has to be a **plain number** (`12500`, not `12,500`).

---

### 8. `gamemodes` — Your 5 gamemodes

```js
gamemodesTitle: "Our gamemodes",
gamemodesSubtitle: "Five worlds. Endless possibilities.",
gamemodes: [
  {
    icon: "sword",                          // Icon name (list below) or an emoji
    title: "Enter your gamemode here",      // Name of your gamemode
    tag: "Popular",                         // Small label in the corner ("" = off)
    text: "Description of your gamemode.",
    link: "",                               // Optional: "https://wiki.yourserver.com"
  },
  // ... more gamemodes
],
```

- **Add a gamemode:** copy the whole block from `{` to `},` and paste it.
- **Remove a gamemode:** delete the whole block from `{` to `},`.

---

### 9. `features` — Why play here?

Built exactly like the gamemodes:

```js
features: [
  { icon: "shield", title: "No pay-to-win", text: "Every item can be earned in game." },
  // ...
],
```

---

### 10. `joinSteps` — How to join

```js
joinTitle: "Join in 3 steps",
joinSteps: [
  { title: "Start Minecraft", text: "Open Minecraft in any version from 1.8 to 1.21." },
  { title: "Add the server",  text: "Go to \"Multiplayer\" and click \"Add Server\"." },
  { title: "Enter our IP",    text: "Paste our IP and connect!" },
],
```

The numbers (1, 2, 3 …) appear automatically, so you can also use 4 or 5 steps.

---

### 11. `faq` — Frequently asked questions

```js
faq: [
  { q: "Which version do I need?",  a: "Our server supports 1.8 through 1.21." },
  { q: "Is the server pay-to-win?", a: "No, the shop only sells cosmetics." },
],
```

`q` = question, `a` = answer. To add one, copy a line and edit it.

---

### 12. `cta` — The final call to action

```js
cta: {
  enabled: true,
  title: "Ready for your next adventure?",
  text: "More than 12,000 players already started.",
  buttonLabel: "Join now",
  buttonAction: "copy-ip",     // "copy-ip" OR a link "https://discord.gg/..."
},
```

---

### 13. `socials` & `footer`

```js
socials: [
  { icon: "discord", label: "Discord", url: "https://discord.gg/" },
  { icon: "youtube", label: "YouTube", url: "https://youtube.com/" },
],
```

Possible `icon` values: `discord` · `youtube` · `tiktok` · `instagram` · `twitter` · `twitch` · `store` · `web`

```js
footer: {
  about: "A Minecraft network built by players, for players.",
  columns: [
    { title: "Server", links: [ { label: "Gamemodes", url: "#gamemodes" } ] },
    // more columns ...
  ],
  copyright: "All rights reserved.",
},
```

The year in the copyright line is inserted automatically.

> ⚖️ **Important:** keep the notice *"We are not affiliated with Mojang, AB."* in the footer —
> the [Minecraft usage guidelines](https://www.minecraft.net/usage-guidelines) require it for fan projects.

---

### 14. `effects` — Animations on/off

```js
effects: {
  particles: true,       // Floating pixel blocks in the background
  cursorGlow: true,      // Glow that follows the mouse (desktop only)
  scrollProgress: true,  // Progress bar at the very top
  tiltCards: true,       // Cards tilt on hover
  scrollReveal: true,    // Content fades in while scrolling
},
```

Set them to `false` if it is too much for you or if older devices stutter.

---

## 🎨 Icon list

These names can be used for `icon:` (pixel graphics in Minecraft style):

| | | | |
|---|---|---|---|
| `sword` | `pickaxe` | `axe` | `shield` |
| `diamond` | `block` | `tnt` | `chest` |
| `apple` | `potion` | `heart` | `crown` |
| `star` | `trophy` | `flame` | `globe` |
| `compass` | `creeper` | | |

> 😀 Instead of a name you can also use any **emoji**: `icon: "⚔️"`.

---

## 🔤 Using your own Minecraft font

By default the site uses the free font **"Pixelify Sans"** (very close to the Minecraft look).
Own a Minecraft-style font file? Here is how to use it:

1. Put the file (`.ttf` or `.woff2`) into **`assets/fonts/`** and name it `minecraft.ttf`.
2. Open `assets/css/style.css` and follow the short instructions at the very top of the file
   ("USE YOUR OWN MINECRAFT FONT").
3. Save, press **Ctrl + F5** — done.

> ⚠️ Only upload fonts you are allowed to use.

---

## 🆘 Troubleshooting

<details>
<summary><b>The page is completely white / empty</b></summary>

A quote, a comma or a brace is missing in `config.js`.
- Press **Ctrl + Z** until the last working state is back, then save.
- Or: right-click the page → *Inspect* → tab *Console*. The faulty line is printed there.
</details>

<details>
<summary><b>My changes do not show up</b></summary>

The browser cached the old version. Press **Ctrl + F5** (Mac: **Cmd + Shift + R**).
On GitHub Pages it also takes 1–2 minutes after uploading.
</details>

<details>
<summary><b>The live status says "Server offline" or "Status unavailable"</b></summary>

1. Is the **correct IP** set in `server.javaIp` (without `https://`)?
2. Test your IP on [mcsrvstat.us](https://mcsrvstat.us) — is the server found there?
3. Is your server running right now and reachable through the firewall?
4. Did you only double-click the file? Put the page online (see above) and it will work.
5. Using a non-standard port? Write it like this: `javaIp: "play.yourserver.com:25566"`.
</details>

<details>
<summary><b>The logo does not appear</b></summary>

- Is the file name **exactly** right (case matters: `Logo.png` ≠ `logo.png`)?
- Is the file really inside `assets/img/`?
- The path has to look like this: `logo: "assets/img/my-logo.png"`.
</details>

<details>
<summary><b>The font does not look pixelated</b></summary>

The font is loaded from Google Fonts, so you need an internet connection.
Alternatively embed your own font file (see above).
</details>

<details>
<summary><b>It stutters on mobile</b></summary>

In `config.js` under `effects` set `particles` and `cursorGlow` to `false`.
</details>

---

## 📁 Project structure

```
📂 Minecraft-Website-Template
├── 📄 index.html            ← The page skeleton (normally you never touch this)
├── 📄 404.html              ← Error page
├── 📂 assets
│   ├── 📂 css
│   │   └── style.css        ← The design (advanced users only)
│   ├── 📂 fonts             ← Space for your own font
│   ├── 📂 img
│   │   ├── logo.webp        ← 👉 Replace this with your logo
│   │   ├── logo-alt.webp    ← Alternative version with a background
│   │   ├── og-image.png     ← Preview image for sharing
│   │   └── favicon.*        ← The little icon in the browser tab
│   └── 📂 js
│       ├── config.js        ← ⭐ THIS IS WHERE YOU CHANGE EVERYTHING
│       ├── icons.js         ← Pixel icons (do not touch)
│       ├── status.js        ← Live server query (do not touch)
│       └── main.js          ← Animations & page building (do not touch)
└── 📄 README.md             ← This guide
```

---

## 📜 License & notice

- This template is released under the **MIT License** — free for private and commercial use.
- The bundled example logo is only a **placeholder**. Replace it with your own.
- Fonts: [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) & [Outfit](https://fonts.google.com/specimen/Outfit) (Open Font License).
- **We are not affiliated with Mojang, AB.** — Minecraft is a trademark of Mojang Studios / Microsoft.
  This project is an unofficial fan project and is in no way connected to Mojang.

<div align="center">

---

Made with ❤️ by [Veniix](https://veniix.studio)

⭐ If you like this template, leave a star on GitHub!

</div>
