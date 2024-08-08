/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const strArr = s.split('');
  const stack = [];

  for (const str of strArr) {
    if (str === '(' || str === '[' || str === '{') {
      stack.push(str);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const last = stack.pop();
      if (str === ')' && last !== '(') {
        return false;
      } else if (str === ']' && last !== '[') {
        return false;
      } else if (str === '}' && last !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
};
