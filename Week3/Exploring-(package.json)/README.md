# 📦 Exploring package.json

## 📖 Overview
This project is a simple Node.js application created to explore and understand the structure, purpose, and usage of the `package.json` file. It demonstrates how npm manages metadata, dependencies, scripts, versioning, and configuration for a Node.js project.

---

## ⚙️ How It Works
- The project is initialized using `npm init`, which generates a `package.json` file.
- Dependencies and development dependencies are defined and installed using npm.
- Custom scripts are added to the `scripts` section and executed using `npm run`.
- The `engines` field documents required Node.js and npm versions for compatibility.
- A `package-lock.json` file ensures reproducible installations by locking exact dependency versions.
- The assignment report can be printed in the terminal using a runnable JavaScript script (`report.js`).

---

## ✨ Features
- Demonstrates `dependencies` vs `devDependencies`
- Includes custom npm scripts for running and demonstrating concepts
- Applies Semantic Versioning principles (MAJOR.MINOR.PATCH)
- Includes helpful metadata fields (repository, keywords, author, license, bugs, homepage)
- Documents runtime compatibility via the `engines` field
- Supports consistent installs using `package-lock.json`
- Generates a full package.json “section report” in the terminal via `report.js`

---

## ▶️ How to Run

### 1) Install dependencies
```bash
npm install
```

### 2) Start the application
```bash
npm start
```

### 3) Run example scripts (demos / notes)
```bash
npm run hello
npm run dependenciesVSdevDependencies
npm run versioning
npm run other_fields_discussion
npm run purpose_package-lock
npm run importance_package-lock
```

### 4) Run the report
```bash
npm run report
```

### 5) Run tests
```bash
npm run jest
npm test
```

## 🎥 Demo

YouTube Video Demo Link: (https://youtu.be/QBya0zAhM4s)
