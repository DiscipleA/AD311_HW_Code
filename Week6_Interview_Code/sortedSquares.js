function sortedSquares(growthPercentages) {
  const n = growthPercentages.length;
  const result = new Array(n);
  
  let left = 0;
  let right = n - 1;
  let resultIndex = n - 1;

  while (left <= right) {
    const leftSquare = growthPercentages[left] ** 2;
    const rightSquare = growthPercentages[right] ** 2;

    if (leftSquare > rightSquare) {
      result[resultIndex] = leftSquare;
      left++;
    } else {
      result[resultIndex] = rightSquare;
      right--;
    }
    resultIndex--;
  }

  return result;
}

//export default sortedSquares;

console.log("Test 1 (Normal) passed =>", sortedSquares([-5, -2, 0, 3, 10]).join() === [0, 4, 9, 25, 100].join());

console.log("Test 2 (Normal) passed =>", sortedSquares([1, 2, 3, 5]).join() === [1, 4, 9, 25].join());

console.log("Test 3 (Normal) passed =>", sortedSquares([-8, -3, -1]).join() === [1, 9, 64].join());

console.log("Test 1 (Edge) passed =>", sortedSquares([]).join() === [].join());

console.log("Test 2 (Edge) passed =>", sortedSquares([-7]).join() === [49].join());

console.log("Test 3 (Edge) passed =>", sortedSquares([-2, -2, 2, 2]).join() === [4, 4, 4, 4].join());