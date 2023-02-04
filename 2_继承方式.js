/**
 * 1. 原型链继承
 *  - 原型上的变量是共享的
 */
// function Parent() {
//   this.name = "parent";
//   this.arr = [1, 2, 3];
//   getName = function () {
//     return this.name;
//   };
// }

// function Child() {}
// Child.prototype = new Parent();

// const child1 = new Child();
// const child2 = new Child();
// child1.arr.push(999); //注：此操作是有效的，操作原型链上的引用类型的数据可以改变。
// child1.name = "test"; //注：此操作是无效的，操作原型链上的基本类型的数据可以改变。
// console.log("child1", child1.arr);
// console.log("child2", child2.name);

// /**
//  * 2. 构造函数继承
//  *  - 无法复用父类的方法
//  */

// function Parent() {
//   this.name = "parent";
//   this.arr = [1, 2, 3];
// }

// Parent.prototype.getName = function () {
//   return this.name;
// };

// function Child() {
//   Parent.call(this); //* 调用父类的构造器
// }

// const child1 = new Child();
// const child2 = new Child();
// child1.arr.push(999);
// console.log("child1", child1);
// console.log("child2", child2);
// console.log("child2", child2.getName()); //报错，无此方法

/**
 * 3. 组合继承
 *  - 调用两次构造函数
 */
// function Parent() {
//   console.log("call Parent");
//   this.name = "parent";
//   this.arr = [1, 2, 3];
// }

// Parent.prototype.getName = function () {
//   return this.name;
// };

// function Child() {
//   Parent.call(this); //* 1 注：执行call方法会调用构造函数。具体原因可以看call的手撕代码。
// }

// Child.prototype = new Parent(); //* 2
// const child1 = new Child();
// const child2 = new Child();
// child1.arr.push(999);
// console.log("child1", child1);
// console.log("child2", child2);

/**
 * 4. 原型继承方式
 *  - 也会共享引用类型数据
 */

const objParent = {
  name: "parent",
  arr: [1, 2, 3],
};

const objChild1 = Object.create(objParent);
objChild1.arr.push(999);
const objChild2 = Object.create(objParent);

console.log(objChild2.arr);
