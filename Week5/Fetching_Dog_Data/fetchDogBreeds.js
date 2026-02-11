/**
 * Part 1
 */
async function fetchDogBreeds() {
    try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds");//?page%5Bnumber%5D=3&page%5Bsize%5D=1");

        const data = await response.json();

        const breedNames = data.data.map(function (breed) {
            return breed.attributes.name;
        });

        console.log(breedNames);

    } catch (error) {

        console.error("Error fetching dog breeds: ", error);

    }
}

fetchDogBreeds();

/**
 * Part 2
 */

async function fetchDogBreeds() {
    try{
        const response = await fetch("https://dogapi.dog/api/v2/breeds");

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        let data = await response.json();
        if (typeof document !== "undefined") {
        const breedListElement = document.getElementById("breed-list");
            if (breedListElement) {
                for (let i = 0; i < data.data.length; i++) {
                    let li = document.createElement("li");
                    li.textContent = data.data[i].attributes.name;
                    breedListElement.appendChild(li);
                }
            } 
        } else {
            for (let j = 0; j < data.data.length; j++) {
                console.log(data.data[j].attributes.name);
            }
        
        }

    } catch (error) {
        console.error("Error fetching dog breeds:", error);

        //const errorMessageElement = document.getElementById("error-message");
        //if (errorMessageElement) {
        //    errorMessageElement.textContent = "Sorry, we couldn't load dog breeds right now. Please try again later."
       // }
    }

}
fetchDogBreeds();

/**
 * part 3
 * @return 
 */

async function fetchBreedsList() {
  var response = await fetch("https://dogapi.dog/api/v2/breeds");

  if (!response.ok) {
    throw new Error("List request failed with status: " + response.status);
  }

  var data = await response.json();
  return data.data; // array of breeds
}

async function fetchBreedDetails(breedId) {
  try {
    // ✅ Guard: empty/invalid id should not call the API
    if (!breedId || String(breedId).trim() === "") {
      return null; // or: throw new Error("Missing breedId");
    }

    var url = "https://dogapi.dog/api/v2/breeds/" + breedId;
    var response = await fetch(url);

    if (!response.ok) {
      throw new Error("Detail request failed with status: " + response.status);
    }

    var data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching breed details:", error);
    return null;
  }
}

function displayBreedDetailsInConsole(breedObject) {
  var attrs = breedObject.attributes;

  console.log("=== Breed Details ===");
  console.log("Name:", attrs.name);
  console.log("Description:", attrs.description);

  if (attrs.life) {
    console.log("Life expectancy:", attrs.life.min + " - " + attrs.life.max + " years");
  }
  if (attrs.male_weight) {
    console.log("Male weight:", attrs.male_weight.min + " - " + attrs.male_weight.max);
  }
  if (attrs.female_weight) {
    console.log("Female weight:", attrs.female_weight.min + " - " + attrs.female_weight.max);
  }
}

function displayBreedDetailsInHTML(breedObject) {
  if (typeof document === "undefined") return;

  var container = document.getElementById("breed-details");
  if (!container) return;

  var attrs = breedObject.attributes;

  var html = "";
  html += "<h2>" + (attrs.name || "Unknown Breed") + "</h2>";
  html += "<p><strong>Description:</strong> " + (attrs.description || "No description available.") + "</p>";

  if (attrs.life) {
    html += "<p><strong>Life expectancy:</strong> " + attrs.life.min + " - " + attrs.life.max + " years</p>";
  }
  if (attrs.male_weight) {
    html += "<p><strong>Male weight:</strong> " + attrs.male_weight.min + " - " + attrs.male_weight.max + "</p>";
  }
  if (attrs.female_weight) {
    html += "<p><strong>Female weight:</strong> " + attrs.female_weight.min + " - " + attrs.female_weight.max + "</p>";
  }

  container.innerHTML = html;
}

async function fetchDogBreeds3(num) {
  try {
    var breeds = await fetchBreedsList();

    if (!breeds || breeds.length === 0) {
      throw new Error("No breeds returned from API.");
    }

    // Demo: pick the first breed from the list
    var firstBreedId = breeds[num].id;

    var breedDetails = await fetchBreedDetails(firstBreedId);
    if (!breedDetails) return;

    displayBreedDetailsInConsole(breedDetails);
    displayBreedDetailsInHTML(breedDetails);

  } catch (error) {
    console.error("Part 3 demo error:", error);

    if (typeof document !== "undefined") {
      var errorMessageElement = document.getElementById("error-message");
      if (errorMessageElement) {
        errorMessageElement.textContent = "Could not load breed details. Try again later.";
      }
    }
  }
}

