'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var result = [];
  for (let i of collection) {
    if(i%3==0)
    {
      result[result.length]=i;
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
