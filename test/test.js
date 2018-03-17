const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

const config = require('../jest-puppeteer.config')
const host = js => `http://localhost:${config.server.port}?js=${js}`
const sleep = async sec => new Promise(res=>setTimeout(res, sec*1e3))
const checkMatchClass = async (selector, matcher)=>{
  const element = await expect(page).toMatchElement(selector)
  const prop = await element.getProperty('className')
  const value = await prop.jsonValue()
  expect(value).toMatch(matcher)
  return value
}
const checkMatchStyle = async (selector, prop, matcher)=> {
  const value = await page.evaluate((sel, prop) => {
    const el = document.querySelector(sel)
    return getComputedStyle(el).getPropertyValue(prop)
  }, selector, prop)
  expect(value).toMatch(matcher)
  return value
}

beforeAll(() => {
  execSync('npm run build:test')
}, 30e3)

describe('test1.js', () => {
  beforeEach(async () => {
    await page.goto('about:blank')
    await page.goto(host('test1.js'))
  })

  it('should render right', async () => {
    await expect(page).not.toMatch('root')
    // await page.content().then(console.log)
    await checkMatchClass('#root > div', /^\s*app_\w+_/)
    await checkMatchClass('#root > div > header', '')
    await checkMatchClass('#root > div > header > h2', /^\s*appTitle_\w+_/)
    await checkMatchClass('#root > div > header > h2 > span', "")
    await expect(page).toClick('#root > div')
    await checkMatchClass('#root > div > header > h2', /.*appTitle.*\s*abc_\w+_/)
    await checkMatchStyle('h2', 'font-size', '48px')
    await checkMatchStyle('#root > div', 'background-color', 'rgb(255, 255, 0)')
  })

})

