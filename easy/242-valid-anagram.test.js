const { isAnagram } = require("./242-valid-anagram");

describe("242. Valid Anagram", () => {
  test("Example 1: anagram vs nagaram", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  test("Example 2: rat vs car", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  test("Strings of different lengths", () => {
    expect(isAnagram("a", "ab")).toBe(false);
  });

  test("Same characters, different frequencies", () => {
    expect(isAnagram("aabbbb", "aaaabb")).toBe(false);
  });

  test("Empty strings", () => {
    // Problem constraints say length >= 1, but good to handle/know
    expect(isAnagram("", "")).toBe(true);
  });

  test("Follow up: Unicode characters", () => {
    expect(isAnagram("😊🚀", "🚀😊")).toBe(true);
    expect(isAnagram("😊🚀", "😊🔥")).toBe(false);
  });
});
