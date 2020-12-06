'use strict';
var calculate_median = function(collection){
    var result = 0;
    var arr = collection.filter(function(val,index){
    if(index%2==1) return val;
  });
  arr.sort(function(a,b){return a-b})
  if(arr.length%2==0)
  {
    result = (arr[arr.length/2-1] + arr[arr.length/2])/2;
  }
  else{
    result = arr[(arr.length-1)/2];
  }
  return result;
};
module.exports = calculate_median;
