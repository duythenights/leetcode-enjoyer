/**
 * 242. Valid Anagram
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-anagram/
 *
 * Description:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // solution 1: using frequency counter array - only for inputs only contain lowercase english letters
  // after that we compare this two frequency counter array
  // more elegant way: we increase when checking s and decrease when checking t, finally we check if all values in array are 0.
  // const freq_arr = new Array(26).fill(0);
  // const letter_a_ascii = "a".charCodeAt(0);

  // for (let i = 0; i < s.length; i++) {
  //   const s_char_code = s.charCodeAt(i) - letter_a_ascii;
  //   const t_char_code = t.charCodeAt(i) - letter_a_ascii;
  //   freq_arr[s_char_code]++;
  //   freq_arr[t_char_code]--;
  // }
  // return freq_arr.every((val) => val === 0);

  // solution 2: using hashmap ( Object ) if inputs contain any unicode characters.
  // if inputs contain any character -> we can using Map
  const hash_map = {};
  for (let i = 0; i < s.length; i++) {
    const char_s = s[i];
    const char_t = t[i];
    hash_map[char_s] = (hash_map[char_s] || 0) + 1;
    hash_map[char_t] = (hash_map[char_t] || 0) - 1;
  }
  return Object.values(hash_map).every((val) => val === 0);
};

// Time Complexity: O(n) where n is the length of the strings
// Space Complexity: O(k) where k is the number of unique characters (O(1) if limited to 26 lowercase English letters)

module.exports = { isAnagram };
