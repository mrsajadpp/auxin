import { formatDate, getCurrentDateTime, parseDate, isLeapYear } from '../src/dateUtils';

describe('Date Utility Functions', () => {
    describe('formatDate', () => {
        it('should format a date object correctly', () => {
            const date = new Date(2024, 3, 21, 14, 30, 0); // April 21, 2024, 14:30:00
            const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss');
            expect(formattedDate).toBe('2024-04-21 14:30:00');
        });
    });

    describe('getCurrentDateTime', () => {
        it('should format the current date and time correctly', () => {
            const formattedDateTime = getCurrentDateTime('YYYY-MM-DD HH:mm:ss');
            const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time in ISO format
            expect(formattedDateTime).toBe(currentDateTime);
        });
    });

    describe('parseDate', () => {
        it('should parse a valid date string into a Date object', () => {
            const dateString = '2024-04-21T14:30:00';
            const parsedDate = parseDate(dateString);
            expect(parsedDate instanceof Date).toBe(true);
            expect(parsedDate?.toISOString()).toBe(dateString);
        });

        it('should return null for an invalid date string', () => {
            const invalidDateString = 'invalid-date-string';
            const parsedDate = parseDate(invalidDateString);
            expect(parsedDate).toBeNull();
        });
    });

    describe('isLeapYear', () => {
        it('should return true for a leap year', () => {
            expect(isLeapYear(2020)).toBe(true);
        });

        it('should return false for a non-leap year', () => {
            expect(isLeapYear(2023)).toBe(false);
        });
    });
});
