function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  b=object_b.value;
  for(let i of b)
    {
        for(let j of collection_a)
        {
            if(i==j.key)
            {
                j.count = j.count - Math.floor(j.count/3);
            }
        }
    }
    return collection_a;
}

module.exports = create_updated_collection;
