// This is a JavaScript file'use strict';

angular.module('myApp')
  .controller('DetailCtrl', function ($scope, $modal, $log) {

      $scope.items = ['item1', 'item2', 'item3'];

      $scope.animationsEnabled = true;

      $scope.open = function (size) {
          alert('2');
          var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'myModalContent.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              resolve: {
                  items: function () {
                      return $scope.items;
                  }
              }
          });

          modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };

      $scope.toggleAnimation = function () {
          $scope.animationsEnabled = !$scope.animationsEnabled;
      };

  }).controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

      $scope.items = items;

      $scope.selected = {
          item: $scope.items[0]
      };

      $scope.ok = function () {
          $modalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
      };

  }); 'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope, $modal, $log) {

      $scope.items = ['item1', 'item2', 'item3'];

      $scope.animationsEnabled = true;

      $scope.open = function (size) {
          alert('2');
          var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'myModalContent.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              resolve: {
                  items: function () {
                      return $scope.items;
                  }
              }
          });

          modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };

      $scope.toggleAnimation = function () {
          $scope.animationsEnabled = !$scope.animationsEnabled;
      };

  }).controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

      $scope.items = items;

      $scope.selected = {
          item: $scope.items[0]
      };

      $scope.ok = function () {
          $modalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
      };

  });