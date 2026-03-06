# Recipe Gallery

A React-based Recipe Gallery application that displays a curated list of recipes using static data. This project focuses on practicing React list rendering with `map()` and building a clean, responsive UI without state management or interactivity.

## Features

- Displays a curated list of recipes
- Renders recipe cards dynamically from static data
- Shows recipe images, titles, and ingredient lists
- Uses React `map()` for list rendering
- Uses unique `key` props for efficient rendering
- Responsive layout using CSS Grid
- Clean and accessible semantic structure

## How It Works

The application uses a static `recipes` array where each recipe is represented as an object with the following properties:

- `id`: Unique identifier for the recipe
- `title`: Recipe name
- `ingredients`: Array of ingredients
- `image`: URL of the recipe image

The `RecipeGallery` component imports this array and uses `map()` to generate a recipe card for each recipe. Each card includes:

- A recipe image
- A recipe title
- A list of ingredients

This project intentionally avoids state and interactivity so the focus stays on understanding static data rendering in React.

## Project Structure

```text
recipe-gallery/
├── src/
│   ├── components/
│   │   └── RecipeGallery.jsx
│   ├── data/
│   │   └── recipes.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tests/
│   └── RecipeGallery.test.jsx
├── package.json
├── vite.config.js
└── README.md
```

## How to Run

### 1. Clone or download the project
```bash
git clone <your-repository-url>
cd recipe-gallery
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open the app in your browser

Vite will provide a local development URL, usually:
```bash
http://localhost:5173
```

## How to Run Tests
```bash
npm run test
```
To run tests with UI:
```bash
npm run test:ui
```
To generate test coverage:
```bash
npm run coverage
```
