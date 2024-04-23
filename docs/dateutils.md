# Date Utility Functions Documentation

This npm package offers various utility functions for managing dates in TypeScript. Below, you'll find detailed descriptions of each function along with code examples demonstrating their usage.

## `formatDate`

This function formats a date object into a string based on the provided format.

### Parameters

- `date`: The date object to format.
- `format`: The format string (e.g., 'YYYY-MM-DD HH:mm:ss').

### Returns

The formatted date string.

### Example

```typescript
const { formatDate } = require('auxin');

const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate); // Output: '2024-04-21 12:30:45'
```

## `getCurrentDateTime`

This function retrieves the current date and time formatted as a string according to the specified format.

### Parameters

- `format`: The format string (e.g., 'YYYY-MM-DD HH:mm:ss').

### Returns

The formatted current date and time string.

### Example

```typescript
const { getCurrentDateTime } = require('auxin');

const formattedDateTime = getCurrentDateTime('YYYY-MM-DD HH:mm:ss');
console.log(formattedDateTime); // Output: '2024-04-21 12:30:45'
```

## `parseDate`

This function parses a date string and returns a Date object.

### Parameters

- `dateString`: The date string to parse.

### Returns

The parsed Date object, or null if parsing fails.

### Example

```typescript
const { parseDate } = require('auxin');

const dateString = '2024-04-21';
const parsedDate = parseDate(dateString);
console.log(parsedDate); // Output: Date object for '2024-04-21'
```

## `isLeapYear`

This function checks if a given year is a leap year.

### Parameters

- `year`: The year to check.

### Returns

True if the year is a leap year, false otherwise.

### Example

```typescript
const { isLeapYear } = require('auxin');

const year = 2024;
const isLeap = isLeapYear(year);
console.log(isLeap); // Output: true
```

<div align="center">

---

Made with ❤️ by Sajad Collaborated with Grovix Lab

</div>