/**
 * Converts the first character of a string to uppercase.
 * @param str The input string.
 * @returns The string with the first character in uppercase.
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts the first character of a string to lowercase.
 * @param str The input string.
 * @returns The string with the first character in lowercase.
 */
export function decapitalize(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Removes leading and trailing whitespace from a string.
 * @param str The input string.
 * @returns The string with leading and trailing whitespace removed.
 */
export function trim(str: string): string {
    return str.trim();
}

/**
 * Checks if a string starts with the specified prefix.
 * @param str The input string.
 * @param prefix The prefix to check for.
 * @returns True if the string starts with the prefix, false otherwise.
 */
export function startsWith(str: string, prefix: string): boolean {
    return str.startsWith(prefix);
}

/**
 * Checks if a string ends with the specified suffix.
 * @param str The input string.
 * @param suffix The suffix to check for.
 * @returns True if the string ends with the suffix, false otherwise.
 */
export function endsWith(str: string, suffix: string): boolean {
    return str.endsWith(suffix);
}

/**
 * Reverses a string.
 * @param str The input string.
 * @returns The reversed string.
 */
export function reverse(str: string): string {
    return str.split('').reverse().join('');
}

/**
 * Counts the occurrences of a substring within a string.
 * @param str The input string.
 * @param subStr The substring to search for.
 * @returns The number of occurrences of the substring in the string.
 */
export function countOccurrences(str: string, subStr: string): number {
    return str.split(subStr).length - 1;
}
