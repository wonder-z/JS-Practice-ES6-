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
    b.name = i;
    b.summary = 0;
    a[a.length]=b;
  }
  for (let i of collection)
  {
    for (let j of a)
    {
      if (j.name == i)
      {
        j.summary++;
        break;
      }  
    }
  }

    for(let i of str)
    {
        var c = i.split('-');
        for(let j of a)
        {
            if(j.name == c[0])
            {
                let w = j.summary;;
                j.summary = parseInt(c[1]) + w;
            }
        }     
    }
    for(let i of str)
    {
        let c = i.split(':');
        for(let j of a)
        {
            if(j.name == c[0])
            {
                let w = j.summary;
                j.summary = parseInt(c[1]) + w;
            }
        }
    }
    var kuo = [];
    for(let i of str)
    {
        if(i.length>3)
        {
            kuo[kuo.length] = i;
        }
    }
    for(let i of kuo)
    {
        let c = i.split('[');
        let d = c[1].split(']');
        for(let j of a)
        {
            if(j.name == c[0])
            {
                let w = j.summary
                j.summary = parseInt(d[0])+ w;
            }
            
        }
    }
    return a;
}

module.exports = count_same_elements;
