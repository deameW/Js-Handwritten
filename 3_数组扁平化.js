/**
 * 1. 使用reduce
 */
function flatten_reduce(arr) {
  if (Array.isArray(arr)) {
    let res;
    res = arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flatten_reduce(cur) : cur);
    }, []);
    return res;
  } else {
    return arr;
  }
}
console.log(flatten_reduce([1, 2, 3, [4, 5, [6, 7, 8]]]));
