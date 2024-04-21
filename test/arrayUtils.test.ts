import { arrayUtils } from '../src/arrayUtils'; // Import the array utility functions to be tested

describe('Array Utils', () => {
  describe('filterArray', () => {
    it('should filter an array based on a predicate function', () => {
      const arr = [1, 2, 3, 4, 5];
      const filteredArr = arrayUtils.filterArray(arr, num => num % 2 === 0);
      expect(filteredArr).toEqual([2, 4]);
    });

    it('should return an empty array if no elements match the predicate function', () => {
      const arr = [1, 3, 5, 7, 9];
      const filteredArr = arrayUtils.filterArray(arr, num => num % 2 === 0);
      expect(filteredArr).toEqual([]);
    });
  });

  describe('mapArray', () => {
    it('should apply a transformation function to each element of the array', () => {
      const arr = [1, 2, 3];
      const mappedArr = arrayUtils.mapArray(arr, num => num * 2);
      expect(mappedArr).toEqual([2, 4, 6]);
    });

    it('should return an empty array if the input array is empty', () => {
      const arr: number[] = [];
      const mappedArr = arrayUtils.mapArray(arr, num => num * 2);
      expect(mappedArr).toEqual([]);
    });
  });

  // Add more test cases for other array utility functions as needed
});
