// const angular = require("angular");

(function(){
    'use strict'
    
    angular.module('mod1_app',[])

    // myname.$inject($scope)
    .controller(myname,function($scope){
        $scope.name = 'Tim'
    })



})();