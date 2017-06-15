angular.module("mainApp")
    .directive("favArtPiece", function () {
        return {
            templateUrl: "directives/favorite-art-piece/favorite-art-piece.html",
            restrict: "E",
            scope: {
                piece: "="
            }
        }
    });