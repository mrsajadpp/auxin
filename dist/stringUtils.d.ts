export declare namespace stringUtils {
    /**
     * Converts the first character of a string to uppercase.
     * @param str The input string.
     * @returns The string with the first character in uppercase.
     */
    function capitalize(str: string): string;
    /**
     * Converts the first character of a string to lowercase.
     * @param str The input string.
     * @returns The string with the first character in lowercase.
     */
    function decapitalize(str: string): string;
    function toLowerCase(str: string): string;
    function toUpperCase(str: string): string;
    /**
     * Removes leading and trailing whitespace from a string.
     * @param str The input string.
     * @returns The string with leading and trailing whitespace removed.
     */
    function trim(str: string): string;
    /**
     * Checks if a string starts with the specified prefix.
     * @param str The input string.
     * @param prefix The prefix to check for.
     * @returns True if the string starts with the prefix, false otherwise.
     */
    function startsWith(str: string, prefix: string): boolean;
    /**
     * Checks if a string ends with the specified suffix.
     * @param str The input string.
     * @param suffix The suffix to check for.
     * @returns True if the string ends with the suffix, false otherwise.
     */
    function endsWith(str: string, suffix: string): boolean;
    /**
     * Reverses a string.
     * @param str The input string.
     * @returns The reversed string.
     */
    function reverseStr(str: string): string;
    /**
     * Counts the occurrences of a substring within a string.
     * @param str The input string.
     * @param subStr The substring to search for.
     * @returns The number of occurrences of the substring in the string.
     */
    function countOccurrences(str: string, subStr: string): number;
}
