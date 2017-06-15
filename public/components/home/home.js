angular.module("mainApp")
    .controller("homeCtrl", ["$scope", "favService", function ($scope, favService) {
        $scope.artList = [];
        favService.getFavList()
            .then(
                function (response) {
                    $scope.artList = response;
                    console.log($scope.artList);
                    return response;
                }
            )
    }]);