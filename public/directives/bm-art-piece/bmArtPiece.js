angular.module("mainApp")
    .directive("bmArtPiece", function () {
        return {
            templateUrl: "directives/bm-art-piece/bm-art-piece.html",
            restrict: "E",
            scope: {
                piece: "=",
            }
        }
    });