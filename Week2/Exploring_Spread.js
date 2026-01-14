/**
*@author Dmitriy Chernichenko 
* Assignment AD311: Exploring JavaScript Spread Syntax
 * 
 * To practice the concepts of spread syntax in JavaScript. 
 * Tasks below are tests of spread syntax in various contexts, 
 * --> including functions, arrays, and objects:
 */

//Task 1: Function Argument Expansion

    //Define a function named sum that takes three arguments and returns their sum.
    function sum (x, y, z) {
        return x + y + z;
    }
    //Create an array named numbers with three numeric elements of your choice.
    const numbers = []
    for (let i = 0; i < 3; i++) {
        let num = Math.random() >= 0.5;
        numbers.push(num);
    }
    //Call the sum function using the spread syntax to pass the elements of numbers as arguments.
    const call = sum(...numbers);
    //Print the result to the console.
    console.log('Task 1: ', call);

//Task 2: Merging Arrays

    //Create two arrays, array1 with the elements [1, 2, 3] and array2 with the elements [4, 5, 6].
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    //Merge array1 and array2 into a new array called mergedArray using spread syntax.
    const mergedArray = [...array1, ...array2];
    //Print mergedArray to the console and ensure that it contains all the elements from both arrays.
    console.log('Task 2: ', mergedArray);

//Task 3: Array Element Insertion

    //Create an array named colors with the elements 'red', 'green', and 'blue'.
    const colors = ['red', 'green', 'blue'];
    //Use spread syntax to create a new array extendedColors that includes 'yellow' 
    //--> at the beginning, the elements of colors, and 'purple' at the end.
    let extendedCollors = new Array('yellow',...colors, 'purple');
    //Print extendedColors to the console.
    console.log('Task 3: ', extendedCollors);

//Task 4: Cloning and Modifying an Object

    //Define an object person with properties name: 'John' and age: 30.
    const person = {name: "John", age: 30};
    //Use spread syntax to create a clone of the person object named newPerson.
    let newPerson = {...person};
    //Modify newPerson by changing the name property to 'Jane' and adding a new property gender with the value 'female'.
    newPerson = {...newPerson, name: 'Jane', gender: 'female'};
    //Print both person and newPerson to ensure that they are separate objects and that person is not affected by the modifications to newPerson.
    console.log('Task 4: ', person)
    console.log('        ', newPerson);

//Task 5: Combining Objects

    //Create two objects, object1 with properties { a: 1, b: 2 } and object2 with properties { b: 3, c: 4 }.
    const object1 = { a: 1, b: 2 };
    const object2 = { b: 3, c: 4 };
    //Combine object1 and object2 into a new object combinedObject using spread syntax, 
    //--> ensuring that properties from object2 overwrite those in object1 when there are conflicts.
    const combinedObject = {...object1, ...object2};
    //Print combinedObject to verify that it has the correct properties and values.
    console.log('Task 5: ', combinedObject);

