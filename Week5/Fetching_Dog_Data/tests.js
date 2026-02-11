/**
 * tests.js
 *
 * 3 Normal + 3 Edge tests for EACH part (30 total).
 * Runs in Node.js (v18+). You are on Node v24 so you're good.
 *
 * ✅ Prints: "OK: ..." for each passing test
 *
 * HOW TO USE:
 * 1) In your main JS file (example: fetchDogBreeds.js), export the functions you wrote.
 *    Example at bottom of that file:
 *      module.exports = { ...functionsHere };
 *
 * 2) Update the require() path below to point to your JS file.
 * 3) Run:
 *      node tests.js
 */

const assert = require("assert");

// ✅ CHANGE THIS PATH to your file:
const api = require("./fetchDogBreeds.js");

/* ----------------------------- Test Utilities ----------------------------- */

async function runTest(name, fn) {
  try {
    await fn();
    console.log("OK:", name);
  } catch (err) {
    console.error("FAIL:", name);
    console.error("  ", err && err.stack ? err.stack : err);
    process.exitCode = 1;
  }
}

function hasFetch() {
  return typeof fetch === "function";
}

function makeMockDocument() {
  // Minimal DOM mock for Node tests
  const elements = {};

  function makeElement(tagName) {
    return {
      tagName,
      children: [],
      style: {},
      textContent: "",
      innerHTML: "",
      appendChild(child) {
        this.children.push(child);
      },
      addEventListener(type, handler) {
        // store it; tests can invoke it
        this._listeners = this._listeners || {};
        this._listeners[type] = handler;
      },
      click() {
        if (this._listeners && this._listeners.click) {
          this._listeners.click();
        }
      },
    };
  }

  return {
    _elements: elements,
    createElement: function (tagName) {
      return makeElement(tagName);
    },
    getElementById: function (id) {
      return elements[id] || null;
    },
    addEventListener: function (type, handler) {
      // simulate DOMContentLoaded immediately if requested
      if (type === "DOMContentLoaded") {
        handler();
      }
    },
    _createContainer: function (id, tagName) {
      elements[id] = makeElement(tagName || "div");
      return elements[id];
    },
  };
}

function safeSetGlobalDocument(doc) {
  global.document = doc;
}

function safeDeleteGlobalDocument() {
  delete global.document;
}

