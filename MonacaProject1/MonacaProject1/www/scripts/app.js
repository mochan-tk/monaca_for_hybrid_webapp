'use strict';

angular.module('myApp', ['ui.bootstrap', 'ui.select', 'ui.router', 'xml'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, uiSelectConfig) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('app', {
            url: "/",
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderController'
                },
                'content': {
                    templateUrl: 'views/top.html',
                    controller: 'TopController'
                }
            }
        })
        .state('app.result', {
            url: "result",
            views: {
                'content@': {
                    templateUrl: 'views/result.html',
                    controller: 'ResultController'
                }
            }
        })
        .state('app.detail', {
            url: "detail",
            views: {
                'content@': {
                    templateUrl: 'views/detail.html',
                    controller: 'DetailController'
                }
            }
        });

      uiSelectConfig.theme = 'bootstrap';
      uiSelectConfig.resetSearchInput = true;

      $httpProvider.interceptors.push('xmlHttpInterceptor');

  }).controller('AppCtrl', function ($scope, $location, $http, $state) {

      /*
      $scope.open = function (size) {
          Scopes.get('AppCtrl').open(size);
      };
      */

      /*
      $http.get('AwsData.xml').success(function (data) {
          console.log(data.rss.channel.item);
          $scope.aws.items = data.rss.channel.item;
      });
      */
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