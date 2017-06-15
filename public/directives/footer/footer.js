angular.module("mainApp")
    .directive("footer", function () {
        return {
            templateUrl: "directives/footer/footer.html",
            restrict: "E"
        }
    });