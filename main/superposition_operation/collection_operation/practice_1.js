'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result = 0;
  function he(n){
    return n*3+2;
  }
  collection = collection.map(he);
  for(let i of collection)
  {
    result += i;
  }
  return result;
}

module.exports = hybrid_operation;

