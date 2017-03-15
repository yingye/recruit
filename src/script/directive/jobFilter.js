'use strict';

angular.module('recruitApp').directive('recruitAppJobFilter', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/jobFilter.html',
    link: function(scope,element,attr){
    	//控制显示
    	scope.locationDisplay = false;
    	scope.positionDisplay = false;
    	scope.typeDisplay = false;
        //设置变量

    }
  };
}]);