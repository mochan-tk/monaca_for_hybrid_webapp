'use strict';

angular.module('myApp')
  .controller('ResultController', function ($scope) {

      $scope.users = [
          { "name": "watanabe", "score": 100 },
          { "name": "yamamoto", "score": 90 },
          { "name": "mitishige", "score": 80 },
          { "name": "sinoda", "score": 70 },
          { "name": "imai", "score": 60 },
      ];

  });