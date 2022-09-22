(function(){
'use strict'

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.message = '';

    $scope.checkMessage = function() {
        $scope.message = 'You clicked!'
    }
};

})();