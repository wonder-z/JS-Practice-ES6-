'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  var result = collection_a.filter(function(val){
    let flag = 0;
    for (let i of collection_b)
    {
      if(val%i==0)
      {
        flag=1;
        break;
      }
    }
    if(flag==1) return val;
  });
  return result;
}

module.exports = choose_divisible_integer;
