/**
 * @ngdoc module
 * @name overflow.core
 * @module overflow
 * @description Core module for dependencies that should be inherited across many different modules.
 *              Global directives and services will also be found here.
 **/

(function() {
    'use strict';

    angular.module('overflow.core', [
        'ngResource',
        'ngAnimate',
        'ngMessages',
        'toastr',
        'ui.router',
        'formly',
        'formlyBootstrap',
        'overflow.templates',
        'firebase'
    ]);

    angular.module('overflow.core')
        .config(coreConfiguration);

    /* @ngInject */
    function coreConfiguration($stateProvider) {
        $stateProvider.state('site', {
            'abstract': true,
            resolve: {
                authorize: function(AuthorizationService) {
                    return AuthorizationService.authorize();
                }
            }
        })
    }

    angular.module('overflow.core').constant('GameConfig', {
        width: 720,
        height: 480
    });

    angular.module('overflow.core').constant('FirebaseConfig', {
        url: 'https://popping-torch-8747.firebaseio.com/'
    });

    angular.module('overflow.core').run(validationConfiguration);

    function validationConfiguration(formlyConfig, formlyValidationMessages) {
        var template = '<formly-transclude></formly-transclude>' + '<div class="validation-messages" ng-messages="fc.$error" ng-if="options.formControl.$touched">' + '<div class="message" ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">' + '{{message(fc.$viewValue, fc.$modelValue, this)}}' + '</div>' + '</div>';
        formlyConfig.setWrapper({
            name: 'validation',
            types: ['input'],
            template: template
        });
        formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', '', 'is the maximum length', 'Too long');
        formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', '', 'is the minimum length', 'Too short');
    }
})();
