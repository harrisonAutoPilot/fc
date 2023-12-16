module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    setupFiles: [
        "<rootDir>/setupTests.js"
      ],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|redux-persist-sensitive-storage)',
    ],
  };