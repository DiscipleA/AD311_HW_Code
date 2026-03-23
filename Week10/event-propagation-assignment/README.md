# Assignment AD311: Nested Button Clicks

## 📝 Project Overview

This project demonstrates **event propagation** in React, specifically the **bubbling phase** of DOM events. It contains a nested interactive structure where an inner button is placed inside an outer clickable container.

The project shows how `event.stopPropagation()` can be used to prevent a child element’s click event from triggering its parent element’s click handler.

---

## 🎯 Objective

The main objective of this assignment is to:

* Understand how DOM events propagate through nested elements
* Observe bubbling behavior in a React component
* Prevent unwanted parent event execution using `event.stopPropagation()`
* Isolate event-driven UI behavior cleanly in nested JSX structures

---

## ⚙️ How It Works

The application renders:

* An **Outer Container**
* An **Inner Button** nested inside it

### Event Behavior

* Clicking the **Outer Container** triggers only the outer click handler
* Clicking the **Inner Button** triggers only the inner click handler

This works because the inner button’s click handler calls:

```js
e.stopPropagation();
```

This prevents the event from bubbling up to the outer container.

---

## ✨ Features

* React functional component architecture
* Nested clickable JSX structure
* Separate click handlers for parent and child elements
* `stopPropagation()` to block bubbling
* Visual feedback using `alert()` and `console.log()`
* Clean component-based file structure
* Unit and interaction tests using Vitest and React Testing Library

---

## 📁 Project Structure

```text
event-propagation-assignment/
├── src/
│   ├── components/
│   │   ├── NestedButtons.jsx
│   │   └── NestedButtons.css
│   ├── __tests__/
│   │   └── NestedButtons.test.jsx
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Run the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the app in your browser

```
http://localhost:5173
```

---

## 🧪 How to Run Tests

### Run all tests once

```bash
npm run test
```

### Run tests in watch mode

```bash
npm run test:watch
```

---

## ✅ Validation Scenarios

### Outer click test

Click the outer container area.

**Expected result:**
Only the outer message appears.

---

### Inner click test

Click the inner button.

**Expected result:**
Only the inner message appears, and the outer handler is not triggered.

---

## 🧪 Test Coverage Summary

This project includes:

* **3 normal test cases**
* **3 edge test cases**

### Normal cases

1. Component renders correctly
2. Outer container click triggers only outer logic
3. Inner button click triggers only inner logic

### Edge cases

1. Multiple inner clicks do not bubble to the outer container
2. Sequential outer and inner clicks remain isolated
3. Direct click event simulation still respects propagation blocking

---

## 🎥 Demo

Add your video link(s) below after recording your assignment demo.

| Demo Type           | Description                                    | YouTube Link                          |
| ------------------- | ---------------------------------------------- | ------------------------------------- |
| Project Walkthrough | Explain component structure and event bubbling | [Add Link Here](https://www.youtube.com/watch?v=5S1afofxrcM) |
