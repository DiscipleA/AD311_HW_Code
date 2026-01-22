# 📦 Basic Express NodeJS Server Assignment

## 📖 Overview
A simple Express server demonstrating core Express concepts such as routing, conditional routing with `next()`, route patterns/regex matching, query string handling, dynamic route parameters, and 404 error handling.

## ⚙️ How It Works

- The server is created using Express (`const app = express()`).
- Routes are registered using `app.get(...)` for different paths.
- Some routes demonstrate special behavior:
  - Conditional routing on `/foo` uses `next()` to optionally pass control to another handler.
  - A route pattern `/user(name)?` matches both `/user` and `/username`.
  - Query strings are read from `req.query` on `/get`.
  - Dynamic route parameters are read from `req.params` on `/user/:username`.
- A final catch-all middleware returns a plain text 404 response for undefined routes.

## ✨ Features

- **GET /** → returns: `Hello World`
- **GET /about** → returns: `About page`
- **GET /foo** → randomly returns:
  - `sometimes this`
  - OR `and sometimes that` (via `next()`)
- **GET /user** and **GET /username** → matched by `/user(name)?` route pattern and returns a simple text response
- **GET /get?key=value** → logs query parameters to the server console using `req.query`
- **GET /user/:username** → returns a personalized response like `Hello john`
- **404 handler** → returns: `404 - Not Found` for unknown routes

## ▶️ How to Run

### 1) Install dependencies
```bash
npm install
```

### 2) Start the server
```bash
npm start
```
The server will start on:
    http://localhost:3000 by default
    or the port set in your environment variable PORT

### 3) Test endpoints (examples)
Root:
```bash
curl http://localhost:3000/
```
About:
```bash
curl http://localhost:3000/about
```
Conditional route:
```bash
curl http://localhost:3000/foo
```
Route pattern match:
```bash
curl http://localhost:3000/user
curl http://localhost:3000/username
```
Query string:
```bash
curl "http://localhost:3000/get?name=Sam&age=21"
```
Dynamic username:
```bash
curl http://localhost:3000/user/john
```
404 test:
```bash
curl -i http://localhost:3000/does-not-exist
```

## 🎥 Demo
YouTube Video Demo Link: (https://youtu.be/dhZNl9yVMU4)
