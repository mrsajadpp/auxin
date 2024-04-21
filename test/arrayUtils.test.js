const { arrayUtils }  = require('../dist/arrayUtils'); // Import the array utility functions to be tested

const arr = ['a', 'b', 'c', 'd', 'e'];
const index = arrayUtils.binarySearch(arr, 'c');
console.log(index); // Output: 2

const arrr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArr = arrayUtils.quickSort(arrr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]


const decarrr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const dec = arrayUtils.quickSortDescending(decarrr);
console.log("dec",dec); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]

// const desarrr = [5, 2, 8, 1, 9];
// const sortedDescending = quickSortDescending(desarrr);
// console.log(sortedDescending); // Output: [9, 8, 5, 2, 1]


const pushedArray = arrayUtils.arrPush(arr, 3);
console.log(pushedArray);

const unshiftedArr = arrayUtils.arrUnshift(arrr, 3)
console.log(unshiftedArr);

const arre = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const poppedArr = arrayUtils.arrPop(arre)
console.log(poppedArr);