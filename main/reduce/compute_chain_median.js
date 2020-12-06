'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var result;
  var arr = collection.split('->');
  arr.sort(function(a,b){return a-b})
  if(arr.length%2==0)
  {
    result = (Number(arr[arr.length/2-1]) + Number(arr[arr.length/2]))/2;
  }
  else{
    result = Number(arr[(arr.length-1)/2]);
  }
  return result;
}

module.exports = compute_chain_median;
