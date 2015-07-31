'use strict';

var myApp = angular.module('myApp', ['ui.bootstrap', 'ngRoute'])
  .config(function ($routeProvider) {
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
  });

myApp.controller('NavbarCtrl', function($scope) {

    $scope.isCollapsed = true;

    $scope.open = function (size) {
        alert('1');
        Scopes.get('ModalDemoCtrl').open(size);
    };

});