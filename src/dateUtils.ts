// export module dateUtils {
/**
 * Format a date object as a string in the specified format.
 * @param date The date object to format.
 * @param format The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns The formatted date string.
 */
export function formatDate(date: Date, format: string): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', String(yyyy))
        .replace('MM', mm)
        .replace('DD', dd)
        .replace('HH', hh)
        .replace('mm', min)
        .replace('ss', ss);
}

/**
 * Get the current date and time formatted as a string in the specified format.
 * @param format The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns The formatted current date and time string.
 */
export function getCurrentDateTime(format: string): string {
    return formatDate(new Date(), format);
}

/**
 * Parse a date string into a Date object.
 * @param dateString The date string to parse.
 * @returns The parsed Date object, or null if parsing fails.
 */
export function parseDate(dateString: string): Date | null {
    const timestamp = Date.parse(dateString);
    if (!isNaN(timestamp)) {
        return new Date(timestamp);
    }
    return null;
}

/**
 * Check if a given year is a leap year.
 * @param year The year to check.
 * @returns True if the year is a leap year, false otherwise.
 */
export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// }