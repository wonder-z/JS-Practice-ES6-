'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  function dedupe(array){
    return Array.from(new Set(array));
  }
  let result = [...collection_a, ...collection_b];
  result = dedupe(result);
  return result;
}

module.exports = get_union;

