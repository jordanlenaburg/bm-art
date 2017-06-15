angular.module("mainApp")
    .service("imgService", ["$http", function ($http) {
        this.getList = function (config) {
            return $http.get("/img", config)
                .then(
                    function (response) {
                        // console.log(response.data);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        }
    }]);