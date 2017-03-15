'use strict';

angular.module('recruitApp').directive('recruitAppHead', [function(){
  return {
    restrict: 'A',
    replace: true,
    scope: {
        menuDisplay: "="
    },
    templateUrl: 'view/template/head.html',
    link: function(scope, element, attr) {
        scope.onOff = function(){
            scope.menuDisplay = !scope.menuDisplay;
            //console.log(scope.menuDisplay);
        };
    }
  };
}]);