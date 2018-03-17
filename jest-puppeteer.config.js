
module.exports = {
  launch: {
    ignoreHTTPSErrors: true,
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'node test/server',
    port: 4444,
  },
}

