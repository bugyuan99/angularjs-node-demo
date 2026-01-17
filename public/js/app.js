angular.module('demoApp', [])
  .controller('MainCtrl', function($http) {
    const vm = this;
    vm.message = 'Loading...';

    $http.get('/api/message')
      .then(function(response) {
        vm.message = response.data.message;
      })
      .catch(function() {
        vm.message = 'Error calling API';
      });
  });
