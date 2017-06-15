angular.module("mainApp")
    .service("bmService", ["$http", function ($http) {
        this.getList = function (config) {
            return $http.get("/art", config)
                .then(
                    function (response) {
                        // console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        };
        this.getOneBm = function (id) {
            return $http.get("/art/" + id)
                .then(
                    function (response) {
                        // console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        }
    }]);