'use strict';

angular.module('myApp', ['ui.bootstrap', 'ui.select', 'ngRoute'])
  .config(function ($routeProvider, uiSelectConfig) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

      uiSelectConfig.theme = 'bootstrap';
      uiSelectConfig.resetSearchInput = true;

  }).controller('AppCtrl', function ($scope) {

      $scope.isCollapsed = true;

      $scope.open = function (size) {
          alert('1');
          Scopes.get('AppCtrl').open(size);
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

      console.log("Success");

  });