"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtils = void 0;
var stringUtils;
(function (stringUtils) {
    /**
     * Converts the first character of a string to uppercase.
     * @param str The input string.
     * @returns The string with the first character in uppercase.
     */
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    stringUtils.capitalize = capitalize;
    /**
     * Converts the first character of a string to lowercase.
     * @param str The input string.
     * @returns The string with the first character in lowercase.
     */
    function decapitalize(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    stringUtils.decapitalize = decapitalize;
    function toLowerCase(str) {
        return str.toLowerCase();
    }
    stringUtils.toLowerCase = toLowerCase;
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    stringUtils.toUpperCase = toUpperCase;
    /**
     * Removes leading and trailing whitespace from a string.
     * @param str The input string.
     * @returns The string with leading and trailing whitespace removed.
     */
    function trim(str) {
        return str.trim();
    }
    stringUtils.trim = trim;
    /**
     * Checks if a string starts with the specified prefix.
     * @param str The input string.
     * @param prefix The prefix to check for.
     * @returns True if the string starts with the prefix, false otherwise.
     */
    function startsWith(str, prefix) {
        return str.startsWith(prefix);
    }
    stringUtils.startsWith = startsWith;
    /**
     * Checks if a string ends with the specified suffix.
     * @param str The input string.
     * @param suffix The suffix to check for.
     * @returns True if the string ends with the suffix, false otherwise.
     */
    function endsWith(str, suffix) {
        return str.endsWith(suffix);
    }
    stringUtils.endsWith = endsWith;
    /**
     * Reverses a string.
     * @param str The input string.
     * @returns The reversed string.
     */
    function reverseStr(str) {
        return str.split('').reverse().join('');
    }
    stringUtils.reverseStr = reverseStr;
    /**
     * Counts the occurrences of a substring within a string.
     * @param str The input string.
     * @param subStr The substring to search for.
     * @returns The number of occurrences of the substring in the string.
     */
    function countOccurrences(str, subStr) {
        return str.split(subStr).length - 1;
    }
    stringUtils.countOccurrences = countOccurrences;
})(stringUtils || (exports.stringUtils = stringUtils = {}));
//# sourceMappingURL=stringUtils.js.map