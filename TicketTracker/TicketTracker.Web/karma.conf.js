// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            {
                pattern: './Features/**/*.ts',
            }
        ],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        plugins: [
            require('karma-jasmine'),
            require('karma-typescript'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-junit-reporter')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml', 'karma-typescript', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
