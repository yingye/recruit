'use strict';

angular.module('recruitApp').directive('recruitAppFoot', ['cache',function (cache) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/foot.html',
    link: function ($scope,element) {
      //收藏功能
      $scope.favorite = cache.get($scope.jobId);
      $scope.jobApply = function(){
        //判断登录信息
        $scope.uId = cache.get('uid');
        if($scope.uId){
          alert('投递成功');
        }else{
          alert('请先登录，再来投递简历');
        }
      };
      $scope.jobFavoriteFun = function(){
        if($scope.favorite){
          cache.remove($scope.jobId);
          $scope.favorite = false;
        }else{
          cache.put($scope.jobId,true);
          $scope.favorite = true;
        }
      };
    }
  };
}]);
