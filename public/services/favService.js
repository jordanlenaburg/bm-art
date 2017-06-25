angular.module("mainApp")
    .service("favService", ["$http", function ($http) {
        this.getFavList = function () {
            return $http.get("/favorites")
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
        this.getOneFav = function (id) {
            return $http.get("/favorites/" + id)
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
        this.postFav = function (artPiece) {
            return $http.post("/favorites", artPiece)
                .then(
                    function (response) {
                        alert("Posted to favorites!");
                        // console.log(response);
                        return response.data
                    }
                )
        };
        this.putFav = function (id, updatedFav) {
            return $http.put("/favorites/" + id, updatedFav)
                .then(
                    function (response) {
                        alert("Updated with new info!");
                        console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        };
        this.deleteFav = function (id) {
            return $http.delete("/favorites/" + id)
                .then(
                    function (response) {
                        alert("Deleted from favorites!");
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