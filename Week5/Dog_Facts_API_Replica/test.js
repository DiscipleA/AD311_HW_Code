// test.js (ESM)
// Run: node tests.js
// Or add "test": "node test.js" in package.json and run: npm test

import { spawn } from "node:child_process";
import assert from "node:assert/strict";

// ---- Config ----
const TEST_PORT = 3001;
// Your index.js uses process.env.port (lowercase), so set BOTH to be safe.
const SERVER_ENV = { ...process.env, PORT: String(TEST_PORT), port: String(TEST_PORT) };
const BASE_URL = `http://localhost:${TEST_PORT}`;

// ---- Helpers ----
function startServer() {
  const child = spawn("node", ["index.js"], {
    env: SERVER_ENV,
    stdio: ["ignore", "pipe", "pipe"],
  });

  // Optional: print server logs while testing (uncomment if needed)
  // child.stdout.on("data", (d) => process.stdout.write(`[server] ${d}`));
  // child.stderr.on("data", (d) => process.stderr.write(`[server err] ${d}`));

  return child;
}

async function waitForServerReady(timeoutMs = 6000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${BASE_URL}/`);
      if (res.ok) return;
    } catch {
      // ignore until server is up
    }
    await new Promise((r) => setTimeout(r, 150));
  }
  throw new Error(`Server did not become ready within ${timeoutMs}ms`);
}

async function httpGet(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  const contentType = res.headers.get("content-type") || "";
  const bodyText = await res.text();

  let json = null;
  if (contentType.includes("application/json")) {
    try {
      json = JSON.parse(bodyText);
    } catch {
      // if invalid JSON, leave json null
    }
  }

  return { status: res.status, contentType, text: bodyText, json };
}

async function runTest(name, fn) {
  try {
    await fn();
    console.log(`✅ PASS: ${name}`);
    return true;
  } catch (err) {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   -> ${err.message}`);
    return false;
  }
}

// ---- Tests ----
async function main() {
  const server = startServer();

  try {
    await waitForServerReady();

    const results = [];

    // -------------------------
    // NORMAL CASES (at least 3)
    // -------------------------

    // Normal 1: GET /facts returns the "Loaded X dog facts" message (your current behavior)
    results.push(await runTest("Normal: GET /facts returns all facts JSON", async () => {
      const r = await httpGet("/facts");
      assert.equal(r.status, 200);
      assert.ok(r.json, "Expected JSON response");
      assert.equal(r.json.success, true);
      assert.ok(Array.isArray(r.json.facts), "facts should be an array");
      assert.ok(r.json.facts.length >= 1, "Expected at least 1 fact");
    }));

    // Normal 2: GET /facts?number=1 returns JSON with success true and 1 fact
    results.push(await runTest("Normal: GET /facts?number=1 returns 1 fact JSON", async () => {
      const r = await httpGet("/facts?number=1");
      assert.equal(r.status, 200);
      assert.ok(r.json, "Expected JSON response");
      assert.equal(r.json.success, true);
      assert.ok(Array.isArray(r.json.facts), "facts should be an array");
      assert.equal(r.json.facts.length, 1);
    }));

    // Normal 3: GET /facts?number=2 returns JSON with 2 facts
    results.push(await runTest("Normal: GET /facts?number=2 returns 2 facts JSON", async () => {
      const r = await httpGet("/facts?number=2");
      assert.equal(r.status, 200);
      assert.ok(r.json, "Expected JSON response");
      assert.equal(r.json.success, true);
      assert.ok(Array.isArray(r.json.facts));
      assert.equal(r.json.facts.length, 2);
    }));

    // -------------------------
    // EDGE CASES (at least 3)
    // -------------------------

    // Edge 1: invalid number (non-integer) => 400
    results.push(await runTest("Edge: GET /facts?number=abc returns 400 JSON", async () => {
      const r = await httpGet("/facts?number=abc");
      assert.equal(r.status, 400);
      assert.ok(r.json, "Expected JSON response");
      assert.equal(r.json.success, false);
      assert.ok(typeof r.json.error === "string", "Expected an error message");
    }));

    // Edge 2: number < 1 => 400
    results.push(await runTest("Edge: GET /facts?number=0 returns 400", async () => {
      const r = await httpGet("/facts?number=0");
      assert.equal(r.status, 400);
    }));

    // Edge 3: number out of range => 404
    results.push(await runTest("Edge: GET /facts?number=999999 returns 404", async () => {
      const r = await httpGet("/facts?number=999999");
      assert.equal(r.status, 404);
      assert.ok(r.text.toLowerCase().includes("not found"), "Expected 404 message to include 'not found'");
    }));

    // Edge 4 (optional, counts as extra): unknown query param should error IF you added that validation
    // If you have not added that validation yet, this test will FAIL.
    results.push(await runTest("Edge (optional): GET /facts?lskj returns 400 if unknown params are blocked", async () => {
      const r = await httpGet("/facts?lskj");
      assert.equal(r.status, 400);
    }));

    // ---- Summary ----
    const passed = results.filter(Boolean).length;
    const total = results.length;

    console.log("\n========================");
    console.log(`Test Summary: ${passed}/${total} passed`);
    console.log("========================\n");

    // Exit code: 0 if all passed, 1 otherwise
    process.exitCode = (passed === total) ? 0 : 1;

  } catch (err) {
    console.error("Test runner error:", err);
    process.exitCode = 1;
  } finally {
    // Stop the server
    // Give it a moment to flush logs
    setTimeout(() => server.kill("SIGTERM"), 100);
  }
}

main();
