// export module arrayUtils {
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

export function binarySearch<T>(arr: T[], target: T): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midVal = arr[mid];

        if (midVal === target) {
            return mid;
        } else if (midVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
}

export function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

export function quickSortDescending<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= pivot) { // Modified condition for descending order
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)]; // Recursively sort left and right arrays
}


export function arrPush<T>(arr: T[], target: T): T[] {
    arr.push(target);
    return arr;
}

export function arrUnshift<T>(arr: T[], target: T): T[] {
    arr.unshift(target);
    return arr;
}

export function arrPop<T>(arr: T[]): T[] {
    arr.pop();
    return arr;
}

export function arrShift<T>(arr: T[]): T[] {
    arr.shift();
    return arr;
}

export function arrSlice<T>(arr: T[], start: number, end: number): T[] {
    arr.slice(start, end);
    return arr;
}

export function arrToUpperCase<T>(arr: T[]): T[] {
    // Create a new array to store the uppercase elements
    const upperCaseArray: T[] = [];

    // Iterate through the original array and convert each element to uppercase
    for (const element of arr) {
        // Check if the element is a string
        if (typeof element === 'string') {
            // If it's a string, convert it to uppercase and push to the new array
            upperCaseArray.push(element.toUpperCase() as unknown as T);
        } else {
            // If it's not a string, push it to the new array as is
            upperCaseArray.push(element);
        }
    }

    // Return the array with all elements converted to uppercase
    return upperCaseArray;
}


export function arrToLowerCase<T>(arr: T[]): T[] {
    // Create a new array to store the lowercase elements
    const lowerCaseArray: T[] = [];

    // Iterate through the original array and convert each element to lowercase
    for (const element of arr) {
        // Check if the element is a string
        if (typeof element === 'string') {
            // If it's a string, convert it to lowercase and push to the new array
            lowerCaseArray.push(element.toLowerCase() as unknown as T);
        } else {
            // If it's not a string, push it to the new array as is
            lowerCaseArray.push(element);
        }
    }

    // Return the array with all elements converted to lowercase
    return lowerCaseArray;
}

// Add more array utility functions here as needed...
// }
