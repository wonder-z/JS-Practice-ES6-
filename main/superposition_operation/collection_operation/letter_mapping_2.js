'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result = 0;
  for(let i of collection)
  {
    result += i;
  }
  result = Math.ceil(result/collection.length);
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
  result = words(result);
  return result;
}

module.exports = average_to_letter;

