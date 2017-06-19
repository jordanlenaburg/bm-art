angular.module("mainApp")
    .controller("homeCtrl", ["$scope", "favService", function ($scope, favService) {
        $scope.artList = [];
        favService.getFavList()
            .then(
                function (response) {
                    $scope.artList = response;
                    // console.log($scope.artList);
                    return response;
                }
            );
        $scope.setPosition = function (art) {
            if (art.location && art.location.hour) {
                return {
                    'transform': 'rotate(' + (((art.location.hour + 9) * 30) + (art.location.minute * .5)) + 'deg)',
                    'width': art.location.distance * ((936 / 11220) / 13.5) + '%'
                }
            } else {
                return {
                    'display': 'none'
                }
            }
        }
    }]);