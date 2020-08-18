var App = angular.module('ngApp', ['ngAnimate','ngSanitize']);
App.controller('index', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    
$scope.isPageLoaded = true;
$scope.msg = "Ready 👌"




}]);