'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  function dedupe(array)
  {
    return Array.from(new Set(array));
  }
  let result = dedupe(collection);
  return result;
}

module.exports = choose_no_repeat_number;
