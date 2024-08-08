/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * */

const threeSum = (nums) => {
  const newNums = nums.sort(); // [...new Set(nums)];
  const newNumsThree = [];
  const len = newNums.length;
  for (let i = 0; i < len; i++) {
    const recordsJ = {};
    for (let j = i; j < len; j++) {
      if (i === j || recordsJ[newNums[j]]) {
        continue;
      }
      recordsJ[newNums[j]] = true;
      const sumIJ = newNums[i] + newNums[j];

      const recordsK = {};
      for (let k = j; k < len; k++) {
        if (k === i || k === j || recordsK[newNums[k]]) {
          continue;
        }
        recordsK[newNums[k]] = true;

        if (sumIJ + newNums[k] === 0) {
          const newArr = [newNums[i], newNums[j], newNums[k]].sort();

          if (
            !newNumsThree.some((item) => item.toString() === newArr.toString())
          ) {
            newNumsThree.push(newArr);
          }
        }
      }
    }
  }

  return newNumsThree;
};

console.log(threeSum([0, 3, 0, 1, 1, -1, -5, -5, 3, -3, -3, 0]));
