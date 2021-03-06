/**
 * @ngdoc controller
 * @name ChatPanelController
 * @module overflow.dashboard
 * @description Controller to support the chat panel directive
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard').controller('ChatPanelController', chatPanelController);

    function chatPanelController($firebaseArray, FirebaseConfig) {
        /*jshint validthis: true */
        var vm = this;
        vm.chatMessages = [];
        vm.chatLoading = true;

        vm.submitChatMessage = submitChatMessage;

        activate();

        function activate() {
            loadRecentChat();
        }

        ///////////////////////////////////////////////////////////////////////

        function loadRecentChat() {
            var ref = new Firebase(FirebaseConfig.url);
            vm.chatMessages = $firebaseArray(ref.child('/chat'));
            vm.chatLoading = false;
        }

        function submitChatMessage(message) {
            var chatMessage = {
                handle: 'Josh',
                text: message
            };

            vm.chatMessages.$add(chatMessage);
            vm.currentMessage = '';
        }
    }
})();
