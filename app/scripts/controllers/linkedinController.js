'use strict';

angular.module('karunahereApp')
	.controller('LinkedinController', function($scope, linkedinService, $http) {

		$scope.getCompanyEmployees = function(company) {
			var searchObject = {
				'company-name': company
			};
			var employees = linkedinService.doPeopleSearch(searchObject);
		};

	});