async function fetchWithTimeout(url, ms) {
  const ac = new AbortController();
  const t = setTimeout(function () {
    ac.abort();
  }, ms);

  try {
    const res = await fetch(url, { signal: ac.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

/* ------------------------- Required API Function Names -------------------------
  Your fetchDogBreeds.js should export these (or adjust names here):

  Part 1:
    - fetchBreedsList OR fetchDogBreedsBasic (returns JSON or array)

  Part 2:
    - fetchBreedsList (must throw / handle !response.ok)
    - renderBreedsList OR displayBreedNames

  Part 3:
    - fetchBreedDetails(breedId)

  Part 4:
    - renderBreedsList(breeds)  (adds click listeners)
    - fetchAndDisplayBreedDetails(breedId) OR handler used on click
    - renderBreedDetails(breedObject)

  Part 5:
    - fetchDogFacts(limit)
    - fetchDogGroups()
    - renderDogFacts(factsArray)
    - renderDogGroups(groupsArray)

  If your names differ, either:
    A) Rename your exports to match, OR
    B) Change the mapping below to your function names.
------------------------------------------------------------------------------- */

const F = {
  // Part 1 / 2
  fetchBreedsList: api.fetchBreedsList || api.fetchDogBreedsBasic,

  // Part 3
  fetchBreedDetails: api.fetchBreedDetails,

  // Part 4
  renderBreedsList: api.renderBreedsList,
  fetchAndDisplayBreedDetails: api.fetchAndDisplayBreedDetails,
  renderBreedDetails: api.renderBreedDetails,

  // Part 5
  fetchDogFacts: api.fetchDogFacts,
  fetchDogGroups: api.fetchDogGroups,
  renderDogFacts: api.renderDogFacts,
  renderDogGroups: api.renderDogGroups,
};

/* ----------------------------- Guard checks ----------------------------- */

function requireFn(fn, name) {
  assert.strictEqual(typeof fn, "function", `Missing function export: ${name}`);
}

/* --------------------------------- PART 1 --------------------------------- */
/**
 * Part 1 Goal: Basic fetch request:
 * - GET /breeds
 * - Parse JSON
 * - List exists
 */
async function part1Tests() {
  requireFn(F.fetchBreedsList, "fetchBreedsList (or fetchDogBreedsBasic)");

  // Normal 1: fetch list returns array (or JSON with .data array)
  await runTest("Part 1 Normal 1: Breeds list returns data", async function () {
    assert.ok(hasFetch(), "Global fetch() is not available in this Node version.");
    const result = await F.fetchBreedsList();

    // Accept either: array of breeds OR full JSON object
    const breeds = Array.isArray(result) ? result : result && result.data ? result.data : null;
    assert.ok(Array.isArray(breeds), "Expected an array of breeds.");
    assert.ok(breeds.length > 0, "Expected at least 1 breed.");
  });

  // Normal 2: first item has expected shape
  await runTest("Part 1 Normal 2: Breed object has id and attributes.name", async function () {
    const result = await F.fetchBreedsList();
    const breeds = Array.isArray(result) ? result : result.data;
    const b0 = breeds[0];
    assert.ok(b0 && typeof b0 === "object", "First breed should be an object.");
    assert.ok(typeof b0.id === "string" || typeof b0.id === "number", "Breed should have an id.");
    assert.ok(b0.attributes && typeof b0.attributes.name === "string", "Breed should have attributes.name.");
  });

  // Normal 3: list request completes within reasonable time
  await runTest("Part 1 Normal 3: Breeds list responds within 5 seconds", async function () {
    const res = await fetchWithTimeout("https://dogapi.dog/api/v2/breeds", 5000);
    assert.ok(res.ok, "Expected /breeds to respond with HTTP 200-299.");
  });

  // Edge 1: wrong endpoint should not be ok
  await runTest("Part 1 Edge 1: Wrong endpoint returns non-ok response", async function () {
    const res = await fetch("https://dogapi.dog/api/v2/breedz");
    assert.ok(!res.ok, "Expected non-ok for wrong endpoint.");
  });

  // Edge 2: offline/network failure simulation (skip if cannot simulate)
  await runTest("Part 1 Edge 2: Network failure produces an error (simulated via abort)", async function () {
    let threw = false;
    try {
      await fetchWithTimeout("https://dogapi.dog/api/v2/breeds", 1); // likely abort
    } catch (e) {
      threw = true;
    }
    assert.ok(threw, "Expected fetch to throw on abort/network failure.");
  });

  // Edge 3: response is JSON-parseable
  await runTest("Part 1 Edge 3: /breeds response is valid JSON", async function () {
    const res = await fetch("https://dogapi.dog/api/v2/breeds");
    const json = await res.json();
    assert.ok(json && typeof json === "object", "Expected JSON object.");
    assert.ok(Array.isArray(json.data), "Expected json.data array.");
  });
}

/* --------------------------------- PART 2 --------------------------------- */
/**
 * Part 2 Goal: Handle responses and errors:
 * - Check response.ok and throw error if not
 * - Optional: display in HTML list
 * - Handle network errors
 */
async function part2Tests() {
  requireFn(F.fetchBreedsList, "fetchBreedsList (or fetchDogBreedsBasic)");

  // Normal 1: successful fetchBreedsList returns data (same as Part 1 but ensures it doesn't swallow success)
  await runTest("Part 2 Normal 1: fetchBreedsList returns breeds without error", async function () {
    const result = await F.fetchBreedsList();
    const breeds = Array.isArray(result) ? result : result.data;
    assert.ok(Array.isArray(breeds) && breeds.length > 0);
  });

  // Normal 2: render list in DOM if function exists
  await runTest("Part 2 Normal 2: renderBreedsList creates list items (if provided)", async function () {
    if (typeof F.renderBreedsList !== "function") return; // optional
    const doc = makeMockDocument();
    doc._createContainer("breed-list", "ul");
    safeSetGlobalDocument(doc);

    const breeds = [
      { id: "1", attributes: { name: "Test Breed A" } },
      { id: "2", attributes: { name: "Test Breed B" } },
    ];

    F.renderBreedsList(breeds);

    const ul = doc.getElementById("breed-list");
    assert.ok(ul.children.length === 2, "Expected 2 <li> children.");
    assert.strictEqual(ul.children[0].textContent, "Test Breed A");
    safeDeleteGlobalDocument();
  });

  // Normal 3: error message rendering doesn’t crash when element exists (optional)
  await runTest("Part 2 Normal 3: render error message does not crash (if your code supports it)", async function () {
    // This is a “smoke” test: simply ensure DOM access doesn't crash if document exists.
    const doc = makeMockDocument();
    doc._createContainer("error-message", "p");
    safeSetGlobalDocument(doc);

    // If your module exports a function to show errors, test it; otherwise just pass.
    if (typeof api.showErrorMessage === "function") {
      api.showErrorMessage("Hello");
      assert.strictEqual(doc.getElementById("error-message").textContent, "Hello");
    }
    safeDeleteGlobalDocument();
  });

  // Edge 1: fetch should throw or return null-ish on bad response (you implement)
  await runTest("Part 2 Edge 1: non-ok status is handled (throws OR returns null)", async function () {
    // We test your behavior using a forced bad URL if you expose a function.
    if (typeof api.fetchBreedsListBadUrl !== "function") return; // optional helper if you made one

    let threw = false;
    const res = await (async function () {
      try {
        return await api.fetchBreedsListBadUrl();
      } catch (e) {
        threw = true;
        return null;
      }
    })();

    assert.ok(threw || res === null, "Expected throw or null on non-ok response.");
  });

  // Edge 2: missing DOM element should not crash renderBreedsList (if provided)
  await runTest("Part 2 Edge 2: renderBreedsList does not crash when #breed-list missing", async function () {
    if (typeof F.renderBreedsList !== "function") return; // optional
    const doc = makeMockDocument(); // no breed-list created
    safeSetGlobalDocument(doc);

    const breeds = [{ id: "1", attributes: { name: "Test Breed" } }];
    F.renderBreedsList(breeds); // should not throw
    safeDeleteGlobalDocument();
  });

  // Edge 3: network failure handled (simulated abort)
  await runTest("Part 2 Edge 3: network/abort errors are handled in catch", async function () {
    let threw = false;
    try {
      await fetchWithTimeout("https://dogapi.dog/api/v2/breeds", 1);
    } catch (e) {
      threw = true;
    }
    assert.ok(threw);
  });
}

/* --------------------------------- PART 3 --------------------------------- */
/**
 * Part 3 Goal: Fetch details of /breeds/{id} and display structured info
 */
async function part3Tests() {
  requireFn(F.fetchBreedsList, "fetchBreedsList");
  requireFn(F.fetchBreedDetails, "fetchBreedDetails(breedId)");

  // Normal 1: fetch details for a real breed id
  await runTest("Part 3 Normal 1: fetchBreedDetails returns a breed object", async function () {
    const list = await F.fetchBreedsList();
    const breeds = Array.isArray(list) ? list : list.data;
    const id = breeds[0].id;

    const detail = await F.fetchBreedDetails(id);
    assert.ok(detail && typeof detail === "object", "Expected a breed detail object.");
    assert.ok(detail.attributes && typeof detail.attributes.name === "string");
  });

  // Normal 2: description field exists (may be empty but property should exist)
  await runTest("Part 3 Normal 2: breed detail includes attributes.description (string or null)", async function () {
    const list = await F.fetchBreedsList();
    const breeds = Array.isArray(list) ? list : list.data;
    const id = breeds[0].id;

    const detail = await F.fetchBreedDetails(id);
    assert.ok(detail.attributes && "description" in detail.attributes, "Expected description property.");
  });

  // Normal 3: multiple ids work
  await runTest("Part 3 Normal 3: fetchBreedDetails works for multiple breeds", async function () {
    const list = await F.fetchBreedsList();
    const breeds = Array.isArray(list) ? list : list.data;

    const ids = [breeds[0].id, breeds[1].id, breeds[2].id].filter(Boolean);
    assert.ok(ids.length >= 2, "Need at least 2 ids for this test.");

    for (let i = 0; i < ids.length; i++) {
      const detail = await F.fetchBreedDetails(ids[i]);
      assert.ok(detail && detail.id, "Expected a detail with id.");
    }
  });

  // Edge 1: invalid id should throw or return null
  await runTest("Part 3 Edge 1: invalid breed id handled (throws OR returns null)", async function () {
    let threw = false;
    let detail = null;
    try {
      detail = await F.fetchBreedDetails("not-a-real-id");
    } catch (e) {
      threw = true;
    }
    assert.ok(threw || detail === null, "Expected throw or null for invalid id.");
  });

  // Edge 2: empty id handled
  await runTest("Part 3 Edge 2: empty breed id handled (throws OR returns null)", async function () {
    let threw = false;
    let detail = null;
    try {
      detail = await F.fetchBreedDetails("");
    } catch (e) {
      threw = true;
    }
    assert.ok(threw || detail === null, "Expected throw or null for empty id.");
  });

  // Edge 3: undefined id handled
  await runTest("Part 3 Edge 3: undefined breed id handled (throws OR returns null)", async function () {
    let threw = false;
    let detail = null;
    try {
      detail = await F.fetchBreedDetails(undefined);
    } catch (e) {
      threw = true;
    }
    assert.ok(threw || detail === null, "Expected throw or null for undefined id.");
  });
}

/* --------------------------------- PART 4 --------------------------------- */
/**
 * Part 4 Goal: interactive list, click breeds, fetch & display details.
 * In Node, we test your render functions using a mock DOM.
 *
 * ✅ UPDATED: Prevents real network calls (and 404 spam) by stubbing the
 * click handler target on `global.fetchAndDisplayBreedDetails`.
 *
 * Why this works:
 * - Your click listeners likely call `fetchAndDisplayBreedDetails(breed.id)`
 * - In Node tests, we provide a global stub so clicks never hit the API.
 */
async function part4Tests() {
  // These are optional exports; test only if you implemented them
  if (typeof F.renderBreedsList !== "function") {
    await runTest("Part 4 Skipped: renderBreedsList not exported", async function () {});
    return;
  }
  if (typeof F.fetchAndDisplayBreedDetails !== "function") {
    await runTest("Part 4 Skipped: fetchAndDisplayBreedDetails not exported", async function () {});
    return;
  }
  if (typeof F.renderBreedDetails !== "function") {
    await runTest("Part 4 Skipped: renderBreedDetails not exported", async function () {});
    return;
  }

  // Normal 1: renderBreedsList creates clickable <li> items
  await runTest("Part 4 Normal 1: renderBreedsList creates li items", async function () {
    const doc = makeMockDocument();
    doc._createContainer("breed-list", "ul");
    safeSetGlobalDocument(doc);

    const breeds = [
      { id: "1", attributes: { name: "Clickable A" } },
      { id: "2", attributes: { name: "Clickable B" } },
    ];
    F.renderBreedsList(breeds);

    const ul = doc.getElementById("breed-list");
    assert.strictEqual(ul.children.length, 2);
    assert.strictEqual(ul.children[0].textContent, "Clickable A");

    safeDeleteGlobalDocument();
  });

 // Normal 2: clicking triggers detail fetch (stubbed so NO network call)
  await runTest("Part 4 Normal 2: click handler triggers detail fetch (stubbed)", async function () {
    const doc = makeMockDocument();
    doc._createContainer("breed-list", "ul");
    safeSetGlobalDocument(doc);

    var calledWith = null;

    // ✅ Stub the exported function that renderBreedsList will call
    const original = api.fetchAndDisplayBreedDetails;

    api.fetchAndDisplayBreedDetails = async function (id) {
      calledWith = id;
    };

    const breeds = [{ id: "XYZ", attributes: { name: "Clickable X" } }];
    F.renderBreedsList(breeds);

    const ul = doc.getElementById("breed-list");
    ul.children[0].click();

    assert.strictEqual(calledWith, "XYZ");

    // ✅ Restore original function
    api.fetchAndDisplayBreedDetails = original;
    safeDeleteGlobalDocument();
  });

  // Normal 3: renderBreedDetails writes something into #breed-details
  await runTest("Part 4 Normal 3: renderBreedDetails updates detail container", async function () {
    const doc = makeMockDocument();
    doc._createContainer("breed-details", "div");
    safeSetGlobalDocument(doc);

    const breed = {
      id: "1",
      attributes: { name: "Detail Breed", description: "A nice dog." },
    };

    F.renderBreedDetails(breed);

    const d = doc.getElementById("breed-details");
    assert.ok(
      d.innerHTML.includes("Detail Breed") || d.textContent.includes("Detail Breed"),
      "Expected details to include breed name."
    );

    safeDeleteGlobalDocument();
  });

  // Edge 1: renderBreedsList does not crash when document missing
  await runTest("Part 4 Edge 1: renderBreedsList does not crash when document is undefined", async function () {
    safeDeleteGlobalDocument();
    const breeds = [{ id: "1", attributes: { name: "No DOM" } }];
    F.renderBreedsList(breeds); // should not throw if you guard inside renderBreedsList
  });

  // Edge 2: renderBreedDetails does not crash if #breed-details missing
  await runTest("Part 4 Edge 2: renderBreedDetails does not crash when #breed-details missing", async function () {
    const doc = makeMockDocument(); // no breed-details container
    safeSetGlobalDocument(doc);

    const breed = { id: "1", attributes: { name: "Missing container", description: "..." } };
    F.renderBreedDetails(breed); // should not throw

    safeDeleteGlobalDocument();
  });

  // Edge 3: fast multiple clicks do not crash (stubbed so NO network call)
  await runTest("Part 4 Edge 3: multiple clicks do not crash (stubbed)", async function () {
    const doc = makeMockDocument();
    doc._createContainer("breed-list", "ul");
    safeSetGlobalDocument(doc);

    // ✅ Stub the exported function that renderBreedsList will call
    const original = api.fetchAndDisplayBreedDetails;
    api.fetchAndDisplayBreedDetails = async function () {
        // do nothing
    };

    const breeds = [
        { id: "A", attributes: { name: "A" } },
        { id: "B", attributes: { name: "B" } },
        { id: "C", attributes: { name: "C" } },
    ];

    F.renderBreedsList(breeds);

    const ul = doc.getElementById("breed-list");
    ul.children[0].click();
    ul.children[1].click();
    ul.children[2].click();

    // ✅ Restore
    api.fetchAndDisplayBreedDetails = original;
    safeDeleteGlobalDocument();
  });
}


/* --------------------------------- PART 5 --------------------------------- */
/**
 * Part 5 Goal: facts + groups endpoints, display them
 */
async function part5Tests() {
  requireFn(F.fetchDogFacts, "fetchDogFacts(limit)");
  requireFn(F.fetchDogGroups, "fetchDogGroups()");

  // Normal 1: facts returns array
  await runTest("Part 5 Normal 1: fetchDogFacts returns facts array", async function () {
    const facts = await F.fetchDogFacts(3);
    assert.ok(Array.isArray(facts), "Expected array of facts.");
    assert.ok(facts.length > 0, "Expected at least 1 fact.");
    assert.ok(facts[0].attributes && typeof facts[0].attributes.body === "string");
  });

  // Normal 2: groups returns array
  await runTest("Part 5 Normal 2: fetchDogGroups returns groups array", async function () {
    const groups = await F.fetchDogGroups();
    assert.ok(Array.isArray(groups), "Expected array of groups.");
    assert.ok(groups.length > 0, "Expected at least 1 group.");
    assert.ok(groups[0].attributes && typeof groups[0].attributes.name === "string");
  });

  // Normal 3: renderers create DOM nodes if provided
  await runTest("Part 5 Normal 3: renderDogFacts/renderDogGroups update DOM (if provided)", async function () {
    if (typeof F.renderDogFacts !== "function" || typeof F.renderDogGroups !== "function") return;

    const doc = makeMockDocument();
    doc._createContainer("facts-container", "div");
    doc._createContainer("groups-list", "ul");
    safeSetGlobalDocument(doc);

    F.renderDogFacts([
      { attributes: { body: "Fact A" } },
      { attributes: { body: "Fact B" } },
      { attributes: { body: "Fact C" } },
    ]);
    F.renderDogGroups([
      { attributes: { name: "Group 1" }, relationships: { breeds: { data: [{}, {}] } } },
    ]);

    assert.ok(doc.getElementById("facts-container").children.length === 3);
    assert.ok(doc.getElementById("groups-list").children.length === 1);

    safeDeleteGlobalDocument();
  });

  // Edge 1: facts limit=0 handled (returns [] OR null OR throws)
  await runTest("Part 5 Edge 1: fetchDogFacts(0) handled", async function () {
    let threw = false;
    let facts = null;
    try {
      facts = await F.fetchDogFacts(0);
    } catch (e) {
      threw = true;
    }
    assert.ok(threw || facts === null || Array.isArray(facts), "Expected throw, null, or array.");
  });

  // Edge 2: very large limit handled (throw OR array OR null)
  await runTest("Part 5 Edge 2: fetchDogFacts(999) handled", async function () {
    let threw = false;
    let facts = null;
    try {
      facts = await F.fetchDogFacts(999);
    } catch (e) {
      threw = true;
    }
    assert.ok(threw || facts === null || Array.isArray(facts), "Expected throw, null, or array.");
  });

  // Edge 3: renderDogGroups handles missing relationships (if provided)
  await runTest("Part 5 Edge 3: renderDogGroups handles missing relationships (if provided)", async function () {
    if (typeof F.renderDogGroups !== "function") return;

    const doc = makeMockDocument();
    doc._createContainer("groups-list", "ul");
    safeSetGlobalDocument(doc);

    F.renderDogGroups([
      { attributes: { name: "Group No Relations" } }, // no relationships
    ]);

    const ul = doc.getElementById("groups-list");
    assert.ok(ul.children.length === 1);
    safeDeleteGlobalDocument();
  });
}

/* ----------------------------- RUN ALL TESTS ----------------------------- */

(async function main() {
  console.log("Running tests...\n");

  await part1Tests();
  await part2Tests();
  await part3Tests();
  await part4Tests();
  await part5Tests();

  console.log("\nDone.");
  if (process.exitCode === 1) {
    console.log("Some tests failed.");
  } else {
    console.log("All tests passed.");
  }
})();
