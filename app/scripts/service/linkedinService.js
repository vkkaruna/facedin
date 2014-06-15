karunahereApp.factory('linkedinService', function($q) {
        return {

            $scope.eventPermission = function() {
                IN.API.Profile("me").result(function(result) {
                    alert(result.values[0].firstName);
                });
            };


            doPeopleSearch: function(searchObject) {
                IN.API.PeopleSearch().params(searchObject).result(function(result) {
                    alert(JSON.stringify(result))
                })

                //      $http.get('http://api.linkedin.com/v1/people-search?keywords=Princess').then(function(result) {
                //    alert(JSON.stringify(result))
                //})
            }
        };
    };

});