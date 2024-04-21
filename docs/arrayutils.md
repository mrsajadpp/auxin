# Array Utility Functions Documentation

This npm package provides several utility functions for working with arrays in TypeScript. Below are the details of each function along with code examples for usage.

## `filterArray`

Filters an array based on a predicate function.

### Parameters

- `arr`: The array to filter.
- `predicate`: The predicate function used to filter elements.

### Returns

A new array containing only the elements that satisfy the predicate function.

### Example

```typescript
import { filterArray } from 'auxin';

const arr = [1, 2, 3, 4, 5];
const filteredArr = filterArray(arr, num => num % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
```

## `mapArray`

Maps each element of an array to a new value using a transformation function.

### Parameters

- `arr`: The array to map.
- `mapper`: The transformation function to apply to each element.

### Returns

A new array containing the transformed elements.

### Example

```typescript
import { mapArray } from 'auxin';

const arr = [1, 2, 3, 4, 5];
const squaredArr = mapArray(arr, num => num * num);
console.log(squaredArr); // Output: [1, 4, 9, 16, 25]
```

## `binarySearch`

Performs a binary search on a sorted array to find the index of a target element.

### Parameters

- `arr`: The sorted array to search.
- `target`: The target element to find.

### Returns

The index of the target element if found, otherwise -1.

### Example

```typescript
import { binarySearch } from 'auxin';

const arr = [1, 2, 3, 4, 5];
const index = binarySearch(arr, 3);
console.log(index); // Output: 2
```

## `quickSort`

Sorts an array using the Quick Sort algorithm.

### Parameters

- `arr`: The array to sort.

### Returns

A new array containing the sorted elements.

### Example

```typescript
import { quickSort } from 'auxin';

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
```