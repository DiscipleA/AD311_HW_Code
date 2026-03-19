# Assignment AD311: Custom Alert Buttons in React

## 📝 Project Overview

This project is a React application built with Vite that demonstrates reusable components, prop passing, the `children` prop, and event handling.

The application features a **custom sidebar toolbar** that slides into view when hovered over from the left side of the screen. Each button in the toolbar triggers a browser alert with a unique message.

---

## 🎯 Objective

The goal of this assignment is to:

* Build reusable React components
* Pass data using props
* Use the `children` prop to render nested content
* Handle user interactions with `onClick`
* Trigger dynamic browser alerts based on component data

---

## ⚙️ How It Works

The application is composed of two main reusable components:

### 🔘 AlertButton

The `AlertButton` component accepts:

* `message` prop → determines the alert text shown when clicked
* `children` prop → determines the visible label inside the button

When the button is clicked, it executes:

```js
alert(message);
```

---

### 🧰 Toolbar

The `Toolbar` component renders multiple `AlertButton` components.

* It is styled as a **hidden left sidebar**
* A visible **handle ("☰ Menu")** allows users to discover it
* When hovered, the toolbar slides into view
* Each button has a unique label and message

---

## ✨ Features

* Reusable `AlertButton` component
* Use of props and `children`
* Multiple toolbar buttons with unique messages
* Hover-based sliding sidebar UI
* Clean separation of JSX and CSS
* Responsive and modern UI styling
* Automated testing with normal and edge cases

---

## 📁 Project Structure

```bash
alert-button-toolbar/
├── src/
│   ├── AlertButton.jsx
│   ├── Toolbar.jsx
│   ├── Toolbar.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tests/
│   ├── setup.js
│   ├── AlertButton.test.jsx
│   └── Toolbar.test.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd alert-button-toolbar
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the development server

```bash
npm run dev
```

---

### 4. Open the application

Visit:

```bash
http://localhost:5173/
```

---

## 🧪 How to Run Tests

Run all tests:

```bash
npm test
```

Run tests once:

```bash
npm run test:run
```

Run in watch mode:

```bash
npx vitest
```

---

## 🎥 Demo

Add your YouTube demo links below:

| Demo Title          | Description                             | YouTube Link                          |
| ------------------- | --------------------------------------- | ------------------------------------- |
| Project Demo        | Full application walkthrough            | [Add Link Here](https://youtu.be/rCWAhX0FS14) |