'use strict';

angular.module('recruitApp').directive('recruitAppMenu', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/menu.html'
  };
}]);