'use strict';

function collect_all_even(collection) {
  
  var result = [];
  for (let i of collection) {
  if(i%2==0)
  {
    result[result.length]=i;
  }
}
return result;
}

module.exports = collect_all_even;
