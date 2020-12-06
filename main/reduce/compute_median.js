'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result;
  var arr = collection;
  arr.sort(function(a,b){return a-b})
  if(arr.length%2==0)
  {
    result = (arr[arr.length/2-1] + arr[arr.length/2])/2;
  }
  else{
    result = arr[(arr.length-1)/2];
  }
  return result;
}

module.exports = compute_median;


