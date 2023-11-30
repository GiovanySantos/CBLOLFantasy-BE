module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'esbuild-jest',
  },
  moduleFileExtensions: ['js', 'json'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/src/**/*.test.js?(x)',
    '!**/src/index.js',
    '!**/src/**/server.js',
  ],
  testMatch: ['**/src/**/*.test.js?(x)'],
  verbose: true,
};
