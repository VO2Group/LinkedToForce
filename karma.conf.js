module.exports = function (karma) {
  karma.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'jasmine'],
    files: ['test/**/*.spec.js'],
    preprocessors: {
      'test/**/*.spec.js': ['browserify']
    },
    browserify: {
      transform: ['vueify' ]
    },
    reporters: ['progress', 'junit'],
    singleRun: true
  })
}
