const express = require('express')
const app = express()
const PORT = 2121

app.set('view engine','ejs')

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})