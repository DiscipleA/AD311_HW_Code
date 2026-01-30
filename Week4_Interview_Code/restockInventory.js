function restockInventory (inventory){

    let i = 0;

    while (i < inventory.length) {

        if (inventory[i] === 0) {

            inventory.splice(i + 1, 0, 0);

            inventory.pop();

            i++
        }
        i++

    }

    return inventory;
}

console.log("Test 1 (Normal) passed =>", restockInventory([4,0,1,3,0,2,5,0]).join() === [4,0,0,1,3,0,0,2].join());

console.log("Test 2 (Normal) passed =>", restockInventory([0,1,3]).join() === [0,0,1].join());

console.log("Test 3 (Normal) passed =>", restockInventory([4,0,1]).join() === [4,0,0].join());

console.log("Test 1 (Edge) passed =>", restockInventory([]).join() === [].join());

console.log("Test 2 (Edge) passed =>", restockInventory([0,0,0]).join() === [0,0,0].join());

console.log("Test 3 (Edge) passed =>", restockInventory([3,2,1]).join() === [3,2,1].join());