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
    // Add more array utility functions here as needed...
})(arrayUtils || (exports.arrayUtils = arrayUtils = {}));
//# sourceMappingURL=arrayUtils.js.map