const Dicho = require('../models/Dicho')

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getDichos: async (req, res) => {
        try {
            console.log('getting dichos...')
            const dichos = await Dicho.find() // find method w/out args returns all documents in collection
            console.log(dichos)
            res.render('home.ejs', {dichos: dichos})
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },
    addDicho: async (req, res) => {
        try {
            console.log('We reached the controlla')
            await Dicho.create({ dicho: req.body.dicho, literal: req.body.literal, actual: req.body.actual })
            res.redirect('/')
        } catch (err) {
            console.error(err)
        }
    },
}

// app.get('/', async (req, res)=>{
//     const expresiones = await db.collection('expresiones').find().toArray()
//     console.log(expresiones)
//     res.render('index.ejs', { expressions: expresiones })
// })