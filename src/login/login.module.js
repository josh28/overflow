/// <reference path="../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc module
 * @name overflow.login
 * @module overflow.login
 * @description Controls interactions between API and user for performing user authentication and session creation
 **/
var fl;
(function (fl) {
    'use strict';
    angular.module('overflow.login', [
        'overflow.core'
    ]);
    angular.module('overflow.login').config(loginRoutes);
    /* @ngInject */
    function loginRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'src/login/login.html',
            controller: 'LoginController as vm'
        });
        $urlRouterProvider.otherwise('/');
    }
})(fl || (fl = {}));
//# sourceMappingURL=login.module.js.map