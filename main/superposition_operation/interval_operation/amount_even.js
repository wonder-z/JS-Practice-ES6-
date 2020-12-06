'use strict';

function amount_even(collection) {

  //在这里写入代码
  var result = 0;
  collection = collection.filter(function(val){
    if(val%2==0) return val;
  });
  for(let i of collection)
  {
    result += i;
  }
  return result;
}

module.exports = amount_even;
