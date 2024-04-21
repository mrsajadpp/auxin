export declare namespace dateUtils {
    /**
     * Format a date object as a string in the specified format.
     * @param date The date object to format.
     * @param format The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
     * @returns The formatted date string.
     */
    function formatDate(date: Date, format: string): string;
    /**
     * Get the current date and time formatted as a string in the specified format.
     * @param format The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
     * @returns The formatted current date and time string.
     */
    function getCurrentDateTime(format: string): string;
    /**
     * Parse a date string into a Date object.
     * @param dateString The date string to parse.
     * @returns The parsed Date object, or null if parsing fails.
     */
    function parseDate(dateString: string): Date | null;
    /**
     * Check if a given year is a leap year.
     * @param year The year to check.
     * @returns True if the year is a leap year, false otherwise.
     */
    function isLeapYear(year: number): boolean;
}
