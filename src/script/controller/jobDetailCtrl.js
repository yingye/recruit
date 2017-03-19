'use strict';

angular.module('recruitApp')
  .controller('jobDetailCtrl',['$http', '$scope','$stateParams',function($http,$scope,$stateParams) {
    //menu的显示
    $scope.menuDisplay = false;
    $scope.jobId = $stateParams.id;
    //获取信息
    //发起post请求 传$stateParams.id
    //以下为假请求
    $http.get('/data/56e666ffca1d88fc79979d63.json').success(function(res){
      $scope.jobDetail = res;
    });
  }]);
