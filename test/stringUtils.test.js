const {
    capitalize,
    decapitalize,
    toLowerCase,
    toUpperCase,
    trim,
    startsWith,
    endsWith,
    reverseStr,
    countOccurrences
} = require('../dist/stringUtils');

// Example usage of stringUtils
const str = 'Hello world!';
const capitalStr = capitalize(str);
console.log(capitalStr);
const decapStr = decapitalize(str)
console.log(decapStr);
const lowerStr = toLowerCase(str)
console.log(lowerStr);
const upperStr = toUpperCase(str)
console.log(upperStr);
const trimStr = trim(str)
console.log(trimStr);
const startsStr = startsWith(str, 'H');
console.log(startsStr);
const endsStr = endsWith(str, '!')
console.log(endsStr);
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: '!dlroW ,olleH'
const countStr = countOccurrences(str, str)
console.log(countStr);