const express = require('express')

const authRoutes = require('./routes/auth')
const indexRoutes = require('./routes/index')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use(fileUpload())
server.use('/api/v1', authRoutes)
server.use('/api/v1', indexRoutes)

module.exports = server
