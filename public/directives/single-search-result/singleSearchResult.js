angular.module("mainApp")
    .directive("singleSearchResult", function () {
        return {
            templateUrl: "directives/single-search-result/single-search-result.html",
            restrict: "E",
            scope: {
                singlePiece: "=",
                newUrl: "="
            }
        }
    });