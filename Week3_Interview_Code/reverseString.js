function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }

    const lastChar = str[str.length - 1];
    
    const ramPortion = str.substring(0, str.length - 1);

    const recurse = reverseString(ramPortion);


    return lastChar + recurse;
}

//Test 1
console.log("Test 1 (Base): ", reverseString("Dmitriy"));

//Test 2
console.log("Test 2 (Base): ", reverseString("XYZABC"));

//Test 3
console.log("Test 3 (Base): ", reverseString("yirtimd"));

//Test 1
console.log("Test 1 (Edge): ", reverseString(""));

//Test 2
console.log("Test 2 (Edge): ", reverseString("q"));

//Test 3
console.log("Test 3 (Edge): ", reverseString("racecar"));

