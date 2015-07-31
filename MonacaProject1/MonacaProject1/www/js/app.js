'use strict';

var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('NavbarCtrl', function($scope) {

    $scope.isCollapsed = true;

    $scope.open = function (size) {
        alert('1')
        Scopes.get('ModalDemoCtrl').open(size);
    };

});