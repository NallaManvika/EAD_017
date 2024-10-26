const express = require('express')
const mongoose = require('mongoose')
const alienRouter = require('./aliens')


const url = 'mongodb://127.0.0.1:27017/MGIT'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})

app.use(express.json())

app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
