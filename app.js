'use strict';

angular.module("mushroomFun", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/mushrooms.html",
            controller: "MushroomCtrl"
        })
        .otherwise("/")
})
