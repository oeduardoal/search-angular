
// const app = angular.module("Search", ['ngRoute']);
// app.config(function($routeProvider){
// 	$routeProvider
// 	.when('/home',{
// 		templateUrl: 'view/home.html',
// 		controller: 'HomeCtrl'
// 	})
// 	.when('/detalhes/:id',{
// 		templateUrl: 'view/detalhes.html',
// 		controller: 'DetalhesCtrl'	
// 	})
// 	.otherwise({
// 		redirectTo: '/home'
// 	});
// })

// app.constant('Config',{
// 	baseJSON: 'data/',
// 	tipo: 'get',
// })

// app.controller("Ctrl", function($scope, $location){
// 	$scope.tema = "primary";
// 	$scope.back = function(){
// 		$location.path('/home');
// 	}
// });

// app.controller("HomeCtrl", function($scope, $http, Config, $location){

// 	$scope.dados = [];

// 	$scope.tema = "primary";

// 	$http.get(Config.baseJSON + 'dados.json')
// 	.success(function(data){
// 		$scope.dados = data;
// 	});

// 	$scope.back = function(){
// 		$location.path('/home');
// 	}
// });

// app.controller("DetalhesCtrl", function($http, $filter, Config, $scope, $routeParams, $location){

// 	var myfilter = $filter;

// 	$http.get(Config.baseJSON + 'dados.json')
// 	.success(function(data){
// 		$scope.detalhes = myfilter('filter')(data,{
// 			id:$routeParams.id
// 		})[0];
// 	})

// 	$scope.back = function(){
// 		$location.path('/home');
// 	}
// });
