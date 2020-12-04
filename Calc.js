(function() {
    'use strict';
    //angular.module('myFirstApp',[])
    angular.module('NameCalculator',[])

    .controller('NameCalculatorController',function ($scope) {
        $scope.name = "";
        $scope.totalValue=0;

        $scope.displayNumeric = function() {
            var totalNameValue =calculateNumToString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateNumToString(string)
        {
            var totalStringValue=0;
            for(var i=0;i<string.length;++i)
            {
                totalStringValue+= string.charCodeAt();
            }
            return totalStringValue;
        }
        
    });
})();