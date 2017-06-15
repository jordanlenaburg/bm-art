angular.module("mainApp")
    .directive("artPiece", function () {
        return {
            templateUrl: "directives/art-piece/art-piece.html",
            restrict: "E",
            scope: {
                piece: "="
            }
        }
    });