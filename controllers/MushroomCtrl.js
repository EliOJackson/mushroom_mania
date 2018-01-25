'use strict';

angular.module("mushroomFun").controller("MushroomCtrl", function($scope, MushroomFactory) {
    console.log('hello')
    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        console.log('mushroomData',mushroomData);
    })
})