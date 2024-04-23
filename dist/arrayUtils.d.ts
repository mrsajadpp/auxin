/**
 * Filters an array based on a predicate function.
 * @param arr The array to filter.
 * @param predicate The predicate function used to filter elements.
 * @returns A new array containing only the elements that satisfy the predicate function.
 */
export declare function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[];
/**
 * Maps each element of an array to a new value using a transformation function.
 * @param arr The array to map.
 * @param mapper The transformation function to apply to each element.
 * @returns A new array containing the transformed elements.
 */
export declare function mapArray<T, U>(arr: T[], mapper: (element: T) => U): U[];
export declare function binarySearch<T>(arr: T[], target: T): number;
export declare function quickSort<T>(arr: T[]): T[];
export declare function quickSortDescending<T>(arr: T[]): T[];
export declare function arrPush<T>(arr: T[], target: T): T[];
export declare function arrUnshift<T>(arr: T[], target: T): T[];
export declare function arrPop<T>(arr: T[]): T[];
export declare function arrShift<T>(arr: T[]): T[];
export declare function arrSlice<T>(arr: T[], start: number, end: number): T[];
export declare function arrToUpperCase<T>(arr: T[]): T[];
export declare function arrToLowerCase<T>(arr: T[]): T[];
