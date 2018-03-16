const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../specs/')))

app.listen(4444, ()=>console.log('server start'))

