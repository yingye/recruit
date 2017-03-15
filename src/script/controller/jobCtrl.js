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
                "id": "0",
                "title": "全国"
            }, {
                "id": "1",
                "title": "北京"
            }, {
                "id": "2",
                "title": "南京"
            }
        ];
        $scope.positionList = [
            {
                "id": "0",
                "title": "技术类",
                "content": [
                    {
                        "id": "0",
                        "title": "研发类"
                    },
                    {
                        "id": "1",
                        "title": "测试类"
                    },
                    {
                        "id": "2",
                        "title": "技术运营类"
                    },
                    {
                        "id": "3",
                        "title": "数据类"
                    }
                ]
            },
            {
                "id": "1",
                "title": "产品类",
                "content": [
                    {
                        "id": "0",
                        "title": "产品经理"
                    },
                    {
                        "id": "1",
                        "title": "产品运营"
                    },
                    {
                        "id": "2",
                        "title": "用户体验"
                    }
                ]
            },
            {
                "id": "2",
                "title": "设计类",
                "content": [
                    {
                        "id": "0",
                        "title": "平面设计"
                    },
                    {
                        "id": "1",
                        "title": "工业设计"
                    }
                ]
            },
            {
                "id": "3",
                "title": "市场类",
                "content": [
                    {
                        "id": "0",
                        "title": "市场类"
                    },
                    {
                        "id": "1",
                        "title": "销售类"
                    },
                    {
                        "id": "2",
                        "title": "招商类"
                    },
                    {
                        "id": "3",
                        "title": "渠道类"
                    },
                    {
                        "id": "4",
                        "title": "运营类"
                    }
                ]
            },
            {
                "id": "4",
                "title": "职能类",
                "content": [
                    {
                        "id": "0",
                        "title": "人力"
                    },
                    {
                        "id": "1",
                        "title": "行政"
                    },
                    {
                        "id": "2",
                        "title": "品牌"
                    },
                    {
                        "id": "3",
                        "title": "公关"
                    },
                    {
                        "id": "4",
                        "title": "财务"
                    },
                    {
                        "id": "5",
                        "title": "采购"
                    },
                    {
                        "id": "6",
                        "title": "监察"
                    },
                    {
                        "id": "7",
                        "title": "品控"
                    }
                ]
            },
            {
                "id": "5",
                "title": "物流类",
                "content": [
                    {
                        "id": "0",
                        "title": "骑手"
                    },
                    {
                        "id": "1",
                        "title": "物流专员"
                    }
                ]
            },
            {
                "id": "6",
                "title": "客服类",
                "content": [
                    {
                        "id": "0",
                        "title": "电话客服"
                    },
                    {
                        "id": "1",
                        "title": "客服培训"
                    },
                    {
                        "id": "2",
                        "title": "销售客服"
                    },
                    {
                        "id": "3",
                        "title": "质检客服"
                    }
                ]
            }
        ];
        $scope.typeList = [
            {
                "id": "0",
                "title": "社会招聘"
            }, {
                "id": "1",
                "title": "实习生招聘"
            }
        ];
        //filter设置
        $scope.typeNum = $stateParams.type;
        $scope.type = $scope.typeList[$scope.typeNum].title;
        if($stateParams.position){
            $scope.positionNum = $stateParams.position;
            $scope.position = $scope.positionList[$scope.positionNum].title;
        }
    }]);