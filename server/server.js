const express = require('express')
const fileUpload = require('express-fileupload');

const authRoutes = require('./routes/auth')
const indexRoutes = require('./routes/index')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1', authRoutes)
server.use('/api/v1', indexRoutes)
server.use(fileUpload())

module.exports = server
