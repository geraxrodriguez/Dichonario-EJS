const Dicho = require('../models/Dicho')

module.exports = {
    getDichos: async (req, res) => {
        try {
            const dichoItems = await Dicho.find() // find method w/out args returns all documents in collection
            res.render('index.ejs', {dichos: dichoItems})
        } catch (err) {
            console.log(err)
        }
    }
}

// app.get('/', async (req, res)=>{
//     const expresiones = await db.collection('expresiones').find().toArray()
//     console.log(expresiones)
//     res.render('index.ejs', { expressions: expresiones })
// })