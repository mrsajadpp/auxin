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
const { filterArray } = require('auxin');

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
const { mapArray } = require('auxin');

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
const { binarySearch } = require('auxin');

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
const { quickSort } = require('auxin');

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
```

## `arrPush`

Appends an element to the end of an array.

### Parameters

- `arr`: The array to modify.
- `target`: The element to append to the array.

### Returns

The modified array with the element appended.

### Example

```typescript
const { arrPush } = require('auxin');

let arr = [1, 2, 3];
arr = arrPush(arr, 4);
console.log(arr); // Output: [1, 2, 3, 4]
```

## `arrUnshift`

Prepends an element to the beginning of an array.

### Parameters

- `arr`: The array to modify.
- `target`: The element to prepend to the array.

### Returns

The modified array with the element prepended.

### Example

```typescript
const { arrUnshift } = require('auxin');

let arr = [2, 3, 4];
arr = arrUnshift(arr, 1);
console.log(arr); // Output: [1, 2, 3, 4]
```

## `arrPop`

Removes the last element from an array.

### Parameters

- `arr`: The array to modify.

### Returns

The modified array with the last element removed.

### Example

```typescript
const { arrPop } = require('auxin');

let arr = [1, 2, 3];
arr = arrPop(arr);
console.log(arr); // Output: [1, 2]
```

## `arrShift`

Removes the first element from an array.

### Parameters

- `arr`: The array to modify.

### Returns

The modified array with the first element removed.

### Example

```typescript
const { arrShift } = require('auxin');

let arr = [1, 2, 3];
arr = arrShift(arr);
console.log(arr); // Output: [2, 3]
```

## `arrSlice`

Extracts a section of an array and returns a new array.

### Parameters

- `arr`: The array to slice.
- `start`: The start index.
- `end`: The end index (exclusive).

### Returns

A new array containing the sliced elements.

### Example

```typescript
const { arrSlice } = require('auxin');

const arr = [1, 2, 3, 4, 5];
const slicedArr = arrSlice(arr, 1, 3);
console.log(slicedArr); // Output: [2, 3]
```

## `arrToUpperCase`

Converts all string elements of an array to uppercase.

### Parameters

- `arr`: The array to modify.

### Returns

A new array with all string elements converted to uppercase.

### Example

```typescript
const { arrToUpperCase } = require('auxin');

const arr = ['hello', 'world'];
const upperCaseArr = arrToUpperCase(arr);
console.log(upperCaseArr); // Output: ['HELLO', 'WORLD']
```

## `arrToLowerCase`

Converts all string elements of an array to lowercase.

### Parameters

- `arr`: The array to modify.

### Returns

A new array with all string elements converted to lowercase.

### Example

```typescript
const { arrToLowerCase } = require('auxin');

const arr = ['HELLO', 'WORLD'];
const lowerCaseArr = arrToLowerCase(arr);
console.log(lowerCaseArr); // Output: ['hello', 'world']
```

## `arrayUtils`

Exports all array utility functions.

### Example

```typescript
const arrayUtils = require('auxin');

const arr = [1, 2, 3, 4, 5];
const filteredArr = arrayUtils.filterArray(arr, num => num % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
```

## `quickSortDescending`

Sorts an array in descending order using the Quick Sort algorithm.

### Parameters

- `arr`: The array to sort.

### Returns

A new array containing the sorted elements in descending order.

### Example

```typescript
const { quickSortDescending } = require('auxin');

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArr = quickSortDescending(arr);
console.log(sortedArr); // Output: [9, 6, 5, 5, 4, 3, 2, 1, 1]
```

<div align="center">

---

Made with ❤️ by Sajad Collaborated with Grovix Lab

</div>
