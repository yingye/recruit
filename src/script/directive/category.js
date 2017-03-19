'use strict';

angular.module('recruitApp').directive('recruitAppCategory', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/category.html'
  };
}]);
