// scripts/copy-static.js
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyRecursive(from, to) {
  const stat = fs.statSync(from);

  if (stat.isDirectory()) {
    ensureDir(to);
    for (const item of fs.readdirSync(from)) {
      copyRecursive(path.join(from, item), path.join(to, item));
    }
    return;
  }

  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
}

function copyFileIfExists(from, to) {
  if (fs.existsSync(from)) {
    ensureDir(path.dirname(to));
    fs.copyFileSync(from, to);
  }
}

ensureDir(distDir);

// Copy HTML files at src root (index.html, palette.html, etc.)
for (const item of fs.readdirSync(srcDir)) {
  if (item.endsWith(".html")) {
    copyFileIfExists(path.join(srcDir, item), path.join(distDir, item));
  }
}

// Copy assets folder
const assetsSrc = path.join(srcDir, "assets");
const assetsDist = path.join(distDir, "assets");
if (fs.existsSync(assetsSrc)) copyRecursive(assetsSrc, assetsDist);

// Copy JS/CSS folders if you want them served as separate files
const jsSrc = path.join(srcDir, "js");
const jsDist = path.join(distDir, "js");
if (fs.existsSync(jsSrc)) copyRecursive(jsSrc, jsDist);

const cssSrc = path.join(srcDir, "css");
const cssDist = path.join(distDir, "css");
if (fs.existsSync(cssSrc)) copyRecursive(cssSrc, cssDist);

// Copy pages folder
const pagesSrc = path.join(srcDir, "pages");
const pagesDist = path.join(distDir, "pages");
if (fs.existsSync(pagesSrc)) copyRecursive(pagesSrc, pagesDist);
