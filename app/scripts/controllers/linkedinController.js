'use strict';

angular.module('karunahereApp')
  .controller('LinkedinController', function ($scope,linkedinService,$http) {
	$scope.Events = [];
   	
	$scope.testPermission=function(){
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me/permissions', function(response) {
		  console.log('Good to see you, ' + response.name + '.');
		});
	};
	
	$scope.GetEvents=function(){
		$scope.Events = [];
		linkedinService.GetAPIData('/me/events').then(function(result){
			if(result !=null && result.data!=null && result.data.length>0){
				 angular.forEach(result.data, function(value, key){
					$scope.Events.push(value);
				});
			}
		});
	};
	
	$scope.eventPermission=function(){
	IN.API.Profile("me").result(function(result){
	alert(result.values[0].firstName);
	});
			/*var url='https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=75r9jlf4ew4b9y&scope=r_fullprofile%20r_emailaddress%20r_network&state=DCEEFWF45453sdffef424&redirect_uri=http://localhost:9000/';
		return $http.jsonp(url, {}).success(function (data) {
            alert(data);
        });*/
	};
  });