fetchDogBreeds3(7);

/**
 * Part 4
 * 
 */

async function fetchBreedsList() {
  var response = await fetch("https://dogapi.dog/api/v2/breeds");

  if (!response.ok) {
    throw new Error("List request failed with status: " + response.status);
  }

  var data = await response.json();
  return data.data; // array of breed objects
}

async function fetchBreedDetails(breedId) {
  // ✅ Fix for Part 3 Edge 2: empty/invalid id should not call API
  if (!breedId || String(breedId).trim() === "") {
    return null; // test accepts null OR throw; null keeps your app safe
  }

  var url = "https://dogapi.dog/api/v2/breeds/" + breedId;
  var response = await fetch(url);

  if (!response.ok) {
    throw new Error("Detail request failed with status: " + response.status);
  }

  var data = await response.json();
  return data.data; // single breed object
}

function renderBreedsList(breeds) {
  if (typeof document === "undefined") return; // ✅ Node-safe

  var listElement = document.getElementById("breed-list");
  if (!listElement) return;

  listElement.innerHTML = "";

  for (var i = 0; i < breeds.length; i++) {
    (function () {
      var breed = breeds[i];

      var li = document.createElement("li");
      li.textContent = breed.attributes.name;

      // Make it feel clickable
      li.style.cursor = "pointer";
      li.style.padding = "6px 8px";
      li.style.borderBottom = "1px solid #ddd";

      // ✅ Click event: call exported function reference (test-stubbable)
      li.addEventListener("click", function () {
        if (
          typeof module !== "undefined" &&
          module.exports &&
          typeof module.exports.fetchAndDisplayBreedDetails === "function"
        ) {
          module.exports.fetchAndDisplayBreedDetails(breed.id);
        } else if (typeof fetchAndDisplayBreedDetails === "function") {
          fetchAndDisplayBreedDetails(breed.id);
        }
      });

      listElement.appendChild(li);
    })();
  }
}

function renderBreedDetails(breedObject) {
  if (typeof document === "undefined") return; // ✅ Node-safe

  var detailsElement = document.getElementById("breed-details");
  if (!detailsElement) return;

  // ✅ If fetchBreedDetails returned null (invalid id), handle gracefully
  if (!breedObject || !breedObject.attributes) {
    detailsElement.innerHTML = "<p>No breed details available.</p>";
    return;
  }

  var attrs = breedObject.attributes;

  var html = "";
  html += "<h3>" + (attrs.name || "Unknown Breed") + "</h3>";
  html += "<p><strong>Description:</strong> " + (attrs.description || "No description available.") + "</p>";

  if (attrs.life) {
    html += "<p><strong>Life expectancy:</strong> " + attrs.life.min + " - " + attrs.life.max + " years</p>";
  }

  if (attrs.male_weight) {
    html += "<p><strong>Male weight:</strong> " + attrs.male_weight.min + " - " + attrs.male_weight.max + "</p>";
  }

  if (attrs.female_weight) {
    html += "<p><strong>Female weight:</strong> " + attrs.female_weight.min + " - " + attrs.female_weight.max + "</p>";
  }

  detailsElement.innerHTML = html;
}

function showErrorMessage(message) {
  if (typeof document === "undefined") {
    console.error("UI Error Message:", message);
    return;
  }

  var errorElement = document.getElementById("error-message");
  if (!errorElement) return;
  errorElement.textContent = message;
}

function clearErrorMessage() {
  if (typeof document === "undefined") return;

  var errorElement = document.getElementById("error-message");
  if (!errorElement) return;
  errorElement.textContent = "";
}

async function fetchAndDisplayBreedDetails(breedId) {
  try {
    clearErrorMessage();

    if (typeof document !== "undefined") {
      var detailsElement = document.getElementById("breed-details");
      if (detailsElement) {
        detailsElement.innerHTML = "Loading breed details...";
      }
    }

    var breedDetails = await fetchBreedDetails(breedId);

    // ✅ If invalid id -> null, show user-friendly message (and avoid fetch errors)
    if (!breedDetails) {
      showErrorMessage("Invalid breed selected.");
      return;
    }

    renderBreedDetails(breedDetails);
  } catch (error) {
    console.error("Error loading breed details:", error);
    showErrorMessage("Could not load breed details. Please try again.");
  }
}

