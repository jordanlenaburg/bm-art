angular.module("mainApp")
    .directive("searchForm", function () {
        return {
            templateUrl: "directives/search-form/search-form.html",
            restrict: "E",
            scope: {
                art: "=",
                categories: "="
            }
        }
    });