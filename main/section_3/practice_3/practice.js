function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var a = [];
  let arr = [...new Set(collection_a)];
  for (let i of arr)
  {
    let b = {};
    b.key = i;
    b.count = 0;
    a[a.length]=b;
  }
  for (let i of collection_a)
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
  b=object_b.value;
  for(let i of b)
    {
        for(let j of a)
        {
            if(i==j.key)
            {
                j.count = j.count - Math.floor(j.count/3);
            }
        }
    }
    return a;
}

module.exports = create_updated_collection;
