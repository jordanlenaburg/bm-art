//Define Angular App
angular.module("mainApp", ["ngRoute"])
    //App Routes
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "components/home/home.html",
                controller: "homeCtrl"
            })
            .when("/query", {
                templateUrl: "components/query-results/query.html",
                controller: "queryCtrl"
            })
            .when("/query/:id", {
                templateUrl: "components/query-results/single-instance/single-art.html",
                controller: "singleArtCtrl"
            })
            .when("/favorites", {
                templateUrl: "components/favorites/favorites.html",
                controller: "favCtrl"
            })
            .when("/favorites/:id", {
                templateUrl: "components/favorites/single-instance/single-favorite.html",
                controller: "singleFavCtrl"
            })
            .otherwise({
                redirectTo: "/home"
            })
    }]);