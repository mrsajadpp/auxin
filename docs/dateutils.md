# Date Utility Functions Documentation

This npm package provides several utility functions for working with dates in TypeScript. Below are the details of each function along with code examples for usage.

## `formatDate`

Formats a date object as a string in the specified format.

### Parameters

- `date`: The date object to format.
- `format`: The format string (e.g., 'YYYY-MM-DD HH:mm:ss').

### Returns

The formatted date string.

### Example

```typescript
import { formatDate } from 'auxin';

const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate); // Output: '2024-04-21 12:30:45'
```

## `getCurrentDateTime`

Gets the current date and time formatted as a string in the specified format.

### Parameters

- `format`: The format string (e.g., 'YYYY-MM-DD HH:mm:ss').

### Returns

The formatted current date and time string.

### Example

```typescript
import { getCurrentDateTime } from 'auxin';

const formattedDateTime = getCurrentDateTime('YYYY-MM-DD HH:mm:ss');
console.log(formattedDateTime); // Output: '2024-04-21 12:30:45'
```

## `parseDate`

Parses a date string into a Date object.

### Parameters

- `dateString`: The date string to parse.

### Returns

The parsed Date object, or null if parsing fails.

### Example

```typescript
import { parseDate } from 'auxin';

const dateString = '2024-04-21';
const parsedDate = parseDate(dateString);
console.log(parsedDate); // Output: Date object for '2024-04-21'
```

## `isLeapYear`

Checks if a given year is a leap year.

### Parameters

- `year`: The year to check.

### Returns

True if the year is a leap year, false otherwise.

### Example

```typescript
import { isLeapYear } from 'auxin';

const year = 2024;
const isLeap = isLeapYear(year);
console.log(isLeap); // Output: true
```

<div align="center">

---

Made with ❤️ by Sajad Collaborated with Grovix Lab

</div>