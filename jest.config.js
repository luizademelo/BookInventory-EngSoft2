module.exports = {
    preset: '@babel/preset-env',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
};