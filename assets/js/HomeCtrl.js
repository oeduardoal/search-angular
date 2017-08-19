import ServiceAPI from './ServiceAPI';

export default class HomeCtrl{
	constructor(ServiceAPI, $scope) {
		$scope.tema = ServiceAPI.tema;
		$scope.dados = ServiceAPI;
	}


}

