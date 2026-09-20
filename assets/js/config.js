/* ==========================================================================================
 *
 *   ####   ####  #   # ####  ###   ####     CONFIGURATION
 *  #      #    # ##  # #    #   # #         ----------------------------------------
 *  #      #    # # # # ###  #   # # ###     This is the ONLY file you need to edit.
 *  #      #    # #  ## #    #   # #   #     No coding knowledge required!
 *   ####   ####  #   # #     ###   ####
 *
 * ------------------------------------------------------------------------------------------
 *  HOW IT WORKS
 * ------------------------------------------------------------------------------------------
 *  1. Only change the text BETWEEN the quotes  ->  name: "MY SERVER"
 *  2. Never delete a comma (,) at the end of a line.
 *  3. Need a quote inside your text? Put a backslash first:  "The \"best\" server"
 *  4. true = on / enabled       false = off / disabled
 *  5. After saving, reload your browser with Ctrl + F5 (Mac: Cmd + Shift + R).
 *
 *  WARNING: If the page turns blank after an edit, you probably deleted a quote or a comma.
 *           Just undo your change (Ctrl + Z) and save again.
 * ========================================================================================== */

window.CONFIG = {

  /* ========================================================================================
   * 1) SERVER - The most important information
   * ====================================================================================== */
  server: {
    // Your server name (shown in the header, the page title and the footer)
    name: "NEXUS",

    // Second part of the name, shown in your accent color. Leave empty ("") if not needed.
    nameAccent: "MC",

    // Short slogan below the big title
    tagline: "The ultimate Minecraft experience",

    // Description text in the hero area (1-2 sentences)
    description: "Custom gamemodes, fair competition and a community that never sleeps. No pay-to-win, just pure gameplay.",

    // IMPORTANT: your Java server IP. Player count, version and MOTD are loaded live from it.
    // Examples: "play.yourserver.com"  or  "play.yourserver.com:25565"
    javaIp: "mc.hypixel.net",

    // Bedrock IP (mobile / console). Leave empty ("") to hide the Bedrock row.
    bedrockIp: "",
    bedrockPort: "19132",

    // Supported Minecraft versions (plain text, shown whenever the server is offline)
    versionFallback: "1.8 - 1.21+",
  },

  /* ========================================================================================
   * 2) BRANDING - Logo, colors & font
   * ====================================================================================== */
  branding: {
    // Your logo. Put your image into the "assets/img/" folder and write the file name here.
    // Recommended: square PNG/WebP with a transparent background, at least 512x512 px.
    logo: "assets/img/logo.webp",

    // Logo in the footer (can be the same file)
    logoFooter: "assets/img/logo.webp",

    // Preview image when the link is shared on Discord / WhatsApp / X (1200x630 px)
    ogImage: "assets/img/og-image.png",

    // ---- COLORS ----------------------------------------------------------------------
    // Use a color picker (e.g. https://htmlcolorcodes.com) and paste the # code here.
    colors: {
      primary:   "#2b6bff",   // Main color (buttons, glow, links)
      secondary: "#7ab6ff",   // Secondary color (gradients, highlights)
      accent:    "#9d6bff",   // Accent color (small details)
      background:"#05070f",   // Page background (keep it dark)
    },

    // Colored lights in the background on / off
    auroraGlow: true,
  },

  /* ========================================================================================
   * 3) ANNOUNCEMENT BAR at the very top
   * ====================================================================================== */
  announcement: {
    enabled: true,                                   // false = hide the bar
    text: "Season 4 is LIVE - new map, new kits!",
    linkLabel: "Learn more",                         // Empty ("") = no link
    linkUrl: "#gamemodes",
  },

  /* ========================================================================================
   * 4) NAVIGATION menu
   *    Delete a line to remove an item, copy a line to add one.
   * ====================================================================================== */
  navigation: [
    { label: "Home",      href: "#home" },
    { label: "Status",    href: "#status" },
    { label: "Gamemodes", href: "#gamemodes" },
    { label: "Features",  href: "#features" },
    { label: "How to join", href: "#join" },
    { label: "FAQ",       href: "#faq" },
  ],

  // The highlighted button in the top right corner
  navButton: {
    label: "Discord",
    url: "https://discord.gg/",
  },

  /* ========================================================================================
   * 5) HERO - The big area at the top
   * ====================================================================================== */
  hero: {
    // Small label above the title
    badge: "Season 4 - Now online",

    // Typewriter effect for the slogan (true = on)
    typewriter: true,

    // The two buttons. "copy-ip" copies your IP to the clipboard automatically.
    primaryButton:   { label: "Copy IP", action: "copy-ip" },
    secondaryButton: { label: "Join Discord", url: "https://discord.gg/" },
  },

  /* ========================================================================================
   * 6) LIVE SERVER STATUS - player count, version & MOTD
   * ====================================================================================== */
  status: {
    enabled: true,          // false = hide the whole status section
    refreshSeconds: 60,     // How often the data is reloaded (in seconds)
    showMotd: true,         // Show the MOTD (message of the day)
    showVersion: true,      // Show the server version
    showPlayerList: true,   // Show the capacity bar
    title: "Live Server Status",
    subtitle: "Straight from our server - refreshes automatically.",
  },

  /* ========================================================================================
   * 7) STATS BAR
   *    value = the number, suffix = e.g. "+" or "K", label = the caption
   * ====================================================================================== */
  stats: [
    { value: 12500, suffix: "+",  label: "Registered players" },
    { value: 99,    suffix: "%",  label: "Uptime" },
    { value: 5,     suffix: "",   label: "Gamemodes" },
    { value: 24,    suffix: "/7", label: "Support" },
  ],

  /* ========================================================================================
   * 8) GAMEMODES
   *    icon: a name from the icon list (see README) OR an emoji, e.g. "SWORD" -> "sword"
   *    Available icons: sword, pickaxe, axe, shield, diamond, block, tnt, chest, apple,
   *                     potion, heart, crown, star, trophy, flame, globe, compass, creeper
   * ====================================================================================== */
  gamemodesTitle: "Our gamemodes",
  gamemodesSubtitle: "Five worlds. Endless possibilities. Pick your favourite.",
  gamemodes: [
    {
      icon: "sword",
      title: "Enter your gamemode here",
      tag: "Popular",                               // Small label on the card ("" = none)
      text: "Describe your gamemode here. Tell players in one or two sentences what to expect and why it is fun.",
      link: "",                                     // Optional link, e.g. "https://wiki.yourserver.com"
    },
    {
      icon: "pickaxe",
      title: "Enter your gamemode here",
      tag: "",
      text: "Describe your gamemode here. Tell players in one or two sentences what to expect and why it is fun.",
      link: "",
    },
    {
      icon: "crown",
      title: "Enter your gamemode here",
      tag: "New",
      text: "Describe your gamemode here. Tell players in one or two sentences what to expect and why it is fun.",
      link: "",
    },
    {
      icon: "tnt",
      title: "Enter your gamemode here",
      tag: "",
      text: "Describe your gamemode here. Tell players in one or two sentences what to expect and why it is fun.",
      link: "",
    },
    {
      icon: "chest",
      title: "Enter your gamemode here",
      tag: "",
      text: "Describe your gamemode here. Tell players in one or two sentences what to expect and why it is fun.",
      link: "",
    },
  ],

  /* ========================================================================================
   * 9) FEATURES - Why play here?
   * ====================================================================================== */
  featuresTitle: "Why our server?",
  featuresSubtitle: "We build the experience we want to play ourselves.",
  features: [
    { icon: "shield", title: "No pay-to-win",   text: "Every item can be earned in game. The shop only sells cosmetics and supporter ranks." },
    { icon: "flame",  title: "Strong hardware", text: "NVMe SSDs, DDoS protection and low latency, so the gameplay stays smooth." },
    { icon: "heart",  title: "Active team",     text: "Our support usually replies in under 15 minutes - every single day." },
    { icon: "globe",  title: "Java & Bedrock",  text: "Play together with your friends, no matter which device they are on." },
  ],

  /* ========================================================================================
   * 10) HOW TO JOIN
   * ====================================================================================== */
  joinTitle: "Join in 3 steps",
  joinSteps: [
    { title: "Start Minecraft",  text: "Open Minecraft in any version from 1.8 to 1.21." },
    { title: "Add the server",   text: "Go to \"Multiplayer\" and click \"Add Server\"." },
    { title: "Enter our IP",     text: "Paste our IP, hit connect - and off you go!" },
  ],

  /* ========================================================================================
   * 11) FAQ - Frequently asked questions
   *      To add a question, copy one block { ... }, and edit it.
   * ====================================================================================== */
  faqTitle: "Frequently asked questions",
  faqSubtitle: "Did not find your answer? Just ask us on Discord.",
  faq: [
    { q: "Which Minecraft version do I need?",      a: "Our server supports versions 1.8 through 1.21. We recommend the latest version for the best experience." },
    { q: "Can I play on Bedrock (mobile/console)?", a: "Yes! Simply add our Bedrock IP together with the matching port to your server list." },
    { q: "Is the server pay-to-win?",               a: "No. Our shop only offers cosmetic items and ranks that give no gameplay advantage." },
    { q: "How do I join the staff team?",           a: "Applications run through our Discord. You will find the current application channel and all requirements there." },
    { q: "I got banned - what now?",                a: "Submit an unban request on our Discord. Every case is reviewed individually by our team." },
  ],

  /* ========================================================================================
   * 12) CALL TO ACTION at the end
   * ====================================================================================== */
  cta: {
    enabled: true,
    title: "Ready for your next adventure?",
    text: "More than 12,000 players already started. You are the one missing.",
    buttonLabel: "Join now",
    buttonAction: "copy-ip",     // "copy-ip" OR a link such as "https://discord.gg/..."
  },

  /* ========================================================================================
   * 13) SOCIAL MEDIA & FOOTER
   *      Icons: discord, youtube, tiktok, instagram, twitter, twitch, store, web
   *      Delete a line and the icon disappears.
   * ====================================================================================== */
  socials: [
    { icon: "discord",   label: "Discord",   url: "https://discord.gg/" },
    { icon: "youtube",   label: "YouTube",   url: "https://youtube.com/" },
    { icon: "tiktok",    label: "TikTok",    url: "https://tiktok.com/" },
    { icon: "instagram", label: "Instagram", url: "https://instagram.com/" },
    { icon: "store",     label: "Shop",      url: "https://example.com/shop" },
  ],

  footer: {
    // Short text below the logo in the footer
    about: "A Minecraft network built by players, for players. Online since 2021.",

    // Link columns in the footer
    columns: [
      {
        title: "Server",
        links: [
          { label: "Gamemodes", url: "#gamemodes" },
          { label: "Status",    url: "#status" },
          { label: "FAQ",       url: "#faq" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Discord", url: "https://discord.gg/" },
          { label: "Shop",    url: "https://example.com/shop" },
          { label: "Vote",    url: "https://example.com/vote" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Imprint",       url: "#" },
          { label: "Privacy",       url: "#" },
          { label: "Server rules",  url: "#" },
        ],
      },
    ],

    // Copyright line (the year is inserted automatically)
    copyright: "All rights reserved.",
  },

  /* ========================================================================================
   * 14) EFFECTS - turn animations on and off
   *      Tip: set them to false if an older device feels slow.
   * ====================================================================================== */
  effects: {
    particles: true,       // Floating pixel blocks in the background
    cursorGlow: true,      // Glow that follows the mouse (desktop only)
    scrollProgress: true,  // Progress bar at the very top
    tiltCards: true,       // Cards tilt on hover
    scrollReveal: true,    // Content fades in while scrolling
  },
};
