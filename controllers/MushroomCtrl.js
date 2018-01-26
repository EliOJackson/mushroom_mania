'use strict';

angular.module("mushroomFun").controller("MushroomCtrl", function($scope, MushroomFactory) {
    console.log('hello')
    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        $scope.allShrooms = Object.values(mushroomData.data)
        console.log('all shrooms', $scope.allShrooms);
    })
})