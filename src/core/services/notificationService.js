/**
 * Created by Josh on 8/21/15.
 */

/**
 * @ngdoc service
 * @name NotificationService
 * @module overflow.core
 * @description Primary module for displaying toast user feedback notifications
 **/
(function () {
    'use strict';

    angular.module('overflow.core')
        .factory('NotificationService', notificationService);

    function notificationService(toastr) {
        return {
            success: success,
            info: info,
            warning: warning,
            error: error
        };

        function success(message, options) {
            options = options || {};
            options.progressBar = true;
            toastr.success(message, 'Success', options);
        }

        function info(message, options) {
            options = options || {};
            options.progressBar = true;
            toastr.success(message, 'Info', options);
        }

        function warning(message, options) {
            options = options || {};
            options.progressBar = true;
            toastr.success(message, 'Warning', options);
        }

        function error(message, options) {
            options = options || {};
            options.closeButton = true;
            options.timeOut = 0;
            toastr.success(message, 'Error', options);
        }
    }
})();