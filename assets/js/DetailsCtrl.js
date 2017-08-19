import ServiceAPI from './ServiceAPI';

export default class DetailsCtrl{
	constructor(ServiceAPI, $filter, $scope, $routeParams,$http) {

		// Function Theme
		$scope.tema = ServiceAPI.tema;

		// Function Back to Home
		$scope.back = ServiceAPI.back;

		const myfilter = $filter;
		$http.get('data/dados.json').then((result) =>{
			const dados = result.data;
			$scope.detalhes = myfilter('filter')(dados,{
				id:$routeParams.id
			})[0];
		});
	}
	
}
