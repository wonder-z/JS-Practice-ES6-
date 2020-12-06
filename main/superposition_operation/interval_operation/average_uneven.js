'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result = 0;
  collection = collection.filter(function(val){
    if(val%2==1) return val;
  });
  for(let i of collection)
  {
    result += i;
  }
  return (result/collection.length);
}

module.exports = average_uneven;
