'use strict';

angular.module('recruitApp').directive('recruitAppJobList', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/jobList.html'
  };
}]);