"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayUtils = void 0;
var arrayUtils;
(function (arrayUtils) {
    /**
     * Filters an array based on a predicate function.
     * @param arr The array to filter.
     * @param predicate The predicate function used to filter elements.
     * @returns A new array containing only the elements that satisfy the predicate function.
     */
    function filterArray(arr, predicate) {
        return arr.filter(predicate);
    }
    arrayUtils.filterArray = filterArray;
    /**
     * Maps each element of an array to a new value using a transformation function.
     * @param arr The array to map.
     * @param mapper The transformation function to apply to each element.
     * @returns A new array containing the transformed elements.
     */
    function mapArray(arr, mapper) {
        return arr.map(mapper);
    }
    arrayUtils.mapArray = mapArray;
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midVal = arr[mid];
            if (midVal === target) {
                return mid;
            }
            else if (midVal < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1; // Element not found
    }
    arrayUtils.binarySearch = binarySearch;
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[0];
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    arrayUtils.quickSort = quickSort;
    function arrPush(arr, target) {
        arr.push(target);
        return arr;
    }
    arrayUtils.arrPush = arrPush;
    function arrUnshift(arr, target) {
        arr.unshift(target);
        return arr;
    }
    arrayUtils.arrUnshift = arrUnshift;
    function arrPop(arr) {
        arr.pop();
        return arr;
    }
    arrayUtils.arrPop = arrPop;
    function arrShift(arr) {
        arr.shift();
        return arr;
    }
    arrayUtils.arrShift = arrShift;
    function arrSlice(arr, start, end) {
        arr.slice(start, end);
        return arr;
    }
    arrayUtils.arrSlice = arrSlice;
    function arrToUpperCase(arr) {
        // Create a new array to store the uppercase elements
        const upperCaseArray = [];
        // Iterate through the original array and convert each element to uppercase
        for (const element of arr) {
            // Check if the element is a string
            if (typeof element === 'string') {
                // If it's a string, convert it to uppercase and push to the new array
                upperCaseArray.push(element.toUpperCase());
            }
            else {
                // If it's not a string, push it to the new array as is
                upperCaseArray.push(element);
            }
        }
        // Return the array with all elements converted to uppercase
        return upperCaseArray;
    }
    arrayUtils.arrToUpperCase = arrToUpperCase;
    function arrToLowerCase(arr) {
        // Create a new array to store the lowercase elements
        const lowerCaseArray = [];
        // Iterate through the original array and convert each element to lowercase
        for (const element of arr) {
            // Check if the element is a string
            if (typeof element === 'string') {
                // If it's a string, convert it to lowercase and push to the new array
                lowerCaseArray.push(element.toLowerCase());
            }
            else {
                // If it's not a string, push it to the new array as is
                lowerCaseArray.push(element);
            }
        }
        // Return the array with all elements converted to lowercase
        return lowerCaseArray;
    }
    arrayUtils.arrToLowerCase = arrToLowerCase;
    // Add more array utility functions here as needed...
})(arrayUtils || (exports.arrayUtils = arrayUtils = {}));
//# sourceMappingURL=arrayUtils.js.map