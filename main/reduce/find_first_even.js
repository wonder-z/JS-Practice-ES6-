'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var result = collection.find(function(val){
    return val%2==0;
  });
  return result;
}

module.exports = find_first_even;

