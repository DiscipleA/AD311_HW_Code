# Assignment AD311: Building a Modular React Application with Import/Export

## 📂 Project Overview
A small modular React application demonstrating import/export patterns, shared components, and component reuse.

Project Structure:

```txt
src/
  components/
    Header.js
    Footer.js
    ContentA.js
    ContentB.js
    SharedComponents.js
    __tests__/
      Button.test.jsx
      Content.test.jsx
      AppLayout.test.jsx
  test/
    setupTests.js
  App.jsx
  main.jsx
```

## 🚀 How it works

- The app is split into reusable components inside `src/components/`.
- `Header` and `Footer` use **default exports**.
- `ContentA` and `ContentB` use **named exports**.
- `SharedComponents.js` acts like a “barrel/shared module” that re-exports components and also defines a shared `Button` component.
- `Button` is reused inside both `ContentA` and `ContentB`, demonstrating component reuse and modular design.

## ✨ Features

- Modular component structure (`Header`, `Footer`, `ContentA`, `ContentB`)
- Demonstrates **default export** vs **named export**
- Centralized shared module (`SharedComponents.js`)
- Reusable shared `Button` component
- Basic UI styling for cleaner layout
- Automated tests using Vitest + React Testing Library (industry-standard for Vite)

## 🛠️ How to Run

### 1) Install dependencies
```bash
npm install
```

### 2) Start the development server
```bash
npm run dev
```

### 3) How to run tests
```bash
npm run test
```
Optional: watch mode
```bash
npm run test:watch
```

## 📺 Demos

| Component | Walkthrough Link |
| :--- | :--- |
| **Modular Vite (React) App** | [Watch on YouTube](https://youtu.be/qgRKHTojNyw) |
