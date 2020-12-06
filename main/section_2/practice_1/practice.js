function count_same_elements(collection) {
  //在这里写入代码
  var a = [];
  let arr = [...new Set(collection)];
  for (let i of arr)
  {
    let b = {};
    b.key = i;
    b.count = 0;
    a[a.length]=b;
  }
  for (let i of collection)
  {
    for (let j of a)
    {
      if (j.key == i)
      {
        j.count++;
        break;
      }  
    }
  }
  return a;
}

module.exports = count_same_elements;
