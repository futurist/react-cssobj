const {HEADLESS, SLOWMO} = process.env

module.exports = {
  launch: {
    ignoreHTTPSErrors: true,
    dumpio: true,
    slowMo: Number(SLOWMO),
    headless: HEADLESS != 'false',
  },
  server: {
    command: 'node test/server',
    port: 4444,
  },
}

