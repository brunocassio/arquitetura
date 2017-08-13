'use strict';

arquiteturaApp.config(['RestangularProvider',
    function (RestangularProvider) {

        //###################### INICIO DA CONFIGURAÇÃO DO RESTANGULAR PARA URL BASE E SUFIX ######################
        RestangularProvider.setBaseUrl('http://localhost:8080');
        RestangularProvider.setRequestSuffix('.json');
        //###################### FINAL DA CONFIGURAÇÃO DO RESTANGULAR PARA URL BASE E SUFIX #######################

    }]);
