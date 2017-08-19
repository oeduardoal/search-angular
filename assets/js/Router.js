export default function Router
($routeProvider, $locationProvider){
'ngInject';
	$routeProvider
	.when('/home',{
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl'
	})
	.when('/detalhes/:id',{
		templateUrl: 'view/detalhes.html',
		controller: 'DetailsCtrl'	
	})
	.otherwise({
		redirectTo: '/home'
	});
	$locationProvider.hashPrefix('');
	// $locationProvider.html5Mode({
	//        enabled: true,
	//        requireBase: false

	// });
}