'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let c = [];
  for (let i of collection_b){
    var d = collection_a.find(function(value, index, arr) {
          return value==i;
    }) 
    if (d !== undefined) 
    {
        c[c.length]=d;
    }
        
  }
 
  return c;
}

module.exports = get_intersection;
