// 获取台阶走法
const getStep = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  // 1 或 2
  return getStep(n - 1) + getStep(n - 2);
};

console.log(getStep(7));
