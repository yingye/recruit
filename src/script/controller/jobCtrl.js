'use strict';

angular.module('recruitApp')
  .controller('jobCtrl', ['$http', '$scope', '$stateParams', function ($http, $scope, $stateParams) {
    //获取job
    $http.get('/data/job.json').success(function (res) {
      $scope.jobs = res.data;
    });
    //menu的显示
    $scope.menuDisplay = false;
    //列表信息
    $scope.locationList = [
      {
        "id": "a",
        "title": "全国"
      }, {
        "id": "b",
        "title": "北京"
      }, {
        "id": "c",
        "title": "南京"
      }
    ];
    $scope.positionList = [
      {
        "id": "a",
        "title": "技术类",
        "content": [
          {
            "id": "a1",
            "title": "研发类"
          },
          {
            "id": "a2",
            "title": "测试类"
          },
          {
            "id": "a3",
            "title": "技术运营类"
          },
          {
            "id": "a4",
            "title": "数据类"
          }
        ]
      },
      {
        "id": "b",
        "title": "产品类",
        "content": [
          {
            "id": "b1",
            "title": "产品经理"
          },
          {
            "id": "b2",
            "title": "产品运营"
          },
          {
            "id": "b3",
            "title": "用户体验"
          }
        ]
      },
      {
        "id": "c",
        "title": "设计类",
        "content": [
          {
            "id": "c1",
            "title": "平面设计"
          },
          {
            "id": "c2",
            "title": "工业设计"
          }
        ]
      },
      {
        "id": "d",
        "title": "市场类",
        "content": [
          {
            "id": "d1",
            "title": "市场类"
          },
          {
            "id": "d2",
            "title": "销售类"
          },
          {
            "id": "d3",
            "title": "招商类"
          },
          {
            "id": "d4",
            "title": "渠道类"
          },
          {
            "id": "d5",
            "title": "运营类"
          }
        ]
      },
      {
        "id": "e",
        "title": "职能类",
        "content": [
          {
            "id": "e1",
            "title": "人力"
          },
          {
            "id": "e2",
            "title": "行政"
          },
          {
            "id": "e3",
            "title": "品牌"
          },
          {
            "id": "e4",
            "title": "公关"
          },
          {
            "id": "e5",
            "title": "财务"
          },
          {
            "id": "e6",
            "title": "采购"
          },
          {
            "id": "e7",
            "title": "监察"
          },
          {
            "id": "e8",
            "title": "品控"
          }
        ]
      },
      {
        "id": "f",
        "title": "物流类",
        "content": [
          {
            "id": "f1",
            "title": "骑手"
          },
          {
            "id": "f2",
            "title": "物流专员"
          }
        ]
      },
      {
        "id": "g",
        "title": "客服类",
        "content": [
          {
            "id": "g1",
            "title": "电话客服"
          },
          {
            "id": "g2",
            "title": "客服培训"
          },
          {
            "id": "g3",
            "title": "销售客服"
          },
          {
            "id": "g4",
            "title": "质检客服"
          }
        ]
      }
    ];
    $scope.typeList = [
      {
        "id": "a",
        "title": "社会招聘"
      }, {
        "id": "b",
        "title": "实习生招聘"
      }
    ];
    //filter设置
    $scope.filterObj = {};
    /*$scope.typeNum = $stateParams.type;
     $scope.type = $scope.typeList[$scope.typeNum].title;
     if ($stateParams.position) {
     $scope.positionNum = $stateParams.position;
     $scope.position = $scope.positionList[$scope.positionNum].title;
     }*/
  }]);
