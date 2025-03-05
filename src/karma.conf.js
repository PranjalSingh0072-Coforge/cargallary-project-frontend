module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/**/*.spec.ts'
      ],
      preprocessors: {
        'src/**/*.spec.ts': ['webpack']
      },
      webpack: {
        
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      concurrency: Infinity
    });
  };