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
    // Add more array utility functions here as needed...
})(arrayUtils || (exports.arrayUtils = arrayUtils = {}));
//# sourceMappingURL=arrayUtils.js.map