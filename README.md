# Auxin Utility Toolkit

The Utility Toolkit npm package is a comprehensive collection of utility functions designed to streamline common tasks in Node.js development. Whether you're working on string manipulation, array operations, date/time formatting, or other general-purpose tasks, this toolkit has you covered.

## Installation

You can install the Utility Toolkit npm package via npm:

```bash
npm install auxin
```

## Usage

To use the Utility Toolkit in your Node.js project, simply import the desired utility functions from the package:

```typescript
import { arrayUtils, stringUtils, dateUtils } from 'auxin';

// Example usage of arrayUtils
const arr = [1, 2, 3, 4, 5];
const filteredArr = arrayUtils.filterArray(arr, num => num % 2 === 0);
console.log(filteredArr); // Output: [2, 4]

// Example usage of stringUtils
const str = 'Hello, World!';
const reversedStr = stringUtils.reverseStr(str);
console.log(reversedStr); // Output: '!dlroW ,olleH'

// Example usage of dateUtils
const currentDate = new Date();
const formattedDate = dateUtils.formatDate(currentDate, 'yyyy-MM-dd');
console.log(formattedDate); // Output: '2024-04-21'
```

## Documentation

For detailed documentation on the available utility functions and their usage, please refer to the [documentation](docs/index.md) included with the package.

## Contributing

Contributions are welcome! If you have suggestions for new utility functions, improvements to existing ones, or any other feedback, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).