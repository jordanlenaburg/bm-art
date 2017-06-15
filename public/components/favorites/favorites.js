angular.module("mainApp")
    .controller("favCtrl", ["$scope", "favService", function ($scope, favService) {
        $scope.categories = ["Open Playa", "Mobile"];
        $scope.favorites = [];
        favService.getFavList()
            .then(
                function (response) {
                    $scope.favorites = response;
                    return response
                }
            );
    }]);