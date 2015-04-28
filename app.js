var freemancer = angular.module("freemancer", ["ui.router"]);

freemancer.config(function($stateProvider) {
  $stateProvider.state("hirebox", {
    url: "",
    views: {
      "hirebox": {
        templateUrl: "partials/hirebox.html"
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
