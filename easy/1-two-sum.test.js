const { twoSum } = require("./1-two-sum");

describe("1. Two Sum", () => {
  test("Example 1: [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("Example 2: [3,2,4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("Example 3: [3,3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("Edge case: Negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test("Edge case: Large numbers", () => {
    expect(twoSum([1000000000, 2000000000, -1000000000], 0)).toEqual([0, 2]);
  });

  test("Edge case: Two elements only", () => {
    expect(twoSum([1, 2], 3)).toEqual([0, 1]);
  });

  test("Edge case: Zero target", () => {
    expect(twoSum([-5, 5, 10], 0)).toEqual([0, 1]);
  });
});
