// apiDocs.js
import { fileURLToPath } from "node:url";
import path from "node:path";

// Exported so index.js can display it in the browser
export const apiDocsText = `
=====================================
      Dog Facts API Documentation
=====================================

Base URL:
http://localhost:3000

-------------------------------------
GET /facts
-------------------------------------

Description:
Returns dog facts in JSON format.

Query Parameters:
- number (optional)
  Type: Integer
  Description:
    - If provided, returns the dog fact at that line number (1-based).
    - If omitted, returns the total number of available dog facts.

-------------------------------------
Example Requests
-------------------------------------

1) Get all dog facts:
   GET /facts

2) Get a specific dog fact:
   GET /facts?number=1

-------------------------------------
Example Success Response
-------------------------------------

{
  "facts": ["A group of pugs is called a grumble."],
  "success": true
}

-------------------------------------
Error Handling
-------------------------------------

400 Bad Request:
Returned when 'number' is not a valid integer >= 1.

404 Not Found:
Returned when the requested fact number does not exist.

-------------------------------------
Notes
-------------------------------------
- Line numbers are 1-based.
- Data is stored in memory and resets on server restart.
- This API is for educational purposes.

=====================================
`;

// If apiDocs.js is executed directly, print the docs to the terminal.
// If it's imported (by index.js), it will NOT print anything.
const __filename = fileURLToPath(import.meta.url);
const isRunDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);

if (isRunDirectly) {
  console.log(apiDocsText);
}
