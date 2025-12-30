# 🧪 Jest Testing Guide

## Quick Start

### Run All Tests

```bash
npm test
```

### Run Tests for a Specific Problem

```bash
npm run t <problem-id>

# Examples:
npm run t 1      # Run tests for problem 1 (Two Sum)
npm run t 15     # Run tests for problem 15 (3Sum)
npm run t 206    # Run tests for problem 206 (Reverse Linked List)
```

### Run Tests by Difficulty

```bash
npm run test:easy      # Run all easy problems
npm run test:medium    # Run all medium problems
npm run test:hard      # Run all hard problems
```

### Watch Mode (Re-run on file changes)

```bash
npm run test:watch
```

### Coverage Report

```bash
npm run test:coverage
```

## File Structure

For each problem, create TWO files:

### 1. Solution File (e.g., `1-two-sum.js`)

```javascript
/**
 * Problem description and metadata
 */

var solution = function (params) {
  // Your code here
};

module.exports = { solution };
```

### 2. Test File (e.g., `1-two-sum.test.js`)

```javascript
const { solution } = require("./1-two-sum");

describe("1. Two Sum", () => {
  test("Example 1", () => {
    expect(solution(input)).toEqual(expected);
  });

  // More tests...
});
```

## Workflow with Antigravity

1. **Create Files**

   ```bash
   # In the appropriate difficulty folder
   touch easy/2-add-two-numbers.js
   touch easy/2-add-two-numbers.test.js
   ```

2. **Write Solution**

   - Copy from `template.js`
   - Implement your solution
   - Add complexity analysis

3. **Ask Antigravity to Write Tests**

   - Copy problem description from LeetCode
   - Ask: "Please write Jest tests for this problem"
   - Antigravity will create comprehensive test cases

4. **Run Tests Locally**

   ```bash
   npm run t 2  # Test your solution
   ```

5. **Debug & Iterate**

   - Use `npm run test:watch` for live feedback
   - Fix any failing tests
   - Optimize your solution

6. **Submit to LeetCode**
   - Copy your final solution
   - Paste into LeetCode editor
   - Submit and verify

## Test Writing Tips

### Basic Test

```javascript
test("should return correct output", () => {
  expect(functionName(input)).toEqual(expectedOutput);
});
```

### Array/Object Comparison

```javascript
test("should return array", () => {
  expect(twoSum([2, 7], 9)).toEqual([0, 1]);
});
```

### Edge Cases

```javascript
test("should handle empty input", () => {
  expect(solution([])).toEqual([]);
});

test("should handle negative numbers", () => {
  expect(solution([-1, -2])).toEqual(expected);
});
```

### Multiple Test Cases

```javascript
test.each([
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
])("twoSum(%p, %p) should return %p", (nums, target, expected) => {
  expect(twoSum(nums, target)).toEqual(expected);
});
```

## Jest Matchers

```javascript
// Equality
expect(value).toBe(expected); // Strict equality (===)
expect(value).toEqual(expected); // Deep equality (for objects/arrays)

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3); // Floating point

// Arrays/Strings
expect(array).toContain(item);
expect(string).toMatch(/pattern/);
expect(array).toHaveLength(3);

// Exceptions
expect(() => fn()).toThrow();
expect(() => fn()).toThrow(Error);
```

## Example: Complete Workflow

```javascript
// 1. easy/206-reverse-linked-list.js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

module.exports = { reverseList, ListNode };
```

```javascript
// 2. easy/206-reverse-linked-list.test.js
const { reverseList, ListNode } = require("./206-reverse-linked-list");

// Helper function
function arrayToList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

describe("206. Reverse Linked List", () => {
  test("[1,2,3,4,5] -> [5,4,3,2,1]", () => {
    const list = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseList(list);
    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test("[1,2] -> [2,1]", () => {
    const list = arrayToList([1, 2]);
    const reversed = reverseList(list);
    expect(listToArray(reversed)).toEqual([2, 1]);
  });

  test("[] -> []", () => {
    const list = arrayToList([]);
    const reversed = reverseList(list);
    expect(listToArray(reversed)).toEqual([]);
  });
});
```

```bash
# 3. Run tests
npm run t 206

# Output:
# 🧪 Running tests for problem #206...
# PASS  easy/206-reverse-linked-list.test.js
#   206. Reverse Linked List
#     ✓ [1,2,3,4,5] -> [5,4,3,2,1]
#     ✓ [1,2] -> [2,1]
#     ✓ [] -> []
```

## Benefits of This Setup

✅ **Fast iteration** - Test locally without LeetCode
✅ **Better debugging** - See exactly which test fails
✅ **Test coverage** - Ensure all edge cases are covered
✅ **Antigravity support** - Get AI help writing tests
✅ **Professional workflow** - Same tooling as real projects
✅ **Version control** - Track your progress with Git

---

Happy Testing! 🎉
