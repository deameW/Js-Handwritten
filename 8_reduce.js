Array.prototype.myReduce = function (fun, init) {
  for (let i = 0; i < this.length; i++) {
    init = fun(init, this[i]);
  }
  return init;
};
const arr = [1, 2, 3, 4, 5];
const res = arr.myReduce((pre, cur) => {
  return pre + cur;
}, 0);
console.log(res);
