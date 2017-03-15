'use strict';

angular.module('recruitApp')
  .controller('mainCtrl',['$http', '$scope',function($http,$scope) {
  	//获取category
  	$http.get('/data/category.json').success(function(res){
  		$scope.category = res;
  	});
  	//menu的显示
  	$scope.menuDisplay = false;
  }]);
