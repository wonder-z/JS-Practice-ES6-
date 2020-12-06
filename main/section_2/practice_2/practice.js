function count_same_elements(collection) {
  //在这里写入代码
  var a = [], str= [];
  let arr = [...new Set(collection)];
  for(let i = 0; i<arr.length; i++)
    {   
        if(arr[i].length!=1)
        {
            let s = arr[i]
            str[str.length] = arr[i];
            arr[i] = s[0];
        }
    }
  arr = [...new Set(arr)];
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

    for(let i of str)
    {
        let c = i.split('-');
        for(let j of a)
        {
            if(j.key == c[0])
            {
                j.count = parseInt(c[1]);
            }
        }     
    }
    return a;
}

module.exports = count_same_elements;
