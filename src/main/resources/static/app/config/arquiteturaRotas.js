'use strict';

arquiteturaApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/testeok");

    $stateProvider
        .state('teste', {
            url: '/testeok',
            templateUrl: 'app/view/contact.html',
            controller: 'ContactController'
        })

}]);