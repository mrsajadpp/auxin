const { formatDate, getCurrentDateTime, parseDate, isLeapYear } = require('../dist/dateUtils');

const date = getCurrentDateTime('MM/YYYY/DD');
console.log(date);
console.log(isLeapYear(2023));