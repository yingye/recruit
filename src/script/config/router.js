'use strict';

angular.module('recruitApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('main', {
		url: '/main',
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
	}).state('job', {
		url: '/job/:type',
		templateUrl: 'view/job.html',
		controller: 'jobCtrl'
	}).state('jobDetail', {
    url: '/jobDetail/:id',
    templateUrl: 'view/jobDetail.html',
    controller: 'jobDetailCtrl'
  })
	/*.state('position', {
		url: '/position/:id',
		templateUrl: 'view/position.html',
		controller: 'positionCtrl'
	}).state('company', {
		url: '/company/:id',
		templateUrl: 'view/company.html',
		controller: 'companyCtrl'
	}).state('login', {
		url: '/login',
		templateUrl: 'view/login.html',
		controller: 'loginCtrl'
	}).state('register', {
		url: '/register',
		templateUrl: 'view/register.html',
		controller: 'registerCtrl'
	}).state('my', {
		url: '/my',
		templateUrl: 'view/my.html',
		controller: 'myCtrl'
	}).state('post', {
		url: '/post',
		templateUrl: 'view/post.html',
		controller: 'postCtrl'
	}).state('favorite', {
		url: '/favorite',
		templateUrl: 'view/favorite.html',
		controller: 'favoriteCtrl'
	})
	*/;
	$urlRouterProvider.otherwise('main');
}]);
