'use strict';

angular.module("mushroomFun").factory("MushroomFactory", function($q, $http){

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