var express = require('express')

var path = require('path')
var serveStatic = require('serve-static')

const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))

const port =  8080 || port
app.listen(port)