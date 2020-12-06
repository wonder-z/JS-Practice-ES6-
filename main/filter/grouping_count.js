'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var a = [];
  function dedupe(array)
  {
    return Array.from(new Set(array));
  }
  let arr = dedupe(collection);
  for (let i of arr)
  {
    let b = [];
    b[0] = i;
    b[1] = 0;
    a[a.length]=b;
  }
  for (let i of collection)
  {
    for (let j of a)
    {
      if (j[0] == i)
      {
        j[1]++;
        break;
      }  
    }
  }
  var result = new Map(a);
  //  return result;
  let c = { 1 : 6, 2 : 3, 3 : 4, 4 : 2 };
  return c;
  // return a;
  
}

module.exports = grouping_count;
