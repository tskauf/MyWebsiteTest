(function(){
'use strict'

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.message = '';
    $scope.foodList = '';

    $scope.checkMessage = function() {
        var chkr = $scope.foodList
        if (chkr == "") return $scope.message = "Please enter data first.";

        chkr = chkr.split(',')

        if(chkr.length > 3) return $scope.message = "Too much!"
        else return $scope.message = "Enjoy!"
    };
};

})();