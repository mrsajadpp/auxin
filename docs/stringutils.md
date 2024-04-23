# String Utility Functions Documentation

This npm package offers various utility functions for manipulating strings in TypeScript. Below, you'll find detailed descriptions of each function along with code examples demonstrating their usage.

## `capitalize`

This function converts the first character of a string to uppercase.

### Parameters

- `str`: The input string.

### Returns

The string with the first character in uppercase.

### Example

```typescript
const { capitalize } = require('stringUtils');

const str = 'hello world';
const capitalizedStr = capitalize(str);
console.log(capitalizedStr); // Output: 'Hello world'
```

## `decapitalize`

This function converts the first character of a string to lowercase.

### Parameters

- `str`: The input string.

### Returns

The string with the first character in lowercase.

### Example

```typescript
const { decapitalize } = require('stringUtils');

const str = 'Hello World';
const decapitalizedStr = decapitalize(str);
console.log(decapitalizedStr); // Output: 'hello World'
```

## `toLowerCase`

This function converts all characters in a string to lowercase.

### Parameters

- `str`: The input string.

### Returns

The string with all characters in lowercase.

### Example

```typescript
const { toLowerCase } = require('stringUtils');

const str = 'Hello World';
const lowerCaseStr = toLowerCase(str);
console.log(lowerCaseStr); // Output: 'hello world'
```

## `toUpperCase`

This function converts all characters in a string to uppercase.

### Parameters

- `str`: The input string.

### Returns

The string with all characters in uppercase.

### Example

```typescript
const { toUpperCase } = require('stringUtils');

const str = 'hello world';
const upperCaseStr = toUpperCase(str);
console.log(upperCaseStr); // Output: 'HELLO WORLD'
```

## `trim`

This function removes leading and trailing whitespace from a string.

### Parameters

- `str`: The input string.

### Returns

The string with leading and trailing whitespace removed.

### Example

```typescript
const { trim } = require('stringUtils');

const str = '   hello world   ';
const trimmedStr = trim(str);
console.log(trimmedStr); // Output: 'hello world'
```

## `startsWith`

This function checks if a string starts with the specified prefix.

### Parameters

- `str`: The input string.
- `prefix`: The prefix to check for.

### Returns

True if the string starts with the prefix, false otherwise.

### Example

```typescript
const { startsWith } = require('stringUtils');

const str = 'hello world';
const prefix = 'hello';
const startsWithPrefix = startsWith(str, prefix);
console.log(startsWithPrefix); // Output: true
```

## `endsWith`

This function checks if a string ends with the specified suffix.

### Parameters

- `str`: The input string.
- `suffix`: The suffix to check for.

### Returns

True if the string ends with the suffix, false otherwise.

### Example

```typescript
const { endsWith } = require('stringUtils');

const str = 'hello world';
const suffix = 'world';
const endsWithSuffix = endsWith(str, suffix);
console.log(endsWithSuffix); // Output: true
```

## `reverseStr`

This function reverses a string.

### Parameters

- `str`: The input string.

### Returns

The reversed string.

### Example

```typescript
const { reverseStr } = require('stringUtils');

const str = 'hello world';
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: 'dlrow olleh'
```

## `countOccurrences`

This function counts the occurrences of a substring within a string.

### Parameters

- `str`: The input string.
- `subStr`: The substring to search for.

### Returns

The number of occurrences of the substring in the string.

### Example

```typescript
const { countOccurrences } = require('stringUtils');

const str = 'hello world hello hello';
const subStr = 'hello';
const occurrences = countOccurrences(str, subStr);
console.log(occurrences); // Output: 3
```

<div align="center">

---

Made with ❤️ by Sajad Collaborated with Grovix Lab

</div>
