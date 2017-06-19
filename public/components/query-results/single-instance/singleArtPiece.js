angular.module("mainApp")
    .controller("singleArtCtrl", ["$scope", "$routeParams", "bmService", "imgService", "favService", function ($scope, $routeParams, bmService, imgService, favService) {
        $scope.singlePiece = {};
        bmService.getOneBm($routeParams.id)
            .then(
                function (response) {
                    $scope.singlePiece = response;
                    var imgConfig = {
                        params: {
                            ref: response.images[0].gallery_ref
                        }
                    };
                    return imgService.getList(imgConfig);
                }
            ).then(
            function (response) {
                var n = response.search("http://galleries.burningman.org/filestore");
                $scope.singlePiece.imageUrls = [response.slice(n, n + 96)];
                if ($scope.singlePiece.imageUrls == ".") {
                    $scope.singlePiece.imageUrls = [$scope.singlePiece.images[0].thumbnail_url]
                }
                // console.log($scope.singlePiece.imageUrls);
                // console.log($scope.singlePiece);
                return response
            }
        );
        $scope.addFav = function (singlePiece) {
            favService.postFav(singlePiece)
                .then(
                    function (response) {
                        return response
                    }
                ),
                function (response) {
                    alert("There was an error:\n" + response.data.errmsg);
                    console.log(response.status);
                    console.log(response)
                }
        }
    }]);
