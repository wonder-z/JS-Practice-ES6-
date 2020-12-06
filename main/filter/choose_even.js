'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result = [];
  for (let i of collection) {
    if(i%2==0)
    {
      result[result.length]=i;
    }
  }
  return result;
}

module.exports = choose_even;
