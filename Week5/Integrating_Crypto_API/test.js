import { jest } from "@jest/globals";
import request from "supertest";
import app from "./index.js";

// Helper to build a fetch-like Response object
function makeMockResponse({
  ok = true,
  status = 200,
  contentType = "application/json",
  jsonData = {},
} = {}) {
  return {
    ok,
    status,
    headers: {
      get: (key) => (key.toLowerCase() === "content-type" ? contentType : null),
    },
    json: async () => jsonData,
  };
}

describe("GET /api/prices (CoinGecko integration)", () => {
  beforeEach(() => {
    // Reset fetch mock between tests
    global.fetch = jest.fn();
  });

  // -----------------------
  // NORMAL CASES (3+)
  // -----------------------

  test("Normal Case #1: returns 200 and includes prices, charts, and global", async () => {
    global.fetch
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            bitcoin: { usd: 50000, usd_24h_change: 1.23 },
            ethereum: { usd: 2500, usd_24h_change: -0.55 },
            dogecoin: { usd: 0.12, usd_24h_change: 5.1 },
          },
        })
      )
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: [
            { id: "bitcoin", sparkline_in_7d: { price: [1, 2, 3, 4, 5, 6, 7] } },
            { id: "ethereum", sparkline_in_7d: { price: [2, 3, 4, 5, 6, 7, 8] } },
            { id: "dogecoin", sparkline_in_7d: { price: [0.1, 0.11, 0.12, 0.13, 0.12, 0.14, 0.15] } },
          ],
        })
      )
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            data: {
              total_market_cap: { usd: 2000000000000 },
              market_cap_percentage: { btc: 52.5 },
            },
          },
        })
      );

    const res = await request(app).get("/api/prices");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("prices");
    expect(res.body).toHaveProperty("charts");
    expect(res.body).toHaveProperty("global");

    expect(res.body.prices).toHaveProperty("bitcoin");
    expect(Array.isArray(res.body.charts)).toBe(true);
    expect(res.body.global).toHaveProperty("total_market_cap");
  });

  test("Normal Case #2: global object contains expected nested fields", async () => {
    global.fetch
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            bitcoin: { usd: 1, usd_24h_change: 1 },
            ethereum: { usd: 1, usd_24h_change: 1 },
            dogecoin: { usd: 1, usd_24h_change: 1 },
          },
        })
      )
      .mockResolvedValueOnce(makeMockResponse({ jsonData: [] }))
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            data: {
              total_market_cap: { usd: 123 },
              market_cap_percentage: { btc: 50.0 },
            },
          },
        })
      );

    const res = await request(app).get("/api/prices");
    expect(res.status).toBe(200);
    expect(res.body.global.total_market_cap.usd).toBe(123);
    expect(res.body.global.market_cap_percentage.btc).toBe(50.0);
  });

  test("Normal Case #3: charts is an array (even if empty) and request still succeeds", async () => {
    global.fetch
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            bitcoin: { usd: 1, usd_24h_change: 1 },
            ethereum: { usd: 1, usd_24h_change: 1 },
            dogecoin: { usd: 1, usd_24h_change: 1 },
          },
        })
      )
      .mockResolvedValueOnce(makeMockResponse({ jsonData: [] }))
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            data: {
              total_market_cap: { usd: 999 },
              market_cap_percentage: { btc: 40.0 },
            },
          },
        })
      );

    const res = await request(app).get("/api/prices");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.charts)).toBe(true);
  });

  // -----------------------
  // EDGE CASES (3+)
  // -----------------------

  test("Edge Case #1: CoinGecko rate limit (429) returns 429 with friendly error", async () => {
    global.fetch.mockResolvedValueOnce(
      makeMockResponse({
        ok: false,
        status: 429,
        contentType: "application/json",
        jsonData: { message: "rate limit" },
      })
    );

    const res = await request(app).get("/api/prices");
    expect(res.status).toBe(429);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error.toLowerCase()).toContain("rate limit");
  });

  test("Edge Case #2: upstream non-2xx (e.g., 500) returns 502", async () => {
    global.fetch.mockResolvedValueOnce(
      makeMockResponse({
        ok: false,
        status: 500,
        contentType: "application/json",
        jsonData: { message: "CoinGecko down" },
      })
    );

    const res = await request(app).get("/api/prices");
    expect(res.status).toBe(502);
    expect(res.body).toHaveProperty("error");
  });

  test("Edge Case #3: upstream returns non-JSON content-type -> 502", async () => {
    global.fetch.mockResolvedValueOnce(
      makeMockResponse({
        ok: true,
        status: 200,
        contentType: "text/html",
        jsonData: "<html>not json</html>",
      })
    );

    const res = await request(app).get("/api/prices");
    expect(res.status).toBe(502);
    expect(res.body).toHaveProperty("error");
  });

  test("Edge Case #4: global endpoint returns invalid shape -> 502", async () => {
    global.fetch
      .mockResolvedValueOnce(
        makeMockResponse({
          jsonData: {
            bitcoin: { usd: 1, usd_24h_change: 1 },
            ethereum: { usd: 1, usd_24h_change: 1 },
            dogecoin: { usd: 1, usd_24h_change: 1 },
          },
        })
      )
      .mockResolvedValueOnce(makeMockResponse({ jsonData: [] }))
      // globalResponse missing "data"
      .mockResolvedValueOnce(makeMockResponse({ jsonData: { wrong: true } }));

    const res = await request(app).get("/api/prices");
    expect(res.status).toBe(502);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error.toLowerCase()).toContain("global");
  });
});

describe("404 handling", () => {
  test("Unknown API route returns JSON 404", async () => {
    const res = await request(app).get("/api/does-not-exist");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});
