module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
  ],
  coverageReporters: [
    'text',
    'html',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.test.[jt]s?(x)',
  ],
};
