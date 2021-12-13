const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use(serveStatic(path.join(__dirname, 'dist')))


// eslint-disable-next-line no-undef
const porta = process.env.PORT || port
app.listen(porta)

console.log("Server start: " + porta)