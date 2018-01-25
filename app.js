'use strict';

angular.module("mushroomFun", ["ngRoute"])
.config($routeProivder => {
    $routeProivder
        .when("/", {
            templateUrl: "partials/mushrooms.html",
            controller: "MushroomCtrl"
        })
        .otherwise("/")
})
