function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let c = [];
  object_b = object_b.value;
  for (let i of collection_a){
    var d = object_b.find(function(value, index, arr) {
          return value==i.key;
    }) 
    if (d !== undefined) 
    {
        c[c.length]=d;
    }
        
  }
 
  return c;
}

module.exports = collect_same_elements;
