'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  collection = collection.filter(function(val){
    if(val%2!=0) return val;
  });
  function he(n){
    return n*3+2;
  }
  var result = collection.map(he);
  return result;
}

module.exports = hybrid_operation_to_uneven;

