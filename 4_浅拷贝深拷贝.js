//浅拷贝 [hasOwnProperty]
function shallowCopy(obj) {
  let targetObj;
  if (typeof obj !== "object") {
    return obj;
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        targetObj[key] = obj[key];
      }
    }
  }
  return targetObj;
}

//深拷贝 [递归]
function deepCopy(obj) {
  if (typeof obj == "object") {
    let targetObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      targetObj[key] = deepCopy(obj[key]);
    }
  } else {
    return obj;
  }
}
