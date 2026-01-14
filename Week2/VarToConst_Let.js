/**
*@author Dmitriy Chernichenko 
* Assignment AD311: Refactoring var to const and let
 * 
 * To practice refactoring JavaScript code by replacing "var" declarations with "const" or "let", 
 * --> enhancing the code's readability and reliability.
 *     Task is to refactor this code by replacing "var" with "const" or "let".
 *     Explain each replaced instance with code comments in the same file.
 *     Highlight any potential issues or bugs that might arise from use of var in README file.
 */

//instantiated all of the variables that were missing as "const" due to no reassignments
const loggedIn = true;
const user = "Dmitriy";
const userRole = "admin";

function checkAccess() {
//changed to "let" because "const" must be initialized
let accessLevel;
    if (loggedIn) {
        //changed to "let" because it is reassigned down below
        let message = "User " + user + " is logged in.";
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
        accessLevel = "limited";
        }
    } else {
        //deleted wordtype "var" because it can be reassigned if "let"
        message = "User not logged in.";
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}
//changed to "let" because it needs to be reassigned due to itteration
for (let i = 0; i < 3; i++) {
console.log("Attempt", i);
}

console.log("Access Level:", checkAccess());