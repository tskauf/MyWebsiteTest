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
            var msg = ''
            
            //Turn results into an array, split by comma
            chkr = chkr.split(',')

            //Trim all additional spaces from array
            chkr = chkr.map(e => {return e.trim();});
            
            //Check array and remove empty strings
            chkr = chkr.filter(e => {return e !== '';});

            //Check to see if you ate too much lunch
            if (chkr.length == 0) {msg = "Please enter data first."}
            else if(chkr.length > 3) {msg = "Too much!"}
            else {msg = "Enjoy!"};

            $scope.message = msg

        };
    };
    
    })();