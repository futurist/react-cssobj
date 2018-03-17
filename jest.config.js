
module.exports = {
  "collectCoverage": false,
  "globalSetup": "jest-environment-puppeteer/setup",
  "globalTeardown": "jest-environment-puppeteer/teardown",
  "testEnvironment": "./jest-env",
  "setupTestFrameworkScriptFile": "expect-puppeteer"
}
