/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let str = [];
  const arr = s.split('');
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const strRepeatIndex = str.findIndex((item) => item === arr[i]);
    if (strRepeatIndex !== -1) {
      str = str.slice(strRepeatIndex + 1);
    }
    str.push(arr[i]);
    maxLen = Math.max(str.length, maxLen);
  }
  return maxLen;
};
console.log(lengthOfLongestSubstring('dvdf'));
