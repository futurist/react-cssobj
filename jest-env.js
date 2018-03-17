const {execSync} = require('child_process')

const PuppeteerEnvironment = require('jest-environment-puppeteer')
class CustomEnvironment extends PuppeteerEnvironment {
  constructor(config) {
    super(config)
    this.config = config
  }

  async setup() {
    await super.setup()
    // Your setup
    console.log('***** npm run build:test *****')
    execSync('npm run build:test')
  }

  async teardown() {
    // Your teardown
    await super.teardown()
  }
}
module.exports = CustomEnvironment
