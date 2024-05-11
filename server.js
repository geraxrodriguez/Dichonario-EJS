const flash = require('express-flash')
const session = require('express-session') 
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/mainRoutes')
const adminRoutes = require('./routes/adminRoutes')
const cors = require('cors')
const app = express()

require('dotenv').config({path: './config/.env'})

// connectDB()

app.set('view engine','ejs')
app.use(express.static('public'))

// guy in video require body-parser to do below, doesn't
// look like i need to
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

//don't know what these do
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
  
app.use(flash());

// routes
app.use('/', mainRoutes)
app.use('/admin', adminRoutes)


//Connect to the database before listening
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
})