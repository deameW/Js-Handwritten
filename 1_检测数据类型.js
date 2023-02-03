function tellType(obj) {
  let res = Object.prototype.toString.call(obj);
  return res.subString(0, res.length - 1).toLowerCase();
}
