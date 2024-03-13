"use strict";
function moveZeros(array) {
    let nonZeroIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[nonZeroIndex] = array[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
}
console.log(moveZeros([false, 0, true, 0, 0, 1, 0, 1, "", "h", 2, 0, 1, 3, "a"])); // Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]
