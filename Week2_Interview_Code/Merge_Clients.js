function merge(custData1, m, custData2, n){
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if(i >= 0 && custData1[i] > custData2[j]) {
            custData1[k--] = custData1[i--];
        } else {
            custData1[k--] = custData2[j--];
        }
    }
    return custData1;
}

//Test 1
console.log("Test 1 (Basic): ", merge([101,104,107,0,0,0], 3, [102,105,108], 3));

//Test 2
console.log("Test 2 (Basic): ", merge([101,104,107,109], 4, [102,105,108, 110, 111], 5));

//Test 3
console.log("Test 3 (Basic): ", merge([101], 1, [102,105,108], 3));

//Test 1
console.log("Test 1 (Edge): ", merge([], 0, [102,105,108], 3));

//Test 2
console.log("Test 2 (Edge): ", merge([101,104,107], 3, [], 0));

//Test 3
console.log("Test 3 (Edge): ", merge([0], 0, [102,105,108], 3));