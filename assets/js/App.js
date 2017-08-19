import angular from 'angular'
import angularRouter from 'angular-route'

import ServiceAPI from './ServiceAPI';
import HomeCtrl from './HomeCtrl';
import DetailsCtrl from './DetailsCtrl';
	
import Router from './Router';

angular.module('Search', ['ngRoute'])
	.config(Router)
    .service('ServiceAPI', ServiceAPI)
    .controller('HomeCtrl', HomeCtrl)
    .controller('DetailsCtrl', DetailsCtrl);