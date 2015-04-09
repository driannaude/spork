	var app = angular.module('app', ['ui.router', 'ngAnimate', 'duScroll']);

	app.config(['$stateProvider', '$urlRouterProvider',
	    function($stateProvider, $urlRouterProvider) {
	        console.log('running...');
	        // Redirect to root when route is not recognised. 
	        $urlRouterProvider.otherwise('/');

	        //Define States for ng-view
	        $stateProvider
	            .state('home', {
	                url: '/',
	                templateUrl: 'templates/home.html',
	                controller: 'homeCtrl'
	            });

	    }
	]);

	app.controller('homeCtrl', ['$scope', '$timeout',
	    function($scope, $timeout) {
	    	//the first controller is already set up
	    }
	]);

	