'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var result = 0;
  for(let i of collection)
  {
    result += i;
  }
  return result;
}

module.exports = calculate_elements_sum;

