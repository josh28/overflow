(function () {
    'use strict';

    describe('LoginController', function () {
        beforeEach(module('overflow.templates'));
        beforeEach(module('overflow.core'));
        beforeEach(module('overflow.login'));

        var $rootScope,
            deferred,
            createController,
            NotificationService,
            mockLoginService;

        beforeEach(inject(function (_$rootScope_, _$controller_, _$q_, _NotificationService_) {
            $rootScope = _$rootScope_;
            NotificationService = _NotificationService_;
            mockLoginService = {
                performLogin: function(model) {
                    deferred = _$q_.defer();
                    return deferred.promise;
                }
            };

            createController = function () {
                return _$controller_('LoginController', {
                    LoginService: mockLoginService
                });
            };
        }));

        it('should hide the nav when first loading', function () {
            expect($rootScope.hideNav).toBeFalsy();
            createController();
            expect($rootScope.hideNav).toBeTruthy();
        });

        it('should display a success message via notification service when login succeeds', function() {
            var controller = createController();

            controller.model = {
                username: 'test',
                password: 'pass'
            };

            spyOn(mockLoginService, 'performLogin').and.callThrough();
            spyOn(NotificationService, 'success');

            controller.performLogin();

            deferred.resolve('success');
            $rootScope.$apply();

            expect(mockLoginService.performLogin).toHaveBeenCalledWith(controller.model);
            expect(NotificationService.success).toHaveBeenCalledWith('Login successful!');
        });

        it('should display a failure message via notification service when login fails', function() {
            var controller = createController();
            controller.model = {
                username: 'test',
                password: 'pass'
            };

            spyOn(mockLoginService, 'performLogin').and.callThrough();
            spyOn(NotificationService, 'error');

            controller.performLogin();

            deferred.reject('error');
            $rootScope.$apply();

            expect(mockLoginService.performLogin).toHaveBeenCalledWith(controller.model);
            expect(NotificationService.error).toHaveBeenCalledWith('error');
        });
    });
})();
