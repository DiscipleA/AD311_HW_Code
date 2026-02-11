# Assignment AD311: Integrating Third-Party APIs

## 📂 Project Overview
Crypto Quick Check (CoinGecko API) a small web application that displays live cryptocurrency stats for Bitcoin, Ethereum, and Dogecoin using the CoinGecko public API. It includes a 7-day trend comparison chart and simple price alerts.

## 🚀 How it works

### Backend (Node.js + Express)
- Serves the static frontend (HTML/CSS/JS).
- Exposes a single data endpoint:
  - `GET /api/prices`
    - Aggregates CoinGecko data and returns a clean JSON payload:
      - `prices`: current price + 24h change
      - `charts`: sparkline data for the last 7 days
      - `global`: global market stats (market cap + BTC dominance)

### Frontend (Vanilla JavaScript + Chart.js)
- On page load (and when clicking Refresh), the browser calls:
  - `fetch("/api/prices")`
- Validates the payload shape before using it:
  - `prices` must be an object, `charts` must be an array, `global` must be an object
- Updates:
  - Status bar (Live + Global Cap + BTC Dom)
  - Coin cards (price + 24h change)
  - Chart (7-day percent-change lines)
- Alerts:
  - If user enters a valid target price and the live price meets/exceeds it, the coin card highlights.

## ✨ Features
- Live price and 24h % change for BTC, ETH, and DOGE
- Global market context (Global Market Cap + BTC dominance)
- 7-day trend chart (normalized percent-change so coins are comparable)
- Price alerts (highlight card when price reaches user target)
- Error handling + data validation (network errors, non-2xx responses, unexpected data shape)
- Basic API 404 handling (optional but recommended)

## 🛠️ How to Run

### 1) Install dependencies
```bash
npm install
```
### 2) Run the server
```bash
node index.js
```
Then open:
 - http://localhost:3000

### 3) Running tests (Jest + Supertest)
```bash
npm test
```
 - Test coverage includes:
   - Normal cases (successful /api/prices response shape and values)
   - Edge cases (rate limiting 429, upstream failures, non-JSON responses invalid global shape)
   - API 404 behavior (unknown /api/* route)

### Example usage
1. Load the dashboard and click Refresh Market Data.
2. Enter an alert number (e.g., DOGE alert = 0.10). If live DOGE price is >= 0.10, the DOGE card highlights.
3. Visit an invalid API route:
 - /api/does-not-exist → returns JSON 404 (if enabled)

### Notes / Limitations
 - CoinGecko is a public API and can rate limit requests (HTTP 429). The app displays a friendly message when this occurs.
 - Sparkline or global data can occasionally be missing; the UI shows N/A instead of crashing.

## 📺 Demos

| Component | Walkthrough Link |
| :--- | :--- |
| **Featuring Crypto Quick Check** | [Watch on YouTube](https://youtu.be/GUShhLcr5EE) |