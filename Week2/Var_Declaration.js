/**
 * @author Dmitriy Chernichenko 
 * Assignment AD311: JavaScript Variable Declaration
 * 
 * Instructions:
 * Task is to replace "var" with either "const" or "let".
 * After modifying each snippet, add comments to the file 
 * --> to explain why your choice of const or let is appropriate:
        Which keyword did you choose (const or let) to replace var?
        Why is this choice more appropriate than the other option?
        What would happen if you used the other keyword? Describe any potential issues or errors.
*/

/** 1)
 * The choice between "const" and "let", "let" to fullName ,
 * because "const" cannot be reassigned,
 * and it will error with assignment to constant variable.
 */
let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

/** 2)
 * The choice between "const" and "let", "let" to age & "const" to adult because
 * "const" for adult is ideal for boolean values that cannot be changed,
 * and "let" for age is ideal for those variables that need to be reassigned.
 * If these keywords are assigned in other order it will be a logical error.
 */
let age = 30;
if (age > 18) {
const adult = true;
console.log(adult);
}

/** 3)
 * The choice between "const" and "let", "let" to i in for loop & and const to array,
 * because "const" makes the variable binding immutable but its modifiable for arrays,
 * and only "let" can be initiated in for loop due to the itterative process. 
 * Only if "const" used in a for loop it will error.
 */
const loopArray = [];
for (let i = 0; i < 5; i++) {
loopArray.push(i);
}
console.log(loopArray);

/** 4)
 * The choice between "const" and "let", "let" to MAXIMUM,
 * because "const" cannot be reassigned,
 * and it will error with assignment to constant variable.
 */
let MAXIMUM = 100;
MAXIMUM = 200;

/** 5)
 * The choice between "const" and "let", "let" to MAXIMUM,
 * because "const" cannot be reassigned,
 * and it will error with aray reassignment to constant variable.
 */
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);
