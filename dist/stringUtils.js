"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countOccurrences = exports.reverse = exports.endsWith = exports.startsWith = exports.trim = exports.decapitalize = exports.capitalize = void 0;
/**
 * Converts the first character of a string to uppercase.
 * @param str The input string.
 * @returns The string with the first character in uppercase.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
/**
 * Converts the first character of a string to lowercase.
 * @param str The input string.
 * @returns The string with the first character in lowercase.
 */
function decapitalize(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
exports.decapitalize = decapitalize;
/**
 * Removes leading and trailing whitespace from a string.
 * @param str The input string.
 * @returns The string with leading and trailing whitespace removed.
 */
function trim(str) {
    return str.trim();
}
exports.trim = trim;
/**
 * Checks if a string starts with the specified prefix.
 * @param str The input string.
 * @param prefix The prefix to check for.
 * @returns True if the string starts with the prefix, false otherwise.
 */
function startsWith(str, prefix) {
    return str.startsWith(prefix);
}
exports.startsWith = startsWith;
/**
 * Checks if a string ends with the specified suffix.
 * @param str The input string.
 * @param suffix The suffix to check for.
 * @returns True if the string ends with the suffix, false otherwise.
 */
function endsWith(str, suffix) {
    return str.endsWith(suffix);
}
exports.endsWith = endsWith;
/**
 * Reverses a string.
 * @param str The input string.
 * @returns The reversed string.
 */
function reverse(str) {
    return str.split('').reverse().join('');
}
exports.reverse = reverse;
/**
 * Counts the occurrences of a substring within a string.
 * @param str The input string.
 * @param subStr The substring to search for.
 * @returns The number of occurrences of the substring in the string.
 */
function countOccurrences(str, subStr) {
    return str.split(subStr).length - 1;
}
exports.countOccurrences = countOccurrences;
//# sourceMappingURL=stringUtils.js.map