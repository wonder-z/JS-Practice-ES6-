'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let c = [];
  for (let i of collection_a){
    var d = collection_b.find(function(value, index, arr) {
          return value==i;
    }) 
    if (d !== undefined) 
    {
        c[c.length]=d;
    }
        
  }
 
  return c;
}

module.exports = choose_common_elements;
