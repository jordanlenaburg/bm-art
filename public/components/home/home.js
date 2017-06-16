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
            );

        $scope.distance = (6550 * (936 / 11220))/13.5;
        $scope.angle = ((9*30)+(5*.5))
        // function toDegrees(angle) {
        //     return angle * (Math.PI / 180);
        // }
        //
        // var angle = (.5 * 5); // the angle needs to reset every 1.5 hours. if (h = 12) || (h < 1 && m < 30) {x = hyp * Math.sin(toDegrees(angle));)
        // var hyp = 6550 * (936 / 11220);
        // var x = hyp * Math.sin(toDegrees(angle));
        // var ySq = Math.pow(hyp, 2) - Math.pow(x, 2);
        // var y = Math.sqrt(ySq);
        // console.log("x:" + x);
        // console.log(hyp);
        // console.log("y:" + y);
        //
        //
        // // $scope.posX = ((1350 / x)*100) + 49;
        // $scope.posX = (661.5 + x)/13.5;
        // // console.log($scope.posX);
        // // $scope.posY = ((1350 / y)*100) + 41;
        // $scope.posY = (553.5 - y)/13.5;
        // // console.log($scope.posY)

    }]);