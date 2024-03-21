const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const cors = require('cors')

require('dotenv').config({path: './config/.env'})

// connectDB()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// routes
app.use('/', mainRoutes)

// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`)
// })

//Connect to the database before listening
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
})