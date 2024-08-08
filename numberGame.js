/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberGame = function (nums) {
  if (nums.length < 2) return nums;
  const arr = nums.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
};

console.log(numberGame([5, 4, 2, 3]));
