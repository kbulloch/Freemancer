var freemancer = angular.module("freemancer", ["ui.router"]);

freemancer.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "partials/navigation.html"
  }
});
