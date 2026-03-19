# Assignment AD311: Dynamic Alert Buttons with Props

## 📝 Project Overview

This project is a React application built with Vite that demonstrates dynamic rendering of reusable button components using props and the JavaScript `.map()` function.

The app includes a customizable toolbar rendered from an array of button data. Each button displays dynamic text and shows a unique browser alert when clicked. The interface was enhanced with a hoverable sidebar and a styled landing page for a polished user experience.

---

## 🎯 Objective

The purpose of this assignment is to practice:

* Dynamic rendering with `.map()`
* Passing object properties as props
* Using the `children` prop for flexible component content
* Assigning a unique `key` when rendering lists in React
* Creating reusable and scalable UI components

---

## ✨ Features

* Built with **React + Vite**
* Dynamic toolbar generated from a `buttons` array
* Reusable `AlertButton` component
* Dynamic browser alerts based on button data
* Dynamic button labels using the `children` prop
* Unique `key` prop used for list rendering
* Hoverable left sidebar toolbar
* Styled front page with visual guidance toward the toolbar

---

## ⚙️ How It Works

The application stores toolbar button information inside an array of objects.

Each object contains:

* `id` → a unique identifier used as the React `key`
* `message` → the alert text shown when the button is clicked
* `children` → the label displayed inside the button

The `Toolbar` component uses `.map()` to loop through the array and render an `AlertButton` for each object.

The `AlertButton` component receives:

* the `message` prop for the browser alert
* the `children` prop for the button text

This makes the toolbar scalable and easy to extend by simply adding more objects to the array.

---

## 📁 Project Structure

```
dynamic-toolbar-assignment/
├── public/
├── src/
│   ├── components/
│   │   ├── AlertButton.jsx
│   │   ├── Toolbar.jsx
│   │   └── Toolbar.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── package-lock.json
└── README.md
```
---

## 🛠 Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS

---

## 🚀 How to Run It

### 1. Create the project

```bash
npm create vite@latest dynamic-toolbar-assignment -- --template react
```

### 2. Move into the project folder

```bash
cd dynamic-toolbar-assignment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the app in your browser

```
http://localhost:5173/
```

---

## 🧩 Example Button Data

```jsx
const buttons = [
  { id: 1, message: 'Downloading!', children: 'Download File' },
  { id: 2, message: 'Sharing!', children: 'Share Document' },
  { id: 3, message: 'Deleting!', children: 'Delete Item' },
  { id: 4, message: 'Uploading!', children: 'Upload Media' },
];
```

---

## ✅ Expected Behavior

* The sidebar appears when hovered
* The toolbar buttons are rendered dynamically from the array
* Each button displays a custom browser alert
* Button labels are generated dynamically using the `children` prop

---

## 🎬 Demo

Add your demo links below:

| Demo Type        | Link                 |
| ---------------- | -------------------- |
| Walkthrough Demo | https://youtu.be/AiF-JiqAn3U |