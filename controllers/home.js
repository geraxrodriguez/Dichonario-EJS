const Dicho = require('../models/Dicho')

module.exports = {
    getDichos: async (req, res) => {
        try {
            console.log('getting dichos...')
            const dichoItems = await Dicho.find() // find method w/out args returns all documents in collection
            console.log(dichoItems)
            res.render('index.ejs', {dichos: dichoItems})
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    }
}

// app.get('/', async (req, res)=>{
//     const expresiones = await db.collection('expresiones').find().toArray()
//     console.log(expresiones)
//     res.render('index.ejs', { expressions: expresiones })
// })