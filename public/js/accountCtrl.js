angular.module('demoApp')
  .controller('AccountCtrl', function($http) {
    const vm = this;
    vm.accounts = [];
    vm.newAccount = { name: '', email: '' };
    vm.editAccount = null;

    vm.loadAccounts = function() {
      $http.get('/api/accounts').then(function(res) {
        vm.accounts = res.data;
      });
    };

    vm.createAccount = function() {
      $http.post('/api/accounts', vm.newAccount).then(function(res) {
        vm.accounts.push(res.data);
        vm.newAccount = { name: '', email: '' };
      });
    };

    vm.startEdit = function(account) {
      vm.editAccount = angular.copy(account);
    };

    vm.saveEdit = function() {
      $http.put('/api/accounts/' + vm.editAccount.id, vm.editAccount).then(function(res) {
        const idx = vm.accounts.findIndex(a => a.id === res.data.id);
        vm.accounts[idx] = res.data;
        vm.editAccount = null;
      });
    };

    vm.cancelEdit = function() {
      vm.editAccount = null;
    };

    vm.deleteAccount = function(id) {
      $http.delete('/api/accounts/' + id).then(function() {
        vm.accounts = vm.accounts.filter(a => a.id !== id);
      });
    };

    vm.loadAccounts();
  });
