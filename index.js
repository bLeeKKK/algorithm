const pivotIndex = function (nums) {
  const len = nums.length;
  let sumRight = nums.reduce((s, num) => s + num, 0);
  let sumLeft = 0;
  let index = 0;
  for (; index < len; index++) {
    sumRight -= nums[index];

    if (sumRight === sumLeft) {
      return index;
    }

    sumLeft += nums[index];
  }

  return -1;
};

// console.log(pivotIndex([1, 2, 3]));

const merge = function (intervals) {
  intervals = intervals.sort(([i], [j]) => i - j);
  const newIntervals = [];
  const len = intervals.length;
  let leftSection = intervals[0];

  for (let index = 1; index < len; index += 1) {
    const [start, end] = leftSection;
    const [startNext, endNext] = intervals[index];
    if (end >= startNext) {
      leftSection = [start, Math.max(end, endNext)];
    } else {
      newIntervals.push([start, end]);
      leftSection = [startNext, endNext];
    }
  }

  newIntervals.push(leftSection);

  return newIntervals;
};

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ]),
// );

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const nextEx = [];
  const len = matrix.length;
  const maxIndex = len - 1;

  for (const j in matrix) {
    const newK = maxIndex - j;
    for (const k in matrix[j]) {
      const num = matrix[j][k];
      const newJ = k;
      nextEx.push(() => (matrix[newJ][newK] = num));
    }
  }

  nextEx.map((fun) => fun());

  return matrix;
};

// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function (mat) {
  let x = 0;
  let y = 0;
  let flag = 'rightTop'; // 'leftBottom'
  const lenx = mat[0].length;
  const leny = mat.length;
  const maxXIndex = mat[0].length - 1;
  const maxYIndex = mat.length - 1;
  const list = Array(lenx * leny);
  const len = list.length;
  for (let index = 0; index < len; index++) {
    list[index] = mat[y][x];

    const rightTopX = x + 1;
    const rightTopY = y - 1;
    const leftBottomX = x - 1;
    const leftBottomY = y + 1;

    if (flag === 'rightTop' && (rightTopY < 0 || rightTopX > maxXIndex)) {
      flag = 'leftBottom';
      if (x >= maxXIndex) {
        y++;
      } else {
        x++;
      }
      continue;
    } else if (
      flag === 'leftBottom' &&
      (leftBottomX < 0 || leftBottomY > maxYIndex)
    ) {
      flag = 'rightTop';
      if (y >= maxYIndex) {
        x++;
      } else {
        y++;
      }
      continue;
    }

    if (flag === 'rightTop') {
      x = rightTopX;
      y = rightTopY;
    } else if (flag === 'leftBottom') {
      x = leftBottomX;
      y = leftBottomY;
    }
  }
  return list;
};

// console.log(
//   findDiagonalOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  try {
    const [first = '', ...rest] = strs;
    const prefix = rest.reduce((pre, cur) => {
      const len = Math.min(pre.length, cur.length);
      let i = 0;
      for (; i < len; i++) {
        if (pre[i] !== cur[i]) {
          break;
        }
      }

      if (i === 0) {
        throw new Error('no common prefix');
      }

      return pre.slice(0, i);
    }, first);
    return prefix;
  } catch (e) {
    return '';
  }
};

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const palindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  let max = '';
  const len = s.length;
  for (let index = 0; index < len; index++) {
    const str1 = palindrome(s, index, index);
    const str2 = palindrome(s, index, index + 1);
    max = str1.length > max.length ? str1 : max;
    max = str2.length > max.length ? str2 : max;
  }
  return max;
};
// console.log(longestPalindrome('babad'));

// console.time('Object');
// let obj = {};
// for (let i = 0; i < 1000000; i++) {
//   obj['key' + i] = i;
// }
// for (let i = 0; i < 1000000; i++) {
//   let value = obj['key' + i];
// }
// console.timeEnd('Object');
//
// console.time('Map');
// let map = new Map();
// for (let i = 0; i < 1000000; i++) {
//   map.set('key' + i, i);
// }
// for (let i = 0; i < 1000000; i++) {
//   let value = map.get('key' + i);
// }
// console.timeEnd('Map');
