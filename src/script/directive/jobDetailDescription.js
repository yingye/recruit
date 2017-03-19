'use strict';

angular.module('recruitApp').directive('recruitAppJobDetailDescription', [function () {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      content: "=",
      title: "@"
    },
    templateUrl: 'view/template/jobDetailDescription.html',
    link: function (scope, element, attr) {
      //console.log(content);
      //scope.content = content;
    }
  };
}]);
