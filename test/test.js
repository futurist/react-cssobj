const fs = require('fs')
const path = require('path')

const host = 'http://localhost:4444'
const _f = (file, dir)=>path.join(__dirname, dir||'', file)
const htmlTemplate = fs.readFileSync(_f('template.html'), 'utf8')
const getHTML = (...srcArr) => {
  return htmlTemplate.replace(
    '{{SCRIPT}}',
    srcArr.map(src=>'<script async src="'+(host + '/dist/' + src)+'"></script>')
    .join(''))
}
const sleep = async sec => new Promise(res=>setTimeout(res, sec*1e3))
const checkMatchClass = async (page, selector, className)=>{
  const element = await expect(page).toMatchElement(selector)
  const prop = await element.getProperty('className')
  const value = await prop.jsonValue()
  expect(value).toMatch(className)
  return element
}

describe('Google', () => {
  beforeAll(async () => {
    // await page.goto('about:blank')
    // console.log(getHTML('test1.js'))
    await page.setContent(getHTML('test1.js'))
  })

  it('should render right', async () => {
    await expect(page).not.toMatch('root')
    // await page.content().then(console.log)
    await checkMatchClass(page, '#root > div', /^\s*app_\w+_/)
    await checkMatchClass(page, '#root > div > header', '')
    await checkMatchClass(page, '#root > div > header > h2', /^\s*appTitle_\w+_/)
    await checkMatchClass(page, '#root > div > header > h2 > span', "")
    await  expect(page).toClick('#root > div')
    await checkMatchClass(page, '#root > div > header > h2', /.*appTitle.*\s*abc_\w+_/)
    const fontSize = await page.evaluate(() => {
      const btn = document.querySelector('h2')
      return getComputedStyle(btn).getPropertyValue('font-size')
    })
    expect(fontSize).toBe('48px')  // 3rem
  })
})

