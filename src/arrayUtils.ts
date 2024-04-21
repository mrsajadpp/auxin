export module arrayUtils {
    /**
     * Filters an array based on a predicate function.
     * @param arr The array to filter.
     * @param predicate The predicate function used to filter elements.
     * @returns A new array containing only the elements that satisfy the predicate function.
     */
    export function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
        return arr.filter(predicate);
    }

    /**
     * Maps each element of an array to a new value using a transformation function.
     * @param arr The array to map.
     * @param mapper The transformation function to apply to each element.
     * @returns A new array containing the transformed elements.
     */
    export function mapArray<T, U>(arr: T[], mapper: (element: T) => U): U[] {
        return arr.map(mapper);
    }

    // Add more array utility functions here as needed...
}
