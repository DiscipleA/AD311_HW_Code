
//Step 1: Server configuratiion.

import express from 'express'; //loads the Express library

//Step 2: Data Storage

import dogFacts from './dog_facts.js';

//Step 5: API Documentation
import { apiDocsText } from "./apiDocs.js";

const app = express(); // creates an Express application instance



const port = process.env.PORT || process.env.port || 3000; //'process.env.port' checks if an environment variable named port exists.

// Simple root route to verify server is running
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Dog Facts API (simplified) is running' });
});

//Step 3: GET /facts Endpoint
// - If ?number is provided, return that many facts
// - If not provided, return all facts

app.get("/facts", (req, res) => {
  const allowedParams = ["number"];
  const queryKeys = Object.keys(req.query);

  //Step 4: Error Handling
  
  //Validate: Reject unknown query parameters
  if (queryKeys.some(key => !allowedParams.includes(key))) {
    return res.status(400).json({
      success: false,
      error: "Invalid query parameter. Only 'number' is allowed."
    });
  }


  // Validate: Reject empty number
  if ("number" in req.query && req.query.number === "") {
    return res.status(400).json({
      success: false,
      error: "Query parameter 'number' must have a value."
    });
  }

  const { number } = req.query;

  // If number is not provided, return everything
  if (number === undefined) {
    return res.json({
      facts: dogFacts,
      success: true
    });
    //return res.send(`Loaded ${dogFacts.length} dog facts\n`);
  }

  // Convert to a number (query params come in as strings)
  const n = Number(number);

  // Validate: must be a finite integer >= 1
  if (!Number.isFinite(n) || !Number.isInteger(n) || n < 1) {
    return res.status(400).json({
      error: "Query parameter 'number' must be an integer greater than 0.",
      success: false
    });
    //return res.status(400).send(
    //  "error: Invalid 'number' query parameter. It must be an integer >= 1.\nexample: /facts?number=3\n"
    //);
  }

  const index = n - 1;

  // Validate array is out of bound
  if (index >= dogFacts.length) {
    return res.status(404).json({
      error: `Dog fact number ${n} not found.`,
      success: false
      
    });
    //return res.status(404).send('Dog fact number ' + n + ' not found.\n');

  }

  // Clamp n to the available number of facts
  const countToReturn = Math.min(n, dogFacts.length);
  const selectedFacts = dogFacts.slice(0, countToReturn);

  return res.json({
    facts: selectedFacts,
    success: true
  });
});

//Step 5: Browser-accessible API docs
app.get("/facts/api/docs", (req, res) => {
  // Option A: plain text (simple + readable)
  res.type("text/plain").send(apiDocsText);
});

// Generic 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: '404 - Not Found' });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

//Server Activation & 'nmp start' command coded in package.json scripts
app.listen(port, () => {
  console.log(`Dog Facts API listening on port ${port}`);
});