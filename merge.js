/**
 *给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
  */
const merge = (nums1, m, nums2, n) => {
  if (nums1.length === 0 && m === 0) return nums1;
  if (n === 0) return nums1;

  // 插入排序的思想
  // nums1 已经有序的部分, nums2 遍历后插入 nums1
  for (let i = m; i < n + m; i++) {
    const num2Val = nums2[i - m];

    // if (num2Val >= nums1[i - 1]) {
    //   for (let j = i - m; j < i - m; j++) {
    //     nums1[i + j] = nums2[j];
    //   }
    //   return;
    // }

    for (let j = i - 1; j >= 0; j--) {
      if (num2Val < nums1[j]) {
        nums1[j + 1] = nums1[j];
        nums1[j] = num2Val;
      } else {
        nums1[j + 1] = num2Val;
        break;
      }
    }
  }
};

const nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);
