/* @ds-bundle: {"format":3,"namespace":"GuimarEsPixelDesignSystem_2bf0cf","components":[{"name":"ActivityReadout","sourcePath":"components/agent/ActivityReadout.jsx"},{"name":"LevelBadge","sourcePath":"components/agent/LevelBadge.jsx"},{"name":"SkillNode","sourcePath":"components/agent/SkillNode.jsx"},{"name":"TaskItem","sourcePath":"components/agent/TaskItem.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"StatBar","sourcePath":"components/data/StatBar.jsx"},{"name":"GUIMARAES_PALETTE","sourcePath":"components/mascot/PixelSprite.jsx"},{"name":"GUIMARAES_FRAMES","sourcePath":"components/mascot/PixelSprite.jsx"},{"name":"PixelSprite","sourcePath":"components/mascot/PixelSprite.jsx"},{"name":"Panel","sourcePath":"components/surface/Panel.jsx"},{"name":"TabBar","sourcePath":"components/surface/TabBar.jsx"}],"sourceHashes":{"assets/pixel-icons.js":"270faaead71b","components/agent/ActivityReadout.jsx":"26f64328b7e9","components/agent/LevelBadge.jsx":"5fbe9c886d87","components/agent/SkillNode.jsx":"4e1f1c34bbc9","components/agent/TaskItem.jsx":"a1ea5e9c7c12","components/core/Badge.jsx":"debb195e204f","components/core/Button.jsx":"cd85e2346a68","components/core/Icon.jsx":"574d6758ce55","components/core/IconButton.jsx":"7996fb42c9ee","components/core/Tag.jsx":"14bc9a50c702","components/data/ProgressBar.jsx":"f4d0b67e9a2c","components/data/Stat.jsx":"9db8d708fb46","components/data/StatBar.jsx":"cc9cd65416c3","components/mascot/PixelSprite.jsx":"07876fa048d2","components/surface/Panel.jsx":"4910b38e7035","components/surface/TabBar.jsx":"dc1a4566d871"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GuimarEsPixelDesignSystem_2bf0cf = window.GuimarEsPixelDesignSystem_2bf0cf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/pixel-icons.js
try { (() => {
/* Pixel icons — self-hosted subset of Pixelarticons (MIT, github.com/halfmage/pixelarticons).
   24x24 viewBox, fill=currentColor (tintable). Used by the Icon component + cards. */
