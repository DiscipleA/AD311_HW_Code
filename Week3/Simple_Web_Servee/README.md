# Simple Node.js Web Server

This project is a basic implementation of a web server built from scratch using Node.js. It demonstrates core backend concepts such as HTTP request handling, file system (FS) interaction, and manual routing without the use of heavy frameworks like Express.

---

## 🚀 How It Works

The server acts as a middleman between the user's browser and the files stored on the machine. 

1. **The Request**: When a user enters a URL (like `localhost:3000/about`), the browser sends an HTTP request to the server.
2. **The Logic**: Inside `server.js`, the code checks the `req.url` property to determine which path the user is asking for.
3. **The Response**: 
   - If the path is `/`, the server uses the `fs` module to read `home.html` and sends the content back to the browser.
   - If the path is `/about`, it sends a raw string response.
   - If the path doesn't match either, it sends a **404 status code**.



---

## ✨ Features

* **ES6 Modules**: Uses modern `import` syntax instead of the legacy `require`.
* **File Streaming**: Dynamically serves physical HTML files from the directory using the `fs` module.
* **Custom Routing**: Logic to distinguish between multiple URL paths.
* **Error Handling**: A catch-all route that gracefully handles invalid URLs with a `404 Not Found` response.
* **Environment Flexibility**: Set to run on `process.env.PORT` or default to port `3000`.

---

## 📂 Project Structure

* `server.js`: The entry point of the application containing the HTTP server logic and routing.
* `home.html`: The visual layout for the homepage.

---

## 🛠️ How to Run

Follow these steps to get the server running on your local machine:

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed. Open your terminal in the project folder and run:
```bash
npm install
```

### 2. Start the Server

Run the following command to initiate the server:

```bash
node server.js
```
You should see a message saying: "Server is running on http://localhost:3000"

### 3. Test the Routes

Open your web browser and visit the following URLs:

    Home Page: http://localhost:3000/

    About Page: http://localhost:3000/about

    Error Page: http://localhost:3000/any-other-text (to verify the 404 response)

## 📺 Demos

| Component | Walkthrough Link |
| :--- | :--- |
| Simple Node.js Web Server | [https://youtu.be/pKCkE19YbSQ] |

