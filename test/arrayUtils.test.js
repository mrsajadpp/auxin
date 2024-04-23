const { binarySearch, quickSort, quickSortDescending, arrPop, arrPush, arrShift, arrSlice, arrToLowerCase, arrToUpperCase, arrUnshift, filterArray }  = require('../dist/arrayUtils'); // Import the array utility functions to be tested

const arr = ['a', 'b', 'c', 'd', 'e'];
const index = binarySearch(arr, 'c');
console.log(index); // Output: 2

const arrr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArr = quickSort(arrr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]


const decarrr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const dec = quickSortDescending(decarrr);
console.log("dec",dec); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]

// const desarrr = [5, 2, 8, 1, 9];
// const sortedDescending = quickSortDescending(desarrr);
// console.log(sortedDescending); // Output: [9, 8, 5, 2, 1]


const pushedArray = arrPush(arr, 3);
console.log(pushedArray);

const unshiftedArr = arrUnshift(arrr, 3)
console.log(unshiftedArr);

const arre = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const poppedArr = arrPop(arre)
console.log(poppedArr);