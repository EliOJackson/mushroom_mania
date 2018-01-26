'use strict';

angular.module("mushroomFun").controller("MushroomCtrl", function($scope, MushroomFactory) {
    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        $scope.allShrooms = Object.values(mushroomData.data)
    })
})