async function initBreedApp() {
  try {
    clearErrorMessage();

    var breeds = await fetchBreedsList();
    renderBreedsList(breeds);

    // ✅ Only auto-load in browser, never during Node tests
    if (typeof document !== "undefined" && breeds.length > 0) {
      fetchAndDisplayBreedDetails(breeds[0].id);
    }
  } catch (error) {
    console.error("Error initializing breed app:", error);
    showErrorMessage("Could not load the breed list. Is the API down?");
  }
}


if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    startApp();
  });
}

/**
 * Part 5
 * @param {*} limit 
 * @returns 
 */

async function fetchDogFacts(limit) {
  try {
    var url = "https://dogapi.dog/api/v2/facts?limit=" + limit;
    var response = await fetch(url);

    if (!response.ok) {
      throw new Error("Facts request failed with status: " + response.status);
    }

    var data = await response.json();
    return data.data; // array of facts
  } catch (error) {
    console.error("Error fetching dog facts:", error);
    return null;
  }
}

function renderDogFacts(factsArray) {
  var container = document.getElementById("facts-container");
  if (!container) return;

  container.innerHTML = "";

  for (var i = 0; i < factsArray.length; i++) {
    var fact = factsArray[i];
    var body = fact.attributes.body;

    var card = document.createElement("div");
    card.style.padding = "10px";
    card.style.marginBottom = "10px";
    card.style.border = "1px solid #ddd";
    card.style.borderRadius = "8px";

    // “Interesting format”: numbered facts
    card.textContent = (i + 1) + ". " + body;

    container.appendChild(card);
  }
}

function showFactsError(message) {
  var el = document.getElementById("facts-error");
  if (!el) return;
  el.textContent = message;
}

function clearFactsError() {
  var el = document.getElementById("facts-error");
  if (!el) return;
  el.textContent = "";
}

async function loadFacts() {
  clearFactsError();

  var facts = await fetchDogFacts(3);
  if (!facts) {
    showFactsError("Could not load dog facts. Please try again later.");
    return;
  }

  renderDogFacts(facts);
}

async function fetchDogGroups() {
  try {
    var response = await fetch("https://dogapi.dog/api/v2/groups");

    if (!response.ok) {
      throw new Error("Groups request failed with status: " + response.status);
    }

    var data = await response.json();
    return data.data; // array of groups
  } catch (error) {
    console.error("Error fetching dog groups:", error);
    return null;
  }
}

function renderDogGroups(groupsArray) {
  var list = document.getElementById("groups-list");
  if (!list) return;

  list.innerHTML = "";

  for (var i = 0; i < groupsArray.length; i++) {
    var group = groupsArray[i];
    var name = group.attributes.name;

    // Count of breeds in this group (relationships.breeds.data is an array)
    var breedCount = 0;
    if (
      group.relationships &&
      group.relationships.breeds &&
      group.relationships.breeds.data
    ) {
      breedCount = group.relationships.breeds.data.length;
    }

    var li = document.createElement("li");
    li.textContent = name + " (" + breedCount + " breeds)";
    list.appendChild(li);
  }
}

function showGroupsError(message) {
  var el = document.getElementById("groups-error");
  if (!el) return;
  el.textContent = message;
}

function clearGroupsError() {
  var el = document.getElementById("groups-error");
  if (!el) return;
  el.textContent = "";
}

async function loadGroups() {
  clearGroupsError();

  var groups = await fetchDogGroups();
  if (!groups) {
    showGroupsError("Could not load dog groups. Please try again later.");
    return;
  }

  renderDogGroups(groups);
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {

    // Load initial content
    loadFacts();
    loadGroups();

    // Refresh facts on button click
    var btn = document.getElementById("refresh-facts");
    if (btn) {
      btn.addEventListener("click", function () {
        loadFacts();
      });
    }

  });
}

function startApp() {
  initBreedApp();
  loadFacts();
  loadGroups();
}


module.exports = {
  fetchBreedsList,
  fetchBreedDetails,
  renderBreedsList,
  fetchAndDisplayBreedDetails,
  renderBreedDetails,
  fetchDogFacts,
  fetchDogGroups,
  renderDogFacts,
  renderDogGroups,
  startApp
};


