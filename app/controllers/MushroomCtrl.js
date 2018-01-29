'use strict';

angular.module("mushroomFun").controller("MushroomCtrl", function($scope, MushroomFactory) {
  let getMushrooms = () => {
        return $q( (resolve, reject) => {
            $http
                .get("https://c23-ej-demo.firebaseio.com/mushrooms.json")
                .then( (mushrooms) => {
                    resolve(mushrooms);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    };
    return { getMushrooms };
})

getMushrooms()
.then( (mushroomData) => {
    $scope.allShrooms = Object.values(mushroomData.data)