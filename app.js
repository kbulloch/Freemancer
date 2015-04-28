var freemancer = angular.module("freemancer", ["ui.router"]);

freemancer.config(function($stateProvider) {
  $stateProvider.state("main", {
    url: "",
    views: {
      "workbox": {
        templateUrl: "partials/workbox.html"
      },
      "hirebox": {
        templateUrl: "partials/hirebox.html"
      },
      "jumbotron": {
        templateUrl: "partials/jumbotron.html"
      }
    }
  });
});

freemancer.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "partials/navigation.html"
  }
});

freemancer.controller("FreemancerCtrl", function FreemancerCtrl($scope) {
  $scope.toggleHirebox = function() {
    $scope.hire = ! $scope.hire;
  };

  $scope.toggleWorkbox = function() {
    $scope.work = ! $scope.work;
  };
});
