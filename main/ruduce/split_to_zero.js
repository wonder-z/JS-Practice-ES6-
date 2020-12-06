'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码 
  var result = [];
  result[result.length]=number;
  while(1){
    number = (number - interval).toFixed(1);
    result[result.length]=Number(number);
    if(number <= 0) break;
  }
  return result;
}

module.exports = spilt_to_zero;
