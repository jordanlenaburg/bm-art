angular.module("mainApp")
    .controller("singleFavCtrl", ["$scope", "$routeParams", "favService", function ($scope, $routeParams, favService) {
        $scope.singlePiece = {};
        favService.getOneFav($routeParams.id)
            .then(
                function (response) {
                    $scope.singlePiece = response;
                    if ($scope.singlePiece.location.minute.length = 1){
                        $scope.singlePiece.location.minute = "0" + $scope.singlePiece.location.minute
                    }
                    return response
                }
            );
        $scope.delFav = function () {
            favService.deleteFav($routeParams.id)
                .then(
                    function (response) {
                        return response
                    }
                );

        };
        $scope.updateFav = function () {
            console.log($scope.newUrl);
            console.log(typeof $scope.newUrl);
            if ($scope.newUrl) {
                $scope.singlePiece.imageUrls.push($scope.newUrl);
            }
            $scope.newUrl = "";
            favService.putFav($routeParams.id, $scope.singlePiece)
                .then(
                    function (response) {
                        return response
                    }
                );
        }
    }]);