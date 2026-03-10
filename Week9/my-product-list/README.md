# Assignment AD 311: Creating a Static Product List in React

## 📂 Project Overview
This project is a simple React application built with Vite that displays a static list of products. Each product includes a name, description, and price. The application demonstrates foundational React concepts such as component creation, rendering lists with `map()`, using unique keys, organizing static data, and applying CSS for styling.

## 🛠️ How it Works
The application is built around a `ProductList` component.

- Product data is stored in a constant array called `products`
- Each product is an object with properties such as:
  - `id`
  - `name`
  - `description`
  - `price`
- The `ProductList` component uses JavaScript's `map()` function to iterate over the `products` array
- For each product, JSX is returned to render the product details in a card layout
- Each rendered product uses a unique `key` prop based on the product's `id`

## 🚀 Features
- Built with React and Vite
- Static product list rendering
- Reusable `ProductList` component
- Clean card-based UI
- Responsive grid layout
- Organized data structure
- Basic hover effects for improved presentation
- Test setup with normal and edge case coverage

## 📁 Project Structure
```bash
my-product-list/
├── src/
│   ├── data/
│   │   └── products.js
│   ├── ProductList.jsx
│   ├── ProductList.css
│   ├── App.jsx
│   ├── main.jsx
│   └── test/
│       ├── setup.js
│       └── ProductList.test.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📦 How to Run
### 1. Clone or create the project
```bash
npm create vite@latest my-product-list -- --template react
cd my-product-list
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Then open the local URL shown in the terminal, usually:
```bash
http://localhost:5173
```

### 3. How to run tests
Install test dependencies:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```
Run tests:
```bash
npm run test
```
If you want the test UI:
```bash
npx vitest --ui
```

## 🎥 Project Demonstration
| Component | Walkthrough Link |
| :--- | :--- |
| **Full Walkthrough & Tests** | [Watch on YouTube](https://youtu.be/jAttw83fHBk) |