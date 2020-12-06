'use strict';
var map_to_three_multiples = function(collection){
    var result = collection.map(function(val){
        return val*3;
      });
      return result;
};

module.exports = map_to_three_multiples;
