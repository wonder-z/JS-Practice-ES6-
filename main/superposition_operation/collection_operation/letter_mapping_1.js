'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  collection = collection.filter(function(val){
    if(val%2==0) return val;
  });
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
var result = collection.map(words);
return result;
 
}

module.exports = even_to_letter;
