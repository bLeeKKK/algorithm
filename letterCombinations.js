/**
 * @param {string} digits
 * @return {string[]}
 */
const dict = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const num = digits[0];
  const thereArr = dict[num];
  const arr = letterCombinations(digits.slice(1));
  if (arr.length === 0) return thereArr;

  const newArr = [];
  for (let i = 0; i < thereArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newArr.push(thereArr[i] + arr[j]);
    }
  }

  return newArr;
};

console.log(letterCombinations('23'));
