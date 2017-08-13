'use strict';

arquiteturaApp.controller("ContactController", ['$scope','$http', '$state',
    function ($scope, $http, $state) {



        $scope.loadData = function () {
            $scope.teste = 'teste';
        };

        $scope.loadData();
    }]);


