const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = new express()

app.listen(PORT,_= console.log(`APP Server Listening @PORT:${PORT}`))

