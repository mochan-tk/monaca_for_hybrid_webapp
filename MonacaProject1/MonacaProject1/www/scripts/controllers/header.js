'use strict';

angular.module('myApp')
  .controller('HeaderController', function ($scope, $state) {

      $scope.isCollapsed = true;

      $scope.search = function () {
          $state.go('app.result');
      };

      var vm = this;
      vm.selected = null;
      vm.list = [
          { id: 0, name: "All" },
          { id: 1, name: "category" },
          { id: 2, name: "cat" },
          { id: 3, name: "category category" },
          { id: 4, name: "category1" }
      ];
      vm.addList = function (name) {
          return { name: name };
      };

      $scope.items = [
  'The first choice!',
  'And another choice for you.',
  'but wait! A third!'
      ];

      $scope.status = {
          isopen: false
      };

      $scope.toggled = function (open) {
          $log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function ($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
      };
  });