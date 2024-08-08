// 归并排序
const mergeSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;
  else {
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, len);
    let sortLeft = mergeSort(left);
    let sortRight = mergeSort(right);
    const newArr = [];
    while (sortLeft.length || sortRight.length) {
      if (sortLeft[0] === undefined) {
        newArr.push(sortRight.shift());
        continue;
      }
      if (sortRight[0] === undefined) {
        newArr.push(sortLeft.shift());
        continue;
      }

      newArr.push(
        sortLeft[0] > sortRight[0] ? sortRight.shift() : sortLeft.shift(),
      );
    }
    return newArr;
  }
};

// 快速排序
const partitionSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  const lenMinus = len - 1;
  const pivot = lenMinus;
  const pivotVal = arr[lenMinus];
  const leftTemp = arr.slice(0, pivot);
  const rightTemp = arr.slice(pivot + 1, len);
  const left = [];
  const right = [];
  leftTemp.concat(rightTemp).forEach((val) => {
    if (val < pivotVal) left.push(val);
    else right.push(val);
  });

  return partitionSort(left).concat(pivotVal, partitionSort(right));
};

const partitionSort2 = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  const lenMinus = len - 1;
  const pivot = lenMinus;
  const pivotVal = arr[lenMinus];
  let i = 0;
  for (const j in arr) {
    const val = arr[j];
    if (j == pivot) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      continue;
    }

    if (pivotVal > val) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  return partitionSort(arr.slice(0, i)).concat(
    partitionSort(arr.slice(i, len)),
  );
};

// 冒泡排序
const popSort = (arr) => {
  if (arr.length <= 1) return arr;
  // to do
  let len = arr.length;
  while (len > 0) {
    for (let i = 0; i < len; i++) {
      let prevVal = arr[i];
      if (i + 1 >= len) continue;
      let afterVal = arr[i + 1];
      if (prevVal > afterVal) {
        arr[i] = afterVal;
        arr[i + 1] = prevVal;
      }
    }
    len -= 1;
  }
  return arr;
};

// 选择排序
const selectSort = (arr) => {
  if (arr.length <= 1) return arr;
  // to do
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    if (j >= len) break;

    for (; j < len; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// 插入排序
const insertSort = (arr) => {
  // to do
  if (arr.length <= 1) return arr;
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[index] < arr[j]) {
        const temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
        index = j;
      } else {
        break;
      }
    }
  }
  return arr;
};

const testArr = [8, 3, 11, 9, 7, 1, 2, 4, 5, 4];
console.log(popSort([...testArr]), '冒泡');
console.log(selectSort([...testArr]), '选择');
console.log(insertSort([...testArr]), '插入');
console.log(mergeSort([...testArr]), '归并');
console.log(partitionSort([...testArr]), '快速');
