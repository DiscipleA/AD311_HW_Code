import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/prices', async (req, res) => {
  // Helper: fetch + validate HTTP + validate JSON
  async function fetchJsonOrThrow(url) {
    const upstreamRes = await fetch(url);

    // Handle rate limiting explicitly
    if (upstreamRes.status === 429) {
      const err = new Error("Rate limit reached. Please wait 60s.");
      err.status = 429;
      throw err;
    }

    // Any non-2xx status
    if (!upstreamRes.ok) {
      const err = new Error(`Upstream API error (${upstreamRes.status})`);
      err.status = 502; // Bad gateway: upstream failed
      throw err;
    }

    // Confirm JSON
    const contentType = upstreamRes.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const err = new Error("Upstream API returned non-JSON response.");
      err.status = 502;
      throw err;
    }

    return upstreamRes.json();
  }

  try {
    const priceUrl =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&include_24hr_change=true";

    const chartUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin&order=market_cap_desc&per_page=3&page=1&sparkline=true";

    const globalUrl = "https://api.coingecko.com/api/v3/global";

    const [priceData, chartData, globalResponse] = await Promise.all([
      fetchJsonOrThrow(priceUrl),
      fetchJsonOrThrow(chartUrl),
      fetchJsonOrThrow(globalUrl),
    ]);

    // Basic shape validation before responding
    const globalData = globalResponse?.data;
    if (!globalData || typeof globalData !== "object") {
      return res.status(502).json({ error: "Invalid global market data from API." });
    }
    if (!priceData || typeof priceData !== "object") {
      return res.status(502).json({ error: "Invalid price data from API." });
    }
    if (!Array.isArray(chartData)) {
      return res.status(502).json({ error: "Invalid chart data from API." });
    }

    return res.json({
      prices: priceData,
      charts: chartData,
      global: globalData,
    });
  } catch (error) {
    const status = Number.isInteger(error.status) ? error.status : 500;

    console.error("Server Error:", error);
    return res.status(status).json({
      error:
        status === 429
          ? "Rate limit reached. Please wait 60s."
          : status === 502
          ? "CoinGecko returned an unexpected response. Try again shortly."
          : "Internal Server Error",
    });
  }
});

// 404 handler for any unknown API route
app.use("/api", (req, res) => {
  res.status(404).json({ error: "API route not found." });
});

// 404 handler for everything else (pages/assets)
//
// Option A: if you want a real 404 page:
// res.status(404).send("404 - Page Not Found");
//
// Option B (recommended for your setup): serve the frontend app for unknown routes
// so refreshing /deep-links still loads the UI:
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}