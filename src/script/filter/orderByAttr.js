'use strict';

angular.module('recruitApp').filter('orderByAttr', [function () {
  return function (list, obj) {
    var result = [];
    var resBottom = [];
    angular.forEach(list, function (item) {
      var isEqual = true;
      for (var e in obj) {
        if (item[e] !== obj[e]) {
          resBottom.push(item);
        } else {
          result.push(item);
        }
      }
    });
    result = result.concat(resBottom);
    return result;
  };
}]);
