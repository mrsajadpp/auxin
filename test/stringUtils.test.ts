import {
    capitalize,
    decapitalize,
    trim,
    startsWith,
    endsWith,
    reverse,
    countOccurrences
} from '../src/stringUtils';

describe('String Utils', () => {
    describe('capitalize', () => {
        it('should capitalize the first character of a string', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('world')).toBe('World');
        });
    });

    describe('decapitalize', () => {
        it('should decapitalize the first character of a string', () => {
            expect(decapitalize('Hello')).toBe('hello');
            expect(decapitalize('World')).toBe('world');
        });
    });

    describe('trim', () => {
        it('should remove leading and trailing whitespace from a string', () => {
            expect(trim('  hello  ')).toBe('hello');
            expect(trim('\tworld\t')).toBe('world');
        });
    });

    describe('startsWith', () => {
        it('should check if a string starts with the specified prefix', () => {
            expect(startsWith('hello', 'he')).toBe(true);
            expect(startsWith('world', 'wo')).toBe(true);
            expect(startsWith('hello', 'lo')).toBe(false);
        });
    });

    describe('endsWith', () => {
        it('should check if a string ends with the specified suffix', () => {
            expect(endsWith('hello', 'lo')).toBe(true);
            expect(endsWith('world', 'ld')).toBe(true);
            expect(endsWith('hello', 'he')).toBe(false);
        });
    });

    describe('reverse', () => {
        it('should reverse a string', () => {
            expect(reverse('hello')).toBe('olleh');
            expect(reverse('world')).toBe('dlrow');
        });
    });

    describe('countOccurrences', () => {
        it('should count the occurrences of a substring within a string', () => {
            expect(countOccurrences('hello world hello', 'hello')).toBe(2);
            expect(countOccurrences('hello world hello', 'world')).toBe(1);
            expect(countOccurrences('hello world hello', 'foo')).toBe(0);
        });
    });
});
