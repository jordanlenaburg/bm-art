angular.module("mainApp")
    .controller("queryCtrl", ["$scope", "bmService", function ($scope, bmService) {
        $scope.categories = ["Open Playa", "Mobile"];
        $scope.bmArtPieces = [];
        $scope.getBmApi = function (art) {
            var config = {
                params: art
            };
            if (!config.params.year) {
                alert("Please enter a year");
                return
            }
            bmService.getList(config)
                .then(
                    function (response) {
                        $scope.bmArtPieces = response;
                        return response
                    }
                );
        };
    }]);