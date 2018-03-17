const PuppeteerEnvironment = require('jest-environment-puppeteer')
class CustomEnvironment extends PuppeteerEnvironment {
  constructor(config) {
    super(config)
    this.config = config
  }

  async setup() {
    await super.setup()
    // Your setup
    console.log('test start')
  }

  async teardown() {
    // Your teardown
    await super.teardown()
  }
}
module.exports = CustomEnvironment
