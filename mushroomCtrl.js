'use strict';

angular.module("mushroomFun").controller("MushroomCtrl", function($scope, MushroomFactory) {
    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        console.log('mushroomData',mushroomData);
    })
})