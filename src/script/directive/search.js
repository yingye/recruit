'use strict';

angular.module('recruitApp').directive('recruitAppSearch', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/search.html'
  };
}]);