'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = 0;
  function he(n){
    return n*3+5;
  }
  collection = collection.filter(function(val){
    if(val%2!=0) return val;
  });
  collection = collection.map(he);
  for(let i of collection)
  {
    result += i;
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

