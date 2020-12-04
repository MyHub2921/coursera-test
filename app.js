(function() {
    'use strict';
    //angular.module('myFirstApp',[])
    angular.module('NameCalculator',[])

    .controller('NameCalculatorController',function ($scope) {
        $scope.name = "";
        $scope.totalValue=0;
    });
})();