'use strict';

angular.module('myApp', ['ui.bootstrap', 'ui.select', 'ngRoute'])
  .config(function ($routeProvider, uiSelectConfig) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/result', {
            templateUrl: 'views/result.html',
            controller: 'ResultCtrl'
        })
        .when('/detail', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
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

  }).controller('AppCtrl', function ($scope, $location) {

      $scope.isCollapsed = true;

      $scope.open = function (size) {
          Scopes.get('AppCtrl').open(size);
      };

      $scope.search = function () {
          console.log("search!");
          $location.path('/result');
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

      /*
      $scope.jQuery = jQuery;
      $scope.xmlUrl = "http://www.amazon.co.jp/gp/rss/bestsellers/books/2278488051/ref=zg_bs_2278488051_rsslink&tag=sample-31";
      $scope.getXmlContent = function () {
          $http.get($scope.xmlUrl).success(function (data) {
              console.log($scope.xmlDoc);
              $scope.xmlDoc = jQuery(jQuery.parseXML(data));
              
          });
      };
      $scope.getXmlContent();
      */
  });