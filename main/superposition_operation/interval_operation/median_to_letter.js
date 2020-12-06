'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var result;
  var arr = collection;
  arr.sort(function(a,b){return a-b});
  if(arr.length%2==0)
  {
    result = (arr[arr.length/2-1] + arr[arr.length/2])/2;
  }
  else{
    result = arr[(arr.length-1)/2];
  }
  function words(n){
    let ch='';
    if(n<=26)
        ch=ch+String.fromCharCode(n+96);
    else
    {
        if(n%26==0)
        {
            ch=ch+words(Math.floor(n/26-1));
            ch=ch+'z';
        }
        else
        {
            ch=ch+words(Math.floor(n/26));
            ch=ch+String.fromCharCode(n%26+96); 
        }     
    }
    return ch;
  }
  var result = words(Math.ceil(result));
  return result;
}

module.exports = median_to_letter;
