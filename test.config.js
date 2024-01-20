module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    transform: {
       '^.+\\.(js|jsx)$': 'babel-jest',
    },
   }; 