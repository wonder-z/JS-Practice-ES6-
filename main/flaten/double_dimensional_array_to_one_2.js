'use strict';

function double_to_one(collection) {
  //在这里写入代码
  function dedupe(array)
  {
    return Array.from(new Set(array));
  }
  let result = collection.flat();
  result = dedupe(result);
  return result;
}

module.exports = double_to_one;
