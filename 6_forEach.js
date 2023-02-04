/**
 * 注：
 * 1. forEach方法接收两个参数，一个是回调函数，另一个是回调函数中的this指向，若没有第二个参数则this指向{}
 */

Array.prototype.myForEach = function (fun, thisArg) {
  if (!Array.isArray(this)) throw new Error("Not Array");
  for (let i = 0; i < this.length; i++) {
    fun.call(thisArg, this[i]);
  }
};
const arr = [1, 2, 3, 4];
arr.myForEach((item) => {
  console.log(item);
});
