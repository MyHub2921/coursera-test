(function() {
    'use strict';
    //angular.module('myFirstApp',[])
    angular.module('LunchCheck',[])

    .controller('LunchCheckController',function ($scope) {
        $scope.lcheck = "";
        $scope.messg="";

        $scope.dispMessg =function() {
            var displayMessg = getLunchCheck($scope.lcheck);
            $scope.messg = displayMessg;

        };
        function getLunchCheck(string)
        {
            const lunch = string.split(',');
            var Mesg="";
            var len = lunch.length;
           
            if(len >3)
                {
                    Mesg="Too Much";
                }
            else if(lunch=="")
                {
                    Mesg="Please enter data first";
                }
            else
                {
                    Mesg="Enjoy";
                }
            return Mesg;
        }
    });
})();