/**
 * @ngdoc module
 * @name overflow.login
 * @module overflow.login
 * @description Controls interactions between API and user for performing user authentication and session creation
 **/

(function() {
    'use strict';

    angular.module('overflow.login', ['overflow.core'])
        .config(loginRouteConfiguration);

    /* @ngInject */
    function loginRouteConfiguration($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'src/login/login.html',
            controller: 'LoginController as vm'
        });
        $urlRouterProvider.otherwise('/');
    }
})();
