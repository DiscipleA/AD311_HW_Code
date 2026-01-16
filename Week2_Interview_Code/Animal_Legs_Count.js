//const four_legged = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat'];

//let animals = ['frog', 'horse', 'spider', 'ant'];

function test(animals, four_legged) {
    let count = 0;
    for (let i = 0; i < animals.length; i++) {
        for (let j = 0; j < four_legged.length; j++) {
            if (animals[i] === four_legged[j]) {
                count++;
            }
        }
    }
    return count;
}

//Test 1 => 1
console.log('Test 1: ', test(['frog', 'horse', 'spider', 'ant'], ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']));

//Test 2 => 3
console.log('Test 2: ', test(['lion', 'monkey', 'deer', 'snake', 'elephant'], ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']));

//Test 3 => 0
console.log('Test 3: ', test(['snake', 'monkey', 'worm', 'snake', 'frog'], ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']));

//Test 4 => 0
console.log('Test 4: ', test([], ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']));

//Test 5 => 0
console.log('Test 5: ', test(['snake', 'monkey', 'worm', 'snake', 'frog'], []));

//Test 6 => 3
console.log('Test 6: ', test(['lion', 'monkey', 'horse', 'lion', 'frog'], ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat']));