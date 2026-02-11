# Assignment AD331: Dog Facts API (Simplified)

## 📂 Project Overview
This project demonstrates a simplified Dog Facts API built using **Node.js** and **Express.js**.  
This API allows users to retrieve dog facts in JSON format using HTTP GET requests.

---

## 🚀 How it Works

- The API is built using Node.js and Express.js.
- Dog facts are stored in an in-memory JavaScript array located in `dog_facts.js`.
- The Express server (`index.js`) exposes a REST endpoint at `GET /facts`.
- When no query parameter is provided, the API returns information about the available dog facts.
- When the `number` query parameter is provided, the API returns the corresponding dog fact using a 1-based index.
- Input validation ensures the `number` parameter is a valid integer greater than zero.
- If a requested fact does not exist, the API responds with an appropriate HTTP error code.
- API documentation is available in multiple ways:
  - Via the browser at `/facts/api/docs`
  - Via the command line using `node apiDocs.js`
  - Via npm using `npm run docs`

---

## ✨ Features

- Express.js server configuration
- In-memory data storage for dog facts
- `GET /facts` endpoint with optional query parameter support
- Line-based fact retrieval using a 1-based index
- JSON responses for successful requests
- Input validation and structured error handling
- Proper HTTP status codes (400, 404, 500)
- CLI-accessible API documentation
- Browser-accessible API documentation endpoint
- npm script for viewing API documentation

---

## 🛠️ How to Run the API

### 1) Install dependencies
```bash
npm install
```
### 2) Access the API Docs
```bash
npm run apidocs
```
### 3) Start the server
```bash
npm start
```
### 4) Access API 

http://localhost:3000

## 📺 Demos

| Component | Walkthrough Link |
| :--- | :--- |
| **Dog Facts API (Simplified)** | [Watch on YouTube](https://youtu.be/LpN-Ge_VyC4) |
