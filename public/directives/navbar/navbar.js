angular.module("mainApp")
    .directive("navbar", function () {
        return {
            templateUrl: "directives/navbar/navbar.html",
            restrict: "E"
        }
    });