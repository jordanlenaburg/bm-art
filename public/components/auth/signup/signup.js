angular.module("Auth")

    .controller("SignupCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
        $scope.passwordMessage = "";

        $scope.signup = function (user) {
            if (user.password !== $scope.passwordRepeat) {
                $scope.passwordMessage = "Passwords do not match.";
                return
            } else if (user.username.indexOf(" ") !== -1) {
                $scope.passwordMessage = "Username cannot contain spaces.";
                return
            } else {
                UserService.signup(user).then(function (response) {
                    $location.path("/login");
                }, function (response) {
                    alert("There was a problem: " + response.data.message);
                });
            }
        }
    }]);