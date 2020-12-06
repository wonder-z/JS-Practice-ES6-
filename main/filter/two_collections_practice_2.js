'use strict';

function choose_no_common_elements(collection_a, collection_b) {
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
  function dedupe(array){
    return Array.from(new Set(array));
  }
  let a = [...collection_a, ...collection_b];
  a = dedupe(a);
  for (let i of c)
  {
    for (let j=0; j<a.length; j++)
    {
      if (a[j]==i)
      {
        a.splice(j, 1);
        break;
      }
    }
  }
  return a;
}

module.exports = choose_no_common_elements;