window.PixelIcons = {
  "heart": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z\" fill=\"currentColor\"/></svg>",
  "zap": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z\" fill=\"currentColor\"/></svg>",
  "trophy": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z\" fill=\"currentColor\"/></svg>",
  "chart-bar": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 5h2v14h-2V5zm-2 4H9v10h2V9zm-4 4H5v6h2v-6zm12 0h-2v6h2v-6z\" fill=\"currentColor\"/></svg>",
  "check": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z\" fill=\"currentColor\"/></svg>",
  "checkbox-on": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 3h18v18H3V3zm16 16V5H5v14h14z\" fill=\"currentColor\"/></svg>",
  "checkbox": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z\" fill=\"currentColor\"/></svg>",
  "list": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z\" fill=\"currentColor\"/></svg>",
  "code": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z\" fill=\"currentColor\"/></svg>",
  "book": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 2h12v20H4V2h4zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2v-2z\" fill=\"currentColor\"/></svg>",
  "clock": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5v2H3v14h2v2h14v-2h2V5h-2V3zm0 2v14H5V5h14zm-8 2h2v6h4v2h-6V7z\" fill=\"currentColor\"/></svg>",
  "play": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z\" fill=\"currentColor\"/></svg>",
  "pause": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M10 4H5v16h5V4zm9 0h-5v16h5V4z\" fill=\"currentColor\"/></svg>",
  "close": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z\" fill=\"currentColor\"/></svg>",
  "minus": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M4 11h16v2H4z\"/></svg>",
  "chevron-up": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M7 16H5v-2h2v-2h2v-2h2V8h2v2h2v2h2v2h2v2h-2v-2h-2v-2h-2v-2h-2v2H9v2H7v2z\" fill=\"currentColor\"/></svg>",
  "chevron-down": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z\" fill=\"currentColor\"/></svg>",
  "chevron-right": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z\" fill=\"currentColor\"/></svg>",
  "chevron-left": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z\" fill=\"currentColor\"/></svg>",
  "lightbulb": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M8 2h8v2H8V2ZM6 6V4h2v2H6Zm0 6H4V6h2v6Zm2 2H6v-2h2v2Zm8 0v4H8v-4h2v2h4v-2h2Zm2-2v2h-2v-2h2Zm0-6h2v6h-2V6Zm0 0V4h-2v2h2Zm-2 14H8v2h8v-2Z\" /></svg>",
  "folder": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z\" fill=\"currentColor\"/></svg>",
  "file": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 22h18V8h-2V6h-2v2h-2V6h2V4h-2V2H3v20zm2-2V4h8v6h6v10H5z\" fill=\"currentColor\"/></svg>",
  "message": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2z\" fill=\"currentColor\"/></svg>",
  "sliders": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17 4h2v10h-2V4zm0 12h-2v2h2v2h2v-2h2v-2h-4zm-4-6h-2v10h2V10zm-8 2H3v2h2v6h2v-6h2v-2H5zm8-8h-2v2H9v2h6V6h-2V4zM5 4h2v6H5V4z\" fill=\"currentColor\"/></svg>",
  "power": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20 2h-2v4H6v2H4v8h2v2h2v4h8v-2h4v-2h-4v-2h4v-2h-4v-2H8v4H6V8h12V6h2V2zm-6 18h-4v-6h4v6z\" fill=\"currentColor\"/></svg>",
  "reload": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M16 2h-2v2h2v2H4v2H2v5h2V8h12v2h-2v2h2v-2h2V8h2V6h-2V4h-2V2zM6 20h2v2h2v-2H8v-2h12v-2h2v-5h-2v5H8v-2h2v-2H8v2H6v2H4v2h2v2z\" fill=\"currentColor\"/></svg>",
  "sync": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 9V7h12V5h2v2h2v2h-2v2h-2V9H4zm12 2h-2v2h2v-2zm0-6h-2V3h2v2zm4 12v-2H8v-2h2v-2H8v2H6v2H4v2h2v2h2v2h2v-2H8v-2h12z\" fill=\"currentColor\"/></svg>",
  "arrow-up": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z\" fill=\"currentColor\"/></svg>",
  "lock": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z\" fill=\"currentColor\"/></svg>",
  "lock-open": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15 2H9v2H7v2h2V4h6v4H4v14h16V8h-3V4h-2V2zm0 8h3v10H6V10h9zm-2 3h-2v4h2v-4z\" fill=\"currentColor\"/></svg>",
  "sun": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z\" fill=\"currentColor\"/></svg>",
  "moon": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z\"/></svg>",
  "coffee": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 4h18v7h-4v5H4V4zm14 5h2V6h-2v3zm-2-3H6v8h10V6zm3 14H3v-2h16v2z\" fill=\"currentColor\"/></svg>",
  "battery": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 5H2v14h18v-4h2V9h-2V5H4zm14 2v10H4V7h14z\" fill=\"currentColor\"/></svg>",
  "battery-charging": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 5H2v14h6v-2H4V7h4V5H4zm10 0h6v4h2v6h-2v4h-6v-2h4V7h-4V5zm-4 2h2v4h4v2h-2v2h-2v2h-2v-4H6v-2h2V9h2V7z\" fill=\"currentColor\"/></svg>",
  "hourglass": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18 2H6v6h2v2h2v4H8v2H6v6h12v-6h-2v-2h-2v-4h2V8h2V2zm-2 6h-2v2h-4V8H8V4h8v4zm-2 6v2h2v4H8v-4h2v-2h4z\" fill=\"currentColor\"/></svg>",
  "home": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z\" fill=\"currentColor\"/></svg>",
  "user": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z\" fill=\"currentColor\"/></svg>",
  "briefcase": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z\" fill=\"currentColor\"/></svg>",
  "calendar": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z\" fill=\"currentColor\"/></svg>",
  "mood-happy": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z\" fill=\"currentColor\"/></svg>",
  "mood-sad": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 8v-2h6v2h2v-2h-2v-2H9v2H7v2h2z\" fill=\"currentColor\"/></svg>",
  "mood-neutral": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm1 5H9v2h6v-2z\" fill=\"currentColor\"/></svg>",
  "gamepad": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M2 5h20v14H2V5zm18 12V7H4v10h16zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9zm6 0h2v2h-2V9zm4 4h-2v2h2v-2z\" fill=\"currentColor\"/></svg>",
  "dashboard": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 3h8v10H3V3zm2 2v6h4V5H5zm8-2h8v6h-8V3zm2 2v2h4V5h-4zm-2 6h8v10h-8V11zm2 2v6h4v-6h-4zM3 15h8v6H3v-6zm2 2v2h4v-2H5z\" fill=\"currentColor\"/></svg>",
  "sort": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 20H6V8H4V6h2V4h2v2h2v2H8v12zm2-12v2h2V8h-2zM4 8v2H2V8h2zm14-4h-2v12h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V4z\" fill=\"currentColor\"/></svg>",
  "bullseye": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18 2H6v2H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2V2zm0 2v2h2v12h-2v2H6v-2H4V6h2V4h12zm-8 6h4v4h-4v-4zM8 6h8v2H8V6zm0 10H6V8h2v8zm8 0v2H8v-2h8zm0 0h2V8h-2v8z\" fill=\"currentColor\"/></svg>",
  "map": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 2h2v2h2v2h-2v10H8V6H6V4h2V2zM4 8V6h2v2H4zm2 10v2H4v2H2V8h2v10h2zm0 0h2v-2H6v2zm6 0h-2v-2h2v2zm2-10V6h-2v2h2zm2 0h-2v10h-2v2h2v2h2v-2h2v-2h2v-2h2V2h-2v2h-2v2h-2v2zm0 0h2V6h2v10h-2v2h-2V8z\" fill=\"currentColor\"/></svg>",
  "article": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z\" fill=\"currentColor\"/></svg>",
  "note": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 2h18v14h-2v2h-2v-2h-2v2h2v2h-2v2H3V2zm2 2v16h8v-6h6V4H5z\" fill=\"currentColor\"/></svg>",
  "teach": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M9 2H5v4h4V2zm7 7V7H2v9h2v6h2v-6h2v6h2V9h6zm-5-7h11v14H11v-2h9V4h-9V2z\" fill=\"currentColor\"/></svg>",
  "downasaur": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z\" fill=\"currentColor\"/></svg>",
  "alert": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V9h2V7h2V5h2V3h2zM13 3h-2v2H9v2H7v2H5v2H3v2h2v-2h2V9h2V7h2V5h2V3zM13 7h-2v6h2V7zm0 8h-2v2h2v-2z\" fill=\"currentColor\"/></svg>",
  "plus": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z\" fill=\"currentColor\"/></svg>",
  "edit": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18 2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2H2v6h6v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h-2V4h-2V2zm0 8h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2v-2h2V8h2V6h2v2h2v2zM6 16H4v4h4v-2H6v-2z\" fill=\"currentColor\"/></svg>",
  "trash": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M16 2v4h6v2h-2v14H4V8H2V6h6V2h8zm-2 2h-4v2h4V4zm0 4H6v12h12V8h-4zm-5 2h2v8H9v-8zm6 0h-2v8h2v-8z\" fill=\"currentColor\"/></svg>",
  "eye": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z\" fill=\"currentColor\"/></svg>",
  "command": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 2H2v8h2V2zm16 0h2v8h-2V2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2v6zm-4 6v-4h4v4h-4zM20 2h-4v2h4V2zM2 14h2v8H2v-8zm14 6h4v2h-4v-2zm6-6h-2v8h2v-8z\" fill=\"currentColor\"/></svg>",
  "android": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M2 5h2v2H2V5zm4 4H4V7h2v2zm2 0H6v2H4v2H2v6h20v-6h-2v-2h-2V9h2V7h2V5h-2v2h-2v2h-2V7H8v2zm0 0h8v2h2v2h2v4H4v-4h2v-2h2V9zm2 4H8v2h2v-2zm4 0h2v2h-2v-2z\" fill=\"currentColor\"/></svg>",
  "server": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 3h18v18H3V3zm2 2v6h14V5H5zm14 8H5v6h14v-6zM7 7h2v2H7V7zm2 8H7v2h2v-2z\" fill=\"currentColor\"/></svg>",
  "loader": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 2h-2v6h2V2zm0 14h-2v6h2v-6zm9-5v2h-v-2h6zM8 13v-2H2v2h6zm7-6h2v2h-2V7zm4-2h-2v2h2V5zM9 7H7v2h2V7zM5 5h2v2H5V5zm10 12h2v2h2v-2h-2v-2h-2v2zm-8 0v-2h2v2H7v2H5v-2h2z\" fill=\"currentColor\"/></svg>",
  "layout": "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M2 5h20v14H2V5zm2 2v4h16V7H4zm16 6H10v4h10v-4zM8 17v-4H4v4h4z\" fill=\"currentColor\"/></svg>"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/pixel-icons.js", error: String((e && e.message) || e) }); }

// components/agent/ActivityReadout.jsx
try { (() => {
/* ============================================================
   ActivityReadout — a terminal "screen" showing what Guimarães is
   doing right now: a prompt line with a blinking cursor, recent
   log lines, and an elapsed timer. The widget's live heartbeat.
   ============================================================ */
const ACT_CSS = `
.gx-act{ --_c: var(--accent);
  font-family: var(--type-readout); font-size: var(--text-md); line-height: 1.35;
  background: var(--surface-inset); border: var(--border-w) solid var(--border);
  box-shadow: var(--bevel-down); padding: var(--sp-3) var(--sp-4); }
.gx-act__log{ display:flex; flex-direction:column; gap:1px; margin-bottom: var(--sp-2); }
.gx-act__line{ color: var(--text-quaternary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.gx-act__line b{ color: var(--text-tertiary); font-weight:400; }
.gx-act__now{ display:flex; align-items:baseline; gap: var(--sp-2); color: var(--_c); }
.gx-act__prompt{ color: var(--_c); }
.gx-act__txt{ color: var(--text-primary); flex:1; }
.gx-act__cur{ display:inline-block; width: 9px; height: 1.05em; background: var(--_c); transform: translateY(2px);
  animation: gx-act-cur 1s steps(1,end) infinite; }
@keyframes gx-act-cur{ 0%,50%{opacity:1} 51%,100%{opacity:0} }
.gx-act__time{ font-family: var(--type-readout); font-size: var(--text-sm); color: var(--text-tertiary); white-space:nowrap; }
.gx-act--idle{ --_c: var(--text-tertiary); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const TONE_VAR = {
  working: 'var(--accent)',
  learning: 'var(--c-skill)',
  idle: 'var(--text-tertiary)'
};
function ActivityReadout({
  action = '待机中…',
  lines = [],
  elapsed,
  state = 'working',
  prompt = '▸',
  cursor = true,
  className = '',
  style = {}
}) {
  ensureCSS('gx-act-css', ACT_CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-act', state === 'idle' && 'gx-act--idle', className].filter(Boolean).join(' '),
    style: {
      '--_c': TONE_VAR[state] || TONE_VAR.working,
      ...style
    }
  }, lines.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "gx-act__log"
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "gx-act__line"
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "gx-act__now"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx-act__prompt"
  }, prompt), /*#__PURE__*/React.createElement("span", {
    className: "gx-act__txt"
  }, action, cursor && /*#__PURE__*/React.createElement("span", {
    className: "gx-act__cur"
  })), elapsed && /*#__PURE__*/React.createElement("span", {
    className: "gx-act__time"
  }, elapsed)));
}
Object.assign(__ds_scope, { ActivityReadout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/ActivityReadout.jsx", error: String((e && e.message) || e) }); }

// components/agent/LevelBadge.jsx
try { (() => {
/* ============================================================
   LevelBadge — Guimarães' evolution + level display: a big pixel
   level numeral, the current evolution-stage name, and an XP meter
   to the next level.
   ============================================================ */
const LV_CSS = `
.gx-lv{ display:flex; align-items:center; gap: var(--sp-4);
  padding: var(--sp-4); background: var(--surface-inset);
  border: var(--border-w) solid var(--border); }
.gx-lv__chip{ display:flex; flex-direction:column; align-items:center; justify-content:center;
  width: 64px; padding: var(--sp-2) var(--sp-3);
  background: color-mix(in oklab, var(--c-level) 12%, var(--surface-raised));
  border: var(--border-w) solid color-mix(in oklab, var(--c-level) 45%, var(--border)); }
.gx-lv__kicker{ font-family: var(--type-display); font-size: 8px; letter-spacing: var(--tracking-caps);
  color: var(--c-level); }
.gx-lv__num{ font-family: var(--type-display); font-size: var(--text-2xl); color: var(--c-level);
  line-height: 1; text-shadow: var(--shadow-1); }
.gx-lv__main{ flex:1; min-width:0; display:flex; flex-direction:column; gap: var(--sp-2); }
.gx-lv__stagerow{ display:flex; align-items:center; gap: var(--sp-2); }
.gx-lv__stage{ font-family: var(--type-ui); font-size: var(--text-md); color: var(--text-primary); }
.gx-lv__evo{ font-family: var(--type-ui); font-size: var(--text-2xs); letter-spacing: var(--tracking-wide);
  text-transform: uppercase; color: var(--text-quaternary); }
.gx-lv__xprow{ display:flex; align-items:center; justify-content:space-between;
  font-family: var(--type-readout); font-size: var(--text-sm); color: var(--text-tertiary); }
.gx-lv__track{ display:flex; gap:2px; padding:3px; height:14px;
  background: var(--surface); border: var(--border-w) solid var(--border); box-shadow: var(--bevel-down); }
.gx-lv__cell{ flex:1 1 0; background: color-mix(in oklab, var(--c-level) 12%, transparent); }
.gx-lv__cell--on{ background: var(--c-level); box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--c-level) 60%, #fff); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function LevelBadge({
  level = 1,
  stage = '学徒',
  evo,
  xp = 0,
  xpMax = 100,
  segments = 20,
  className = '',
  style = {}
}) {
  ensureCSS('gx-lv-css', LV_CSS);
  const pct = Math.max(0, Math.min(1, xpMax ? xp / xpMax : 0));
  const on = Math.round(pct * segments);
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-lv', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx-lv__chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx-lv__kicker"
  }, "LV"), /*#__PURE__*/React.createElement("span", {
    className: "gx-lv__num"
  }, level)), /*#__PURE__*/React.createElement("div", {
    className: "gx-lv__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx-lv__stagerow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx-lv__stage"
  }, stage), evo && /*#__PURE__*/React.createElement("span", {
    className: "gx-lv__evo"
  }, evo)), /*#__PURE__*/React.createElement("div", {
    className: "gx-lv__xprow"
  }, /*#__PURE__*/React.createElement("span", null, "\u7ECF\u9A8C\u503C"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-level)'
    }
  }, xp.toLocaleString(), " / ", xpMax.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "gx-lv__track",
    role: "progressbar",
    "aria-valuenow": xp,
    "aria-valuemin": 0,
    "aria-valuemax": xpMax
  }, Array.from({
    length: segments
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'gx-lv__cell' + (i < on ? ' gx-lv__cell--on' : '')
  })))));
}
Object.assign(__ds_scope, { LevelBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/LevelBadge.jsx", error: String((e && e.message) || e) }); }

// components/agent/SkillNode.jsx
try { (() => {
/* ============================================================
   SkillNode — one node in Guimarães' skill tree. Four states:
   mastered · learning (with progress) · available · locked.
   ============================================================ */
const SK_CSS = `
.gx-skill{ --_c: var(--c-skill);
  display:flex; flex-direction:column; align-items:center; gap: var(--sp-2);
  width: 92px; padding: var(--sp-3); text-align:center;
  background: var(--surface-inset); border: var(--border-w) solid var(--border);
  cursor: default; transition: border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
.gx-skill__icon{ display:inline-flex; align-items:center; justify-content:center;
  width: 40px; height: 40px; color: var(--text-tertiary);
  background: var(--surface-raised); border: var(--border-w) solid var(--border); }
.gx-skill__name{ font-family: var(--type-ui); font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.3; }
.gx-skill__pips{ display:flex; gap:2px; }
.gx-skill__pip{ width:7px; height:7px; background: var(--border-strong); }
.gx-skill__pip--on{ background: var(--_c); box-shadow: 0 0 5px 0 var(--_c); }
/* mastered */
.gx-skill--mastered{ border-color: color-mix(in oklab, var(--_c) 50%, var(--border)); background: color-mix(in oklab, var(--_c) 8%, var(--surface-inset)); }
.gx-skill--mastered .gx-skill__icon{ color: var(--_c); border-color: color-mix(in oklab, var(--_c) 55%, var(--border)); }
.gx-skill--mastered .gx-skill__name{ color: var(--text-primary); }
/* learning */
.gx-skill--learning{ border-color: color-mix(in oklab, var(--_c) 45%, var(--border)); cursor: pointer; }
.gx-skill--learning .gx-skill__icon{ color: var(--_c); animation: gx-skill-blink 1.2s steps(1,end) infinite; }
@keyframes gx-skill-blink{ 0%,70%{opacity:1} 71%,100%{opacity:.45} }
/* available */
.gx-skill--available{ cursor: pointer; }
.gx-skill--available:hover{ border-color: var(--border-strong); background: var(--surface-raised); }
.gx-skill--available .gx-skill__icon{ color: var(--text-secondary); }
/* locked */
.gx-skill--locked{ opacity: .5; }
.gx-skill--locked .gx-skill__icon{ color: var(--text-quaternary); }
.gx-skill__bar{ width: 100%; height: 5px; display:flex; gap:1px; }
.gx-skill__bar i{ flex:1; background: var(--border-strong); }
.gx-skill__bar i.on{ background: var(--_c); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
function SkillNode({
  icon = 'lightbulb',
  name,
  state = 'available',
  level = 0,
  maxLevel = 3,
  progress = 0,
  onClick,
  className = '',
  style = {}
}) {
  ensureCSS('gx-skill-css', SK_CSS);
  const displayIcon = state === 'locked' ? 'lock' : icon;
  const pips = Math.max(maxLevel, 1);
  const segs = 8,
    on = Math.round(Math.max(0, Math.min(1, progress)) * segs);
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-skill', `gx-skill--${state}`, className].filter(Boolean).join(' '),
    style: style,
    onClick: state !== 'locked' && state !== 'mastered' ? onClick : undefined,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick && state !== 'locked' ? 0 : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx-skill__icon",
    dangerouslySetInnerHTML: {
      __html: iconHTML(displayIcon, 22)
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gx-skill__name"
  }, name), state === 'learning' ? /*#__PURE__*/React.createElement("span", {
    className: "gx-skill__bar"
  }, Array.from({
    length: segs
  }, (_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: i < on ? 'on' : ''
  }))) : /*#__PURE__*/React.createElement("span", {
    className: "gx-skill__pips"
  }, Array.from({
    length: pips
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'gx-skill__pip' + (i < level ? ' gx-skill__pip--on' : '')
  }))));
}
Object.assign(__ds_scope, { SkillNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/SkillNode.jsx", error: String((e && e.message) || e) }); }

// components/agent/TaskItem.jsx
try { (() => {
/* ============================================================
   TaskItem — a row in Guimarães' TODO / work queue. A pixel
   checkbox, the task title, and right-side meta (tag / time).
   States: todo · active (in progress) · done.
   ============================================================ */
const TASK_CSS = `
.gx-task{ display:flex; align-items:center; gap: var(--sp-3);
  padding: var(--sp-3); background: var(--surface-inset);
  border: var(--border-w) solid var(--border);
  transition: border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
.gx-task + .gx-task{ margin-top: 2px; }
.gx-task__box{ flex:0 0 auto; width:20px; height:20px; display:inline-flex; align-items:center; justify-content:center;
  color: var(--text-quaternary); background: var(--surface-raised); border: var(--border-w) solid var(--border-strong);
  cursor:pointer; }
.gx-task__box:focus-visible{ outline:none; box-shadow: var(--focus-ring); }
.gx-task__main{ flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
.gx-task__title{ font-family: var(--type-ui); font-size: var(--text-sm); color: var(--text-secondary);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.gx-task__meta{ display:flex; align-items:center; gap: var(--sp-2);
  font-family: var(--type-readout); font-size: var(--text-xs); color: var(--text-quaternary); }
.gx-task__right{ display:flex; align-items:center; gap: var(--sp-2); flex:0 0 auto; }
/* active */
.gx-task--active{ border-color: color-mix(in oklab, var(--accent) 45%, var(--border)); background: color-mix(in oklab, var(--accent) 7%, var(--surface-inset)); }
.gx-task--active .gx-task__box{ color: var(--accent); border-color: var(--accent-deep); }
.gx-task--active .gx-task__box svg{ animation: gx-task-spin 1.4s steps(8,end) infinite; }
@keyframes gx-task-spin{ from{transform:rotate(0)} to{transform:rotate(360deg)} }
.gx-task--active .gx-task__title{ color: var(--text-primary); }
/* done */
.gx-task--done .gx-task__box{ color: var(--on-accent); background: var(--accent); border-color: var(--accent-deep); }
.gx-task--done .gx-task__title{ color: var(--text-quaternary); text-decoration: line-through; }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
function TaskItem({
  title,
  status = 'todo',
  time,
  meta,
  right,
  onToggle,
  className = '',
  style = {}
}) {
  ensureCSS('gx-task-css', TASK_CSS);
  const boxIcon = status === 'done' ? 'check' : status === 'active' ? 'loader' : null;
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-task', `gx-task--${status}`, className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gx-task__box",
    "aria-pressed": status === 'done',
    "aria-label": status === 'done' ? '标记为未完成' : '标记为完成',
    onClick: onToggle,
    dangerouslySetInnerHTML: {
      __html: boxIcon ? iconHTML(boxIcon, 14) : ''
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "gx-task__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx-task__title"
  }, title), (time || meta) && /*#__PURE__*/React.createElement("span", {
    className: "gx-task__meta"
  }, time && /*#__PURE__*/React.createElement("span", null, time), meta)), right && /*#__PURE__*/React.createElement("div", {
    className: "gx-task__right"
  }, right));
}
Object.assign(__ds_scope, { TaskItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/TaskItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/* ============================================================
   Badge — a compact status pill with a pixel status dot.
   Used for the agent's live state (working / idle / sleeping)
   and small counters.
   ============================================================ */
const BADGE_CSS = `
.gx-badge{
  --_c: var(--accent);
  display:inline-flex; align-items:center; gap: var(--sp-2);
  font-family: var(--type-ui); font-size: var(--text-2xs); letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  height: 20px; padding: 0 var(--sp-3);
  color: var(--_c); background: color-mix(in oklab, var(--_c) 14%, var(--surface-inset));
  border: var(--border-w) solid color-mix(in oklab, var(--_c) 40%, var(--surface-inset));
  white-space: nowrap;
}
.gx-badge__dot{ width:6px; height:6px; background: var(--_c); box-shadow: 0 0 6px 0 var(--_c); }
.gx-badge--pulse .gx-badge__dot{ animation: gx-badge-pulse 1.1s steps(1,end) infinite; }
@keyframes gx-badge-pulse{ 0%,60%{opacity:1} 61%,100%{opacity:.25} }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const TONE_VAR = {
  active: 'var(--c-active)',
  idle: 'var(--status-idle)',
  warn: 'var(--status-warn)',
  error: 'var(--status-error)',
  level: 'var(--c-level)',
  skill: 'var(--c-skill)',
  stat: 'var(--c-stat)',
  mood: 'var(--c-mood)',
  neutral: 'var(--text-tertiary)'
};
function Badge({
  children,
  tone = 'active',
  dot = true,
  pulse = false,
  className = '',
  style = {}
}) {
  ensureCSS('gx-badge-css', BADGE_CSS);
  const cls = ['gx-badge', pulse && 'gx-badge--pulse', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: {
      '--_c': TONE_VAR[tone] || TONE_VAR.neutral,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "gx-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/* ============================================================
   Button — the pixel action button. Hard 2px border + offset
   shadow that "presses in" on :active. Variants map to intent.
   ============================================================ */
const BTN_CSS = `
.gx-btn{
  --_bg: var(--surface-raised); --_fg: var(--text-primary); --_bd: var(--border-strong);
  font-family: var(--type-ui); font-size: var(--text-sm); letter-spacing: var(--tracking-base);
  display: inline-flex; align-items: center; justify-content: center; gap: var(--sp-3);
  height: var(--control-h); padding: 0 var(--sp-5); min-width: var(--control-h);
  color: var(--_fg); background: var(--_bg);
  border: var(--border-w) solid var(--_bd);
  box-shadow: var(--shadow-1);
  cursor: pointer; user-select: none; text-decoration: none; white-space: nowrap;
  transition: transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  image-rendering: pixelated;
}
.gx-btn:hover{ background: color-mix(in oklab, var(--_bg) 86%, var(--white)); }
.gx-btn:active{ transform: translate(2px,2px); box-shadow: none; }
.gx-btn:focus-visible{ outline: none; box-shadow: var(--focus-ring); }
.gx-btn[disabled]{ opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; filter: saturate(.5); }
.gx-btn--primary{ --_bg: var(--accent); --_fg: var(--on-accent); --_bd: var(--accent-deep); font-weight: var(--weight-bold); }
.gx-btn--primary:hover{ background: color-mix(in oklab, var(--accent) 88%, var(--white)); }
.gx-btn--secondary{ --_bg: var(--surface-raised); --_fg: var(--text-primary); --_bd: var(--border-strong); }
.gx-btn--ghost{ --_bg: transparent; --_fg: var(--text-secondary); --_bd: transparent; box-shadow: none; }
.gx-btn--ghost:hover{ background: var(--surface-hover); }
.gx-btn--ghost:active{ transform: none; background: var(--surface); }
.gx-btn--danger{ --_bg: var(--red); --_fg: var(--ink-950); --_bd: var(--red-deep); font-weight: var(--weight-bold); }
.gx-btn--sm{ height: var(--control-h-sm); padding: 0 var(--sp-4); font-size: var(--text-xs); }
.gx-btn--lg{ height: var(--control-h-lg); padding: 0 var(--sp-6); font-size: var(--text-md); }
.gx-btn--block{ width: 100%; }
.gx-btn__i{ display:inline-flex; width:1em; height:1em; line-height:0; }
.gx-btn--lg .gx-btn__i{ width:1.1em; height:1.1em; }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  block = false,
  disabled = false,
  type = 'button',
  className = '',
  onClick,
  style = {}
}) {
  ensureCSS('gx-btn-css', BTN_CSS);
  const px = size === 'lg' ? 18 : size === 'sm' ? 13 : 15;
  const cls = ['gx-btn', `gx-btn--${variant}`, size !== 'md' && `gx-btn--${size}`, block && 'gx-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "gx-btn__i",
    dangerouslySetInnerHTML: {
      __html: iconHTML(icon, px)
    }
  }), children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "gx-btn__i",
    dangerouslySetInnerHTML: {
      __html: iconHTML(iconRight, px)
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* ============================================================
   Icon — renders a self-hosted Pixelarticons glyph (24px grid,
   fill=currentColor so it tints with `color`). Requires the
   global icon map (assets/pixel-icons.js) to be loaded on the page.
   ============================================================ */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  className = '',
  style = {},
  label
}) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  let svg = map[name] || '';
  if (svg) {
    svg = svg.replace('<svg ', `<svg width="${size}" height="${size}" style="display:block;image-rendering:pixelated" `);
  }
  return /*#__PURE__*/React.createElement("span", {
    className: 'gx-icon ' + className,
    role: label ? 'img' : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : true,
    title: label || undefined,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
/* ============================================================
   IconButton — square, icon-only pixel button. Used for window
   controls (close/min), toolbars, and the widget's quick actions.
   ============================================================ */
const IBTN_CSS = `
.gx-ibtn{
  --_bg: transparent; --_fg: var(--text-tertiary); --_bd: transparent;
  display:inline-flex; align-items:center; justify-content:center;
  width: var(--control-h); height: var(--control-h); padding:0;
  color: var(--_fg); background: var(--_bg);
  border: var(--border-w) solid var(--_bd);
  cursor:pointer; user-select:none; image-rendering:pixelated;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.gx-ibtn:hover{ background: var(--surface-hover); color: var(--text-primary); }
.gx-ibtn:active{ transform: translate(1px,1px); }
.gx-ibtn:focus-visible{ outline:none; box-shadow: var(--focus-ring); }
.gx-ibtn[disabled]{ opacity:.4; cursor:not-allowed; }
.gx-ibtn--solid{ --_bg: var(--surface-raised); --_bd: var(--border-strong); --_fg: var(--text-primary); box-shadow: var(--shadow-1); }
.gx-ibtn--solid:active{ transform: translate(2px,2px); box-shadow:none; }
.gx-ibtn--accent{ --_bg: var(--accent); --_bd: var(--accent-deep); --_fg: var(--on-accent); box-shadow: var(--shadow-1); }
.gx-ibtn--danger:hover{ background: var(--red-soft); color: var(--red); }
.gx-ibtn--sm{ width: var(--control-h-sm); height: var(--control-h-sm); }
.gx-ibtn--lg{ width: var(--control-h-lg); height: var(--control-h-lg); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  style = {}
}) {
  ensureCSS('gx-ibtn-css', IBTN_CSS);
  const px = size === 'lg' ? 22 : size === 'sm' ? 14 : 18;
  const cls = ['gx-ibtn', variant !== 'ghost' && `gx-ibtn--${variant}`, size !== 'md' && `gx-ibtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    disabled: disabled,
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: style,
    dangerouslySetInnerHTML: {
      __html: iconHTML(icon, px)
    }
  });
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/* ============================================================
   Tag — a small labelled chip with an optional pixel icon.
   Used for skill categories, task labels, and metadata.
   ============================================================ */
const TAG_CSS = `
.gx-tag{
  --_c: var(--text-tertiary);
  display:inline-flex; align-items:center; gap: var(--sp-2);
  font-family: var(--type-ui); font-size: var(--text-xs); letter-spacing: var(--tracking-base);
  height: 22px; padding: 0 var(--sp-3);
  color: var(--_c);
  background: var(--surface-inset);
  border: var(--border-w) solid var(--border);
  white-space: nowrap;
}
.gx-tag--fill{ background: color-mix(in oklab, var(--_c) 16%, var(--surface-inset)); border-color: color-mix(in oklab, var(--_c) 38%, var(--surface-inset)); }
.gx-tag__i{ display:inline-flex; width:13px; height:13px; line-height:0; color: var(--_c); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
const TONE_VAR = {
  neutral: 'var(--text-tertiary)',
  level: 'var(--c-level)',
  skill: 'var(--c-skill)',
  stat: 'var(--c-stat)',
  mood: 'var(--c-mood)',
  active: 'var(--c-active)',
  warn: 'var(--status-warn)'
};
function Tag({
  children,
  tone = 'neutral',
  icon,
  fill = false,
  className = '',
  style = {}
}) {
  ensureCSS('gx-tag-css', TAG_CSS);
  const cls = ['gx-tag', fill && 'gx-tag--fill', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: {
      '--_c': TONE_VAR[tone] || TONE_VAR.neutral,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "gx-tag__i",
    dangerouslySetInnerHTML: {
      __html: iconHTML(icon, 13)
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
/* ============================================================
   ProgressBar — a segmented pixel meter. Cells fill left→right.
   Drives XP bars, vitals (energy/mood), and any 0–100 value.
   ============================================================ */
const PB_CSS = `
.gx-pb{ display:flex; flex-direction:column; gap: var(--sp-2); }
.gx-pb__head{ display:flex; align-items:center; justify-content:space-between; gap: var(--sp-3);
  font-family: var(--type-ui); font-size: var(--text-xs); color: var(--text-tertiary); }
.gx-pb__val{ font-family: var(--type-readout); font-size: var(--text-sm); color: var(--_c); letter-spacing: .03em; }
.gx-pb__track{
  --_c: var(--accent);
  display:flex; gap: 2px; align-items:stretch;
  padding: 3px; height: var(--_h, 16px);
  background: var(--surface-inset);
  border: var(--border-w) solid var(--border);
  box-shadow: var(--bevel-down);
}
.gx-pb__cell{ flex:1 1 0; background: color-mix(in oklab, var(--_c) 12%, transparent); }
.gx-pb__cell--on{ background: var(--_c); box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--_c) 60%, #fff); }
.gx-pb--solid .gx-pb__track{ gap:0; padding:2px; }
.gx-pb--solid .gx-pb__bar{ background: var(--_c); box-shadow: inset 0 -2px 0 0 color-mix(in oklab, var(--_c) 55%, #000), inset 0 2px 0 0 color-mix(in oklab, var(--_c) 70%, #fff); transition: width var(--dur-base) var(--ease-step); }
.gx-pb--solid .gx-pb__fillwrap{ flex:1; display:flex; }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const TONE_VAR = {
  accent: 'var(--accent)',
  level: 'var(--c-level)',
  skill: 'var(--c-skill)',
  stat: 'var(--c-stat)',
  mood: 'var(--c-mood)',
  energy: 'var(--c-energy)',
  warn: 'var(--status-warn)',
  error: 'var(--status-error)'
};
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'accent',
  segments = 12,
  variant = 'segments',
  height = 16,
  label,
  showValue = false,
  valueText,
  className = '',
  style = {}
}) {
  ensureCSS('gx-pb-css', PB_CSS);
  const pct = Math.max(0, Math.min(1, max ? value / max : 0));
  const color = TONE_VAR[tone] || TONE_VAR.accent;
  const filled = Math.round(pct * segments);
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-pb', variant === 'solid' && 'gx-pb--solid', className].filter(Boolean).join(' '),
    style: style
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "gx-pb__head"
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "gx-pb__val",
    style: {
      '--_c': color
    }
  }, valueText != null ? valueText : `${Math.round(pct * 100)}%`)), /*#__PURE__*/React.createElement("div", {
    className: "gx-pb__track",
    style: {
      '--_c': color,
      '--_h': height + 'px'
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, variant === 'solid' ? /*#__PURE__*/React.createElement("div", {
    className: "gx-pb__fillwrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx-pb__bar",
    style: {
      width: pct * 100 + '%'
    }
  })) : Array.from({
    length: segments
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'gx-pb__cell' + (i < filled ? ' gx-pb__cell--on' : '')
  }))));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
/* ============================================================
   Stat — a big pixel number readout for the "today's work" panel
   (tasks done, focus minutes, files touched, streak…).
   ============================================================ */
const STAT_CSS = `
.gx-stat{ --_c: var(--c-stat); display:flex; flex-direction:column; gap: var(--sp-2);
  padding: var(--sp-4); background: var(--surface-inset); border: var(--border-w) solid var(--border); }
.gx-stat__top{ display:flex; align-items:center; gap: var(--sp-2); color: var(--text-tertiary); }
.gx-stat__i{ display:inline-flex; width:14px; height:14px; line-height:0; color: var(--_c); }
.gx-stat__label{ font-family: var(--type-ui); font-size: var(--text-2xs); letter-spacing: var(--tracking-wide); text-transform: uppercase; }
.gx-stat__num{ font-family: var(--type-display); font-size: var(--text-lg); color: var(--text-primary); line-height: 1.1; }
.gx-stat__unit{ font-family: var(--type-ui); font-size: var(--text-xs); color: var(--text-tertiary); margin-left: var(--sp-2); }
.gx-stat__delta{ display:inline-flex; align-items:center; gap:3px; font-family: var(--type-readout); font-size: var(--text-sm); }
.gx-stat__delta--up{ color: var(--green); } .gx-stat__delta--down{ color: var(--coral); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
const TONE_VAR = {
  stat: 'var(--c-stat)',
  level: 'var(--c-level)',
  skill: 'var(--c-skill)',
  mood: 'var(--c-mood)',
  energy: 'var(--c-energy)',
  accent: 'var(--accent)'
};
function Stat({
  icon,
  value,
  unit,
  label,
  delta,
  tone = 'stat',
  className = '',
  style = {}
}) {
  ensureCSS('gx-stat-css', STAT_CSS);
  const up = typeof delta === 'number' ? delta >= 0 : null;
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-stat', className].filter(Boolean).join(' '),
    style: {
      '--_c': TONE_VAR[tone] || TONE_VAR.stat,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx-stat__top"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "gx-stat__i",
    dangerouslySetInnerHTML: {
      __html: iconHTML(icon, 14)
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gx-stat__label"
  }, label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "gx-stat__num"
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    className: "gx-stat__unit"
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    className: 'gx-stat__delta ' + (up ? 'gx-stat__delta--up' : 'gx-stat__delta--down')
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: iconHTML(up ? 'arrow-up' : 'chevron-down', 12)
    }
  }), typeof delta === 'number' ? (up ? '+' : '') + delta : delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBar.jsx
try { (() => {
/* ============================================================
   StatBar — a labelled vital row: pixel icon + name + value +
   a segmented meter. The building block of the Status panel
   (energy / mood / focus / hunger).
   ============================================================ */
const SB_CSS = `
.gx-sb{ --_c: var(--accent); display:flex; flex-direction:column; gap: var(--sp-2); }
.gx-sb__top{ display:flex; align-items:center; gap: var(--sp-3); }
.gx-sb__i{ display:inline-flex; width:16px; height:16px; line-height:0; color: var(--_c); }
.gx-sb__label{ font-family: var(--type-ui); font-size: var(--text-sm); color: var(--text-secondary); flex:1; }
.gx-sb__val{ font-family: var(--type-readout); font-size: var(--text-md); color: var(--_c); letter-spacing:.03em; }
.gx-sb__track{ display:flex; gap:2px; padding:3px; height:14px;
  background: var(--surface-inset); border: var(--border-w) solid var(--border); box-shadow: var(--bevel-down); }
.gx-sb__cell{ flex:1 1 0; background: color-mix(in oklab, var(--_c) 12%, transparent); }
.gx-sb__cell--on{ background: var(--_c); box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--_c) 60%, #fff); }
.gx-sb--low{ --_c: var(--status-warn); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
const TONE_VAR = {
  energy: 'var(--c-energy)',
  mood: 'var(--c-mood)',
  focus: 'var(--c-stat)',
  skill: 'var(--c-skill)',
  level: 'var(--c-level)',
  accent: 'var(--accent)'
};
function StatBar({
  icon,
  label,
  value = 0,
  max = 100,
  tone = 'energy',
  segments = 14,
  valueText,
  lowAt = 25,
  className = '',
  style = {}
}) {
  ensureCSS('gx-sb-css', SB_CSS);
  const pct = Math.max(0, Math.min(1, max ? value / max : 0));
  const filled = Math.round(pct * segments);
  const low = pct * 100 <= lowAt;
  const color = TONE_VAR[tone] || TONE_VAR.energy;
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-sb', low && 'gx-sb--low', className].filter(Boolean).join(' '),
    style: {
      '--_c': low ? 'var(--status-warn)' : color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx-sb__top"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "gx-sb__i",
    dangerouslySetInnerHTML: {
      __html: iconHTML(icon, 16)
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gx-sb__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "gx-sb__val"
  }, valueText != null ? valueText : Math.round(pct * 100))), /*#__PURE__*/React.createElement("div", {
    className: "gx-sb__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-label": typeof label === 'string' ? label : undefined
  }, Array.from({
    length: segments
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'gx-sb__cell' + (i < filled ? ' gx-sb__cell--on' : '')
  }))));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/mascot/PixelSprite.jsx
