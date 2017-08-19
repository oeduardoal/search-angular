app.controller("Ctrl", function($scope, $location){
	$scope.tema = "primary";
	$scope.back = function(){
		$location.path('/home');
	}
});

app.controller("HomeCtrl", function($scope, $http, Config, $location){

	$scope.dados = [];

	$scope.tema = "primary";

	$http.get(Config.baseJSON + 'dados.json')
	.success(function(data){
		$scope.dados = data;
	});

	$scope.back = function(){
		$location.path('/home');
	}
});

app.controller("DetalhesCtrl", function($http, $filter, Config, $scope, $routeParams, $location){

	var myfilter = $filter;

	$http.get(Config.baseJSON + 'dados.json')
	.success(function(data){
		$scope.detalhes = myfilter('filter')(data,{
			id:$routeParams.id
		})[0];
	})

	$scope.back = function(){
		$location.path('/home');
	}
});
