module.exports = {
    moduleFileExtensions: ["js", "vue"],
    transform: {
      "^.+\\.vue$": "vue-jest",
      "^.+\\.js?$": "babel-jest"
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    testMatch: [
      "**/tests/*.(js|jsx|ts|tsx)"
    ],
    testURL: "http://localhost/"
};