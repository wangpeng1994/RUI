module.exports = {
  "verbose": true,
  // testEnvironment: 'node', // Default: 'jsdom'
  // transform: null
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};