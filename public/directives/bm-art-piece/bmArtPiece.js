angular.module("mainApp")
    .directive("bmArtPiece", function () {
        return {
            templateUrl: "directives/bm-art-piece/bm-art-piece.html",
            restrict: "E",
            scope: {
                piece: "=",
            },
            controller: "bmArtPieceCtrl"
        }
    })

    .controller("bmArtPieceCtrl", ["$scope", "bmService", "imgService", "favService", function ($scope, bmService, imgService, favService) {
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