const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

connectDB()

const app = new express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/api/goals',require('./routes/goalroutes'))
app.use(errorHandler)

app.listen(PORT,_= console.log(`APP Server Listening @PORT:${PORT}`))

