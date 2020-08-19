const { defaults } = require('jest-config')

module.exports = {
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  preset: process.env.MODE === 'ui' ? 'jest-puppeteer' : defaults.preset,
  testResultsProcessor: 'jest-junit',
  testMatch:
    process.env.MODE === 'ui'
      ? ['**/test/ui/**/*.js']
      : ['**/test/unit/**/*.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  coverageReporters: ['cobertura'],
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
}
