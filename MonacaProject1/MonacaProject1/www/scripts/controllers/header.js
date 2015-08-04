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
      }
  });