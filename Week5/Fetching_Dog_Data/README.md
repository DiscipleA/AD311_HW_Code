# Assignment AD311: Fetching Dog Data (Dog API v2)

## 📂 Project Overview
This project demonstrates how to use JavaScript’s Fetch API with `async function` and `await` to retrieve and display dog-related data from the Dog API v2. The project progresses through five parts, starting from a simple fetch request and building toward an interactive web application that allows users to explore dog breeds, view detailed breed information, read random dog facts, and browse dog groups.

The assignment focuses on understanding:
- How HTTP requests work
- How to parse JSON responses
- How to handle errors
- How to display API data using JavaScript
- How to build interactive features using event listeners

---

## 🚀 How It Works

1. **Breeds List**
   - Fetches a list of dog breeds from:
     ```
     https://dogapi.dog/api/v2/breeds
     ```
   - The response is converted to JSON.
   - Breed names are rendered as clickable list items.

2. **Breed Details**
   - When a breed is selected, the app requests:
     ```
     https://dogapi.dog/api/v2/breeds/{id}
     ```
   - The selected breed’s name, description, and optional attributes (life expectancy, weight, etc.) are displayed.

3. **Dog Facts**
   - Fetches random dog facts using:
     ```
     https://dogapi.dog/api/v2/facts?limit=3
     ```
   - Facts are displayed as simple cards.
   - A button allows users to refresh and load new facts.

4. **Dog Groups**
   - Fetches dog groups from:
     ```
     https://dogapi.dog/api/v2/groups
     ```
   - Displays group names along with the number of breeds in each group.

5. **Error Handling**
   - Checks `response.ok` for HTTP errors.
   - Uses `try...catch` blocks to catch network or parsing errors.
   - Displays friendly error messages when something goes wrong.

---

## ✨ Features

- Fetches and displays dog breeds
- Fetches and displays detailed information for a selected breed
- Interactive breed list with click selection
- Fetches and displays random dog facts
- Fetches and displays dog groups with breed counts
- Graceful error handling
- Uses modern asynchronous JavaScript (`async` / `await`)
- Works in the browser

---

## 🛠️ How to Run

### Option 1: Run in Browser (Recommended)

This project uses DOM features (`document`, `getElementById`, event listeners), so it should be run in a browser.

1. Ensure you have:
   - `index.html`
   - `fetchDogBreeds.js`
   - `README.md`

2. Start a local web server:
   - Using VS Code:
     - Install the **Live Server** extension
     - Right-click `index.html`
     - Choose **Open with Live Server**
   - OR using Node:
     ```
     npx serve
     ```

3. Open the provided `localhost` URL in your browser.

4. Click on a breed name to see its details.
5. Scroll down to view dog facts and dog groups.

---

### Option 2: Run in Node (Limited)

You may run basic fetch code using:
```
node fetchDogBreeds.js
```

## 📺 Demos

| Component | Walkthrough Link |
| :--- | :--- |
| **Fetching Dog Data with JavaScript** | [Watch on YouTube](https://youtu.be/Cg7vFuOeEns) |

