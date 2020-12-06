'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
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
  let result = [];
  if(number_a<number_b)
  {
    for(let i = number_a; i<=number_b; i++ )
    {
      result[result.length] = words(i);
    }
  }
  else if(number_a>number_b)
  {
    for(let i = number_a; i>=number_b; i-- )
    {
      result[result.length] = words(i);
    }
  }
  else
  {
      result[result.length] = words(number_a);
  }
  return result;
}

module.exports = get_letter_interval_2;

