const app = angular.module("Search", ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl'
	})
	.when('/detalhes/:id',{
		templateUrl: 'view/detalhes.html',
		controller: 'DetalhesCtrl'	
	})
	.otherwise({
		redirectTo: '/home'
	});
})
