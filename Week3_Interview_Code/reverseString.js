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
console.log("Test 1 (Normal) passed =>", reverseString("Dmitriy") === "yirtimD");

//Test 2
console.log("Test 2 (Normal) passed =>", reverseString("XYZABC") === "CBAZYX");

//Test 3
console.log("Test 3 (Normal) passed =>", reverseString("yirtimd") === "dmitriy");

//Test 1
console.log("Test 1 (Edge) passed =>", reverseString("") === "");

//Test 2
console.log("Test 2 (Edge) passed =>", reverseString("q") === "q");

//Test 3
console.log("Test 3 (Edge) passed =>", reverseString("racecar") === "racecar");

