export declare namespace arrayUtils {
    /**
     * Filters an array based on a predicate function.
     * @param arr The array to filter.
     * @param predicate The predicate function used to filter elements.
     * @returns A new array containing only the elements that satisfy the predicate function.
     */
    function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[];
    /**
     * Maps each element of an array to a new value using a transformation function.
     * @param arr The array to map.
     * @param mapper The transformation function to apply to each element.
     * @returns A new array containing the transformed elements.
     */
    function mapArray<T, U>(arr: T[], mapper: (element: T) => U): U[];
    function binarySearch<T>(arr: T[], target: T): number;
    function quickSort<T>(arr: T[]): T[];
    function arrPush<T>(arr: T[], target: T): T[];
    function arrUnshift<T>(arr: T[], target: T): T[];
    function arrPop<T>(arr: T[]): T[];
    function arrShift<T>(arr: T[]): T[];
    function arrSlice<T>(arr: T[], start: number, end: number): T[];
    function arrToUpperCase<T>(arr: T[]): T[];
    function arrToLowerCase<T>(arr: T[]): T[];
}
