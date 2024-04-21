# String Utility Functions Documentation

This npm package provides several utility functions for working with strings in TypeScript. Below are the details of each function along with code examples for usage.

## `capitalize`

Converts the first character of a string to uppercase.

### Parameters

- `str`: The input string.

### Returns

The string with the first character in uppercase.

### Example

```typescript
import { capitalize } from 'auxin';

const str = 'hello';
const capitalizedStr = capitalize(str);
console.log(capitalizedStr); // Output: 'Hello'
```

## `decapitalize`

Converts the first character of a string to lowercase.

### Parameters

- `str`: The input string.

### Returns

The string with the first character in lowercase.

### Example

```typescript
import { decapitalize } from 'auxin';

const str = 'Hello';
const decapitalizedStr = decapitalize(str);
console.log(decapitalizedStr); // Output: 'hello'
```

## `toLowerCase`

Converts a string to lowercase.

### Parameters

- `str`: The input string.

### Returns

The lowercase version of the string.

### Example

```typescript
import { toLowerCase } from 'auxin';

const str = 'HELLO';
const lowerCaseStr = toLowerCase(str);
console.log(lowerCaseStr); // Output: 'hello'
```

## `toUpperCase`

Converts a string to uppercase.

### Parameters

- `str`: The input string.

### Returns

The uppercase version of the string.

### Example

```typescript
import { toUpperCase } from 'auxin';

const str = 'hello';
const upperCaseStr = toUpperCase(str);
console.log(upperCaseStr); // Output: 'HELLO'
```

## `trim`

Removes leading and trailing whitespace from a string.

### Parameters

- `str`: The input string.

### Returns

The string with leading and trailing whitespace removed.

### Example

```typescript
import { trim } from 'auxin';

const str = '   hello   ';
const trimmedStr = trim(str);
console.log(trimmedStr); // Output: 'hello'
```

## `startsWith`

Checks if a string starts with the specified prefix.

### Parameters

- `str`: The input string.
- `prefix`: The prefix to check for.

### Returns

True if the string starts with the prefix, false otherwise.

### Example

```typescript
import { startsWith } from 'auxin';

const str = 'hello';
const prefix = 'he';
const startsWithPrefix = startsWith(str, prefix);
console.log(startsWithPrefix); // Output: true
```

## `endsWith`

Checks if a string ends with the specified suffix.

### Parameters

- `str`: The input string.
- `suffix`: The suffix to check for.

### Returns

True if the string ends with the suffix, false otherwise.

### Example

```typescript
import { endsWith } from 'auxin';

const str = 'hello';
const suffix = 'lo';
const endsWithSuffix = endsWith(str, suffix);
console.log(endsWithSuffix); // Output: true
```

## `reverseStr`

Reverses a string.

### Parameters

- `str`: The input string.

### Returns

The reversed string.

### Example

```typescript
import { reverseStr } from 'auxin';

const str = 'hello';
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: 'olleh'
```

## `countOccurrences`

Counts the occurrences of a substring within a string.

### Parameters

- `str`: The input string.
- `subStr`: The substring to search for.

### Returns

The number of occurrences of the substring in the string.

### Example

```typescript
import { countOccurrences } from 'auxin';

const str = 'hello world hello';
const subStr = 'hello';
const occurrences = countOccurrences(str, subStr);
console.log(occurrences); // Output: 2
```