try { (() => {
/* ============================================================
   PixelSprite — renders Guimarães (the agent mascot) as crisp
   pixel art on a <canvas>, with a built-in idle/blink/work
   animation loop and a gentle breathing bob.

   Sprite data is authored as a string grid (one char per pixel);
   the default art is Guimarães, a floating CRT-headed agent.
   Pass your own `frames` + `palette` to render any 16-wide sprite.
   ============================================================ */

/* palette: char -> color (or null = transparent) */
const GUIMARAES_PALETTE = {
  '.': null,
  K: '#0e0b16',
  // outline / void
  D: '#3a3550',
  // body shadow
  M: '#8d86b8',
  // body mid (lavender steel)
  L: '#c4bee6',
  // body highlight
  S: '#0c2a24',
  // screen (dark green-black)
  G: '#54e6a0',
  // green glow (eyes, antenna, smile)
  g: '#1f7a52',
  // green deep (shade)
  W: '#eafff4',
  // eye shine
  A: '#ffcb47' // amber accent
};

/* Each frame is 16 rows × 16 cols. */
const F_IDLE = ['......KGGK......', '......KggK......', '.......KK.......', '...KKKKKKKKKK...', '..KLLLLLLLLLLK..', '..KLMMMMMMMMLK..', '.KKLSSSSSSSSLKK.', '..KLSWGSSWGSLK..', '..KLSGGSSGGSLK..', '..KLSSSGGSSSLK..', '..KLSSSSSSSSLK..', '..KLMMMMMMMMLK..', '...KKKKKKKKKK...', '.....KMMMMK.....', '.....KDDDDK.....', '......KKKK......'];

/* blink: eyes closed (dark-green dashes), smile kept */
const F_BLINK = ['......KGGK......', '......KggK......', '.......KK.......', '...KKKKKKKKKK...', '..KLLLLLLLLLLK..', '..KLMMMMMMMMLK..', '.KKLSSSSSSSSLKK.', '..KLSSSSSSSSLK..', '..KLSggSSggSLK..', '..KLSSSGGSSSLK..', '..KLSSSSSSSSLK..', '..KLMMMMMMMMLK..', '...KKKKKKKKKK...', '.....KMMMMK.....', '.....KDDDDK.....', '......KKKK......'];

/* working: eyes shifted down (looking at the task), neutral mouth */
const F_WORK = ['......KGGK......', '......KGGK......', '.......KK.......', '...KKKKKKKKKK...', '..KLLLLLLLLLLK..', '..KLMMMMMMMMLK..', '.KKLSSSSSSSSLKK.', '..KLSSSSSSSSLK..', '..KLSWGSSWGSLK..', '..KLSGGSSGGSLK..', '..KLSSSSSSSSLK..', '..KLMMMMMMMMLK..', '...KKKKKKKKKK...', '.....KMMMMK.....', '.....KDDDDK.....', '......KKKK......'];

/* sleeping: eyes fully closed, dim, no antenna glow */
const F_SLEEP = ['......KggK......', '......KKKK......', '.......KK.......', '...KKKKKKKKKK...', '..KLLLLLLLLLLK..', '..KLMMMMMMMMLK..', '.KKLSSSSSSSSLKK.', '..KLSSSSSSSSLK..', '..KLSggSSggSLK..', '..KLSSSSSSSSLK..', '..KLSSSSSSSSLK..', '..KLMMMMMMMMLK..', '...KKKKKKKKKK...', '.....KMMMMK.....', '.....KDDDDK.....', '......KKKK......'];
const GUIMARAES_FRAMES = {
  idle: F_IDLE,
  blink: F_BLINK,
  work: F_WORK,
  sleep: F_SLEEP,
  happy: F_IDLE
};

/* animation timelines: [frameKey, bobOffset(px), holdMs] */
const TIMELINES = {
  idle: [['idle', 0, 1600], ['idle', 1, 1400], ['blink', 1, 130], ['idle', 0, 1200]],
  working: [['work', 0, 360], ['work', 1, 360]],
  happy: [['idle', 0, 240], ['idle', -1, 240], ['blink', 0, 160]],
  sleeping: [['sleep', 0, 1500], ['sleep', 1, 1500]]
};
function PixelSprite({
  state = 'idle',
  scale = 7,
  frames = GUIMARAES_FRAMES,
  palette = GUIMARAES_PALETTE,
  shadow = true,
  glow = false,
  className = '',
  style = {}
}) {
  const {
    useRef,
    useEffect
  } = React;
  const canvasRef = useRef(null);
  const rows = frames.idle.length;
  const cols = frames.idle[0].length;
  const bobRoom = 2; // px of vertical headroom for the bob

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = cols * scale;
    canvas.height = (rows + bobRoom) * scale;
    const timeline = TIMELINES[state] || TIMELINES.idle;
    let step = 0,
      raf,
      timer;
    const draw = () => {
      const [frameKey, bob] = timeline[step];
      const grid = frames[frameKey] || frames.idle;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const yOff = (bobRoom + bob) * scale;
      for (let r = 0; r < grid.length; r++) {
        const row = grid[r];
        for (let c = 0; c < row.length; c++) {
          const col = palette[row[c]];
          if (!col) continue;
          ctx.fillStyle = col;
          ctx.fillRect(c * scale, r * scale + yOff, scale, scale);
        }
      }
    };
    const tick = () => {
      draw();
      const hold = timeline[step][2] || 400;
      step = (step + 1) % timeline.length;
      timer = setTimeout(() => {
        raf = requestAnimationFrame(tick);
      }, hold);
    };
    tick();
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [state, scale, frames, palette, rows, cols]);
  return /*#__PURE__*/React.createElement("span", {
    className: 'gx-sprite ' + className,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      imageRendering: 'pixelated',
      filter: glow ? 'drop-shadow(0 0 6px rgba(84,230,160,0.55))' : 'none',
      display: 'block'
    }
  }), shadow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: cols * scale * 0.6,
      height: scale * 1.4,
      marginTop: -scale * 0.5,
      background: 'radial-gradient(ellipse at center, rgba(8,5,16,0.55) 0%, rgba(8,5,16,0) 70%)',
      borderRadius: '50%'
    }
  }));
}
Object.assign(__ds_scope, { GUIMARAES_PALETTE, GUIMARAES_FRAMES, PixelSprite });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mascot/PixelSprite.jsx", error: String((e && e.message) || e) }); }

