angular.module("mainApp")
    .controller("queryCtrl", ["$scope", "bmService", "favService", "imgService", function ($scope, bmService, favService, imgService) {
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
        $scope.addFav = function (artPiece) {
            var imgConfig = {
                params: {
                    ref: artPiece.images[0].gallery_ref
                }
            };
            var imgUrl = "";
            imgService.getList(imgConfig)
                .then(
                    function (response) {
                        var n = response.search("http://galleries.burningman.org/filestore");
                        imgUrl = response.slice(n, n + 96);
                        artPiece.imageUrls = [imgUrl];
                        var newImg = artPiece.images[0].thumbnail_url;
                        if (artPiece.year === 2017) {
                            artPiece.imageUrls = [newImg];
                        }

                        return favService.postFav(artPiece)
                    }
                ).then(
                function (response) {
                    return response
                },
                function (response) {
                    alert("There was an error:\n" + response.data.errmsg);
                    console.log(response.status);
                    console.log(response)
                }
            )
        }
    }]);