## 📦 Configure ESLint Assignment (Node.js)

A basic Node.js project demonstrating how to install, configure, and customize ESLint using the modern **Flat Config** format (`eslint.config.js`).

---

## ⚙️ How It Works

This project uses ESLint to statically analyze JavaScript files and report (or auto-fix) code issues.

### Configuration Used
- ESLint is configured via **`eslint.config.js`** (Flat Config).
- The project extends **`js/recommended`**, which provides a baseline set of best-practice rules.
- The configuration targets the following file types:
  - `.js`, `.mjs`, `.cjs`
- The configuration is set for a **Node.js** environment using `globals.node`.

### Custom Rule Overrides
Two rules were customized to match the preferred coding style:
- **Semicolons**
  - `semi: ["error", "always"]` → requires semicolons.
- **Quotes**
  - `quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }]`
  - Requires single quotes, allows template literals, and avoids forcing awkward escaping.

---

## ✨ Features

- ✅ Uses ESLint **Flat Config** (`eslint.config.js`)
- ✅ Inherits core best-practice rules with `js/recommended`
- ✅ Node.js globals supported (avoids false "undefined" errors for Node built-ins)
- ✅ Custom style enforcement:
  - Semicolons required
  - Single quotes required (with reasonable exceptions)

---

## ▶️ How to Run

### 1) Install dependencies
```bash
npm install
```

### 2) Run ESLint (lint the project)
If you have JavaScript files in the project (e.g., index.js), run:
```bash
npx eslint .
```

### 3) Auto-fix issues (optional)
```bash
npx eslint . --fix
```

### 4) Run the assignment report
This project includes a report.js file that prints the written report to the terminal:
```bash
npm run report
```

