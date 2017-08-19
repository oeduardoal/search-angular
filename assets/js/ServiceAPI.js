export default class ServiceAPI {
	constructor($http,$location) {
		this.tema = "primary";

		this.data = $http.get('data/dados.json').then((result) =>{
			this.data = result.data;
		});
		this.back = () =>{
			$location.path('/home')
		}
	}
}
ServiceAPI.$inject = ['$http','$location'];