'use strict';

function find_last_even(collection) {
  //在这里写入代码 
  var result = collection.reverse().find(function(val){
    return val%2==0;
  });
  return result;
}


module.exports = find_last_even;
