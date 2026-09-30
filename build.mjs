import { readFileSync, mkdirSync, writeFileSync } from "node:fs"

const scripts = [
  "node_modules/react/umd/react.production.min.js",
  "node_modules/react-dom/umd/react-dom.production.min.js",
  "src/main.js",
]
const marker = "<!-- Скрипты вставляются при сборке -->"
const template = readFileSync("index.html", "utf8")

if (!template.includes(marker)) throw new Error("Не найден маркер для скриптов в index.html")

const html = template.replace(marker, scripts.map(path =>
  `<script>${readFileSync(path, "utf8")}</script>`
).join("\n    "))

mkdirSync("dist", { recursive: true })
writeFileSync("dist/index.html", html)
