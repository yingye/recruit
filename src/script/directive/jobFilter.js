'use strict';

angular.module('recruitApp').directive('recruitAppJobFilter', ['$stateParams',function ($stateParams) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/jobFilter.html',
    link: function ($scope, element, attr) {
      //控制显示
      $scope.locationDisplay = false;
      $scope.positionDisplay = false;
      $scope.typeDisplay = false;
      //初始化
      $scope.location = $scope.location ? $scope.location : '全国';
      $scope.type = $scope.typeList[$stateParams.type].title;
      //$scope.type = $scope.type ? $scope.type : '社会招聘';
      //active class名的判断
      $scope.isEqual = function (a, b) {
        if (a === b) {
          return true;
        } else {
          return false;
        }
      };
      //location列表选择
      $scope.selectLocationFun = function (index) {
        if (index === 0) {
          $scope.locationSelect = '';
          delete $scope.filterObj.city;
        } else {
          $scope.locationSelect = $scope.locationList[index].title;
          $scope.location = $scope.locationList[index].title;
          //filter
          $scope.filterObj.city = $scope.location;
        }
        //标题
        $scope.location = $scope.locationList[index].title;
        $scope.locationDisplay = false;
      };
      //position列表选择
      $scope.positionSort = $scope.positionList[0];
      $scope.setPositionSort = function (i) {
        $scope.positionSort = $scope.positionList[i];
      };
      $scope.selectPositionFun = function (index) {
        //filter
        if (index === 0) {
          $scope.locationSelect = '';
        } else {
          $scope.locationSelect = $scope.locationList[index].title;
        }
        //标题
        $scope.location = $scope.locationList[index].title;
        $scope.locationDisplay = false;
      };
      $scope.setPosition = function (obj) {
        $scope.filterObj.task = obj.id;
        //标题
        $scope.position = obj.title;
        $scope.positionDisplay = false;
      };
      //type列表选择
      //filter默认
      if($stateParams.type){
        $scope.filterObj.practice = true;
      }else{
        $scope.filterObj.practice = false;
      }
      $scope.selectTypeFun = function (index) {
        if (index === 0) {
          $scope.typeSelect = '';
          $scope.filterObj.practice = false;
        } else {
          $scope.typeSelect = $scope.typeList[index].title;
          $scope.filterObj.practice = true;
        }
        //标题
        $scope.type = $scope.typeList[index].title;
        $scope.typeDisplay = false;
      };
    }
  };
}]);
