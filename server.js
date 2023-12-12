const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'expressiones'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res)=>{
    const expresiones = await db.collection('expresiones').find().toArray()
    console.log(expresiones)
    res.render('index.ejs', { expressions: expresiones })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})