// components/surface/Panel.jsx
try { (() => {
/* ============================================================
   Panel — a titled pixel surface (card / sub-window). Hard border
   + offset shadow; an optional header with icon, title and actions.
   The Skills/Tasks/Stats panels are all Panels.
   ============================================================ */
const PANEL_CSS = `
.gx-panel{ --_c: var(--accent);
  display:flex; flex-direction:column;
  background: var(--surface); border: var(--border-w) solid var(--border-strong);
  box-shadow: var(--shadow-2); }
.gx-panel--flat{ box-shadow:none; }
.gx-panel__hd{ display:flex; align-items:center; gap: var(--sp-3);
  padding: var(--sp-3) var(--sp-4); border-bottom: var(--border-w) solid var(--border);
  background: color-mix(in oklab, var(--_c) 8%, var(--surface-raised)); }
.gx-panel__hd::before{ content:""; width: 4px; height: 14px; background: var(--_c); box-shadow: 0 0 6px 0 var(--_c); }
.gx-panel__i{ display:inline-flex; width:16px; height:16px; line-height:0; color: var(--_c); }
.gx-panel__title{ font-family: var(--type-ui); font-size: var(--text-sm); letter-spacing: var(--tracking-wide);
  text-transform: uppercase; color: var(--text-primary); flex:1; }
.gx-panel__actions{ display:flex; align-items:center; gap: var(--sp-2); }
.gx-panel__body{ padding: var(--sp-4); display:flex; flex-direction:column; gap: var(--sp-4); }
.gx-panel__body--inset{ background: var(--surface-inset); }
.gx-panel__body--tight{ padding: 0; }
.gx-panel__ft{ padding: var(--sp-3) var(--sp-4); border-top: var(--border-w) solid var(--border);
  display:flex; align-items:center; gap: var(--sp-3); }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
const TONE_VAR = {
  accent: 'var(--accent)',
  level: 'var(--c-level)',
  skill: 'var(--c-skill)',
  stat: 'var(--c-stat)',
  mood: 'var(--c-mood)',
  energy: 'var(--c-energy)',
  neutral: 'var(--border-strong)'
};
function Panel({
  title,
  icon,
  tone = 'accent',
  actions,
  footer,
  flat = false,
  inset = false,
  tight = false,
  children,
  className = '',
  style = {}
}) {
  ensureCSS('gx-panel-css', PANEL_CSS);
  return /*#__PURE__*/React.createElement("section", {
    className: ['gx-panel', flat && 'gx-panel--flat', className].filter(Boolean).join(' '),
    style: {
      '--_c': TONE_VAR[tone] || TONE_VAR.accent,
      ...style
    }
  }, (title || actions || icon) && /*#__PURE__*/React.createElement("header", {
    className: "gx-panel__hd"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "gx-panel__i",
    dangerouslySetInnerHTML: {
      __html: iconHTML(icon, 16)
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    className: "gx-panel__title"
  }, title), actions && /*#__PURE__*/React.createElement("span", {
    className: "gx-panel__actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: ['gx-panel__body', inset && 'gx-panel__body--inset', tight && 'gx-panel__body--tight'].filter(Boolean).join(' ')
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "gx-panel__ft"
  }, footer));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Panel.jsx", error: String((e && e.message) || e) }); }

// components/surface/TabBar.jsx
try { (() => {
/* ============================================================
   TabBar — the widget's panel switcher. A row of pixel icon tabs;
   the active tab lifts with the accent color.
   ============================================================ */
const TAB_CSS = `
.gx-tabs{ display:flex; gap: 2px; padding: 3px; background: var(--surface-inset);
  border: var(--border-w) solid var(--border); }
.gx-tab{ --_c: var(--accent);
  flex:1 1 0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px;
  padding: var(--sp-2) var(--sp-1); min-height: 40px;
  font-family: var(--type-ui); font-size: var(--text-2xs); letter-spacing: var(--tracking-base);
  color: var(--text-tertiary); background: transparent; border:none; cursor:pointer;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out); }
.gx-tab__i{ display:inline-flex; width:18px; height:18px; line-height:0; }
.gx-tab:hover{ color: var(--text-secondary); background: var(--surface-hover); }
.gx-tab:focus-visible{ outline:none; box-shadow: var(--focus-ring); }
.gx-tab--active{ color: var(--_c); background: color-mix(in oklab, var(--_c) 16%, var(--surface)); box-shadow: inset 0 -3px 0 0 var(--_c); }
.gx-tab--active:hover{ background: color-mix(in oklab, var(--_c) 16%, var(--surface)); }
.gx-tab__label{ white-space:nowrap; }
`;
function ensureCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function iconHTML(name, px) {
  const map = typeof window !== 'undefined' && window.PixelIcons || {};
  const svg = map[name] || '';
  return svg ? svg.replace('<svg ', `<svg width="${px}" height="${px}" style="display:block;image-rendering:pixelated" `) : '';
}
const TONE_VAR = {
  accent: 'var(--accent)',
  level: 'var(--c-level)',
  skill: 'var(--c-skill)',
  stat: 'var(--c-stat)',
  mood: 'var(--c-mood)'
};
function TabBar({
  tabs = [],
  active,
  onChange,
  tone = 'accent',
  showLabels = true,
  className = '',
  style = {}
}) {
  ensureCSS('gx-tabs-css', TAB_CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: ['gx-tabs', className].filter(Boolean).join(' '),
    role: "tablist",
    style: style
  }, tabs.map(t => {
    const on = t.id === active;
    const c = TONE_VAR[t.tone] || TONE_VAR[tone] || TONE_VAR.accent;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      title: t.label,
      className: 'gx-tab' + (on ? ' gx-tab--active' : ''),
      style: {
        '--_c': c
      },
      onClick: () => onChange && onChange(t.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "gx-tab__i",
      dangerouslySetInnerHTML: {
        __html: iconHTML(t.icon, 18)
      }
    }), showLabels && t.label && /*#__PURE__*/React.createElement("span", {
      className: "gx-tab__label"
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/TabBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActivityReadout = __ds_scope.ActivityReadout;

__ds_ns.LevelBadge = __ds_scope.LevelBadge;

__ds_ns.SkillNode = __ds_scope.SkillNode;

__ds_ns.TaskItem = __ds_scope.TaskItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.GUIMARAES_PALETTE = __ds_scope.GUIMARAES_PALETTE;

__ds_ns.GUIMARAES_FRAMES = __ds_scope.GUIMARAES_FRAMES;

__ds_ns.PixelSprite = __ds_scope.PixelSprite;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
