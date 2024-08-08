/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if (operation === 'C') {
      stack.pop();
    } else if (operation === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operation === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(parseInt(operation));
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};
