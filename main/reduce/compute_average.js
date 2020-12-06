'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result = 0;
  for(let i of collection)
  {
    result += i;
  }
  result = result/collection.length;
  return result;
}

module.exports = compute_average;

