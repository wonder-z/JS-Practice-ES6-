'use strict';
var calculate_average = function(collection){
 
    var result = 0;
    collection = collection.filter(function(val,index){
    if(index%2==1) return val;
  });
  for(let i of collection)
  {
    result += i;
  }
  return (result/collection.length);
};
module.exports = calculate_average;
