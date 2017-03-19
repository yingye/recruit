'use strict';

angular.module('recruitApp').directive('recruitAppJobDetailTitle', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/jobDetailTitle.html'
  };
}]);
