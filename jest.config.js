export default {
  transform: {},
  testEnvironment: "node",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1" // Fix module resolution for ES Modules
  }
};


