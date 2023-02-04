//返回一个新数组
Array.prototype.myMap = function (fun, thisArg) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fun.call(thisArg, this[i]));
  }
  return res;
};

const arr = [1, 2, 3, 4];
console.log(
  arr.myMap((item) => {
    return item * 2;
  })
);
