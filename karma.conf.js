// Karma configuration
// Generated on Wed Aug 19 2015 22:25:04 GMT-0700 (PDT)

module.exports = function (config) {
    'use strict';

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-resource/angular-resource.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js',
            './bower_components/angular-animate/angular-animate.min.js',
            './bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            './bower_components/api-check/dist/api-check.min.js',
            './bower_components/angular-formly/dist/formly.min.js',
            './bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js',
            './bower_components/angular-messages/angular-messages.min.js',
            './bower_components/phaser/build/phaser.min.js',
            'src/**/*.module.js',
            'src/**/*.js',
            'public/js/templates.js',
            'test/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
