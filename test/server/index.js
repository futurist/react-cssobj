const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const config = require('../../jest-puppeteer.config')
const wwwRoot = path.join(__dirname, '../www/')
const getFile = (file, dir)=>path.join(wwwRoot, file)
const template = fs.readFileSync(getFile('index.html'), 'utf8')
const getHTML = (js) => {
  return template.replace(
    '{{script}}',
    [].concat(js).map(src=>src && '<script src="'+('/dist/' + src)+'"></script>')
    .filter(Boolean).join(''))
}

// routers
app.get('/', (req,res)=>{
  const {js=''} = req.query
  res.end(getHTML(js.split(',')))
})

// statics
app.use(express.static(wwwRoot))

app.listen(config.server.port, ()=>console.log('server start'))

