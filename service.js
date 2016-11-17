angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var defer = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    })
    .then(function(result) {
      var parsedResult = result.data.data;
      parsedResult.map(function(item){
        item.first_name = 'Ralf';
      })
      defer.resolve(parsedResult);
    });
    return defer.promise;
  }

});