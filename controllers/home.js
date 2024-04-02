const Dicho = require('../models/Dicho')
const validator = require('validator');

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getFormulario: (req, res) => {
        res.render('agrega.ejs')
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
    agregaDicho: async (req, res) => {
        try {
            console.log('We reached the agrega controlla')
            
            //if user doesn't provide a dicho, significado, or translation
            //then we want to flash em

            // await Dicho.create({ dicho: req.body.dicho, literal: req.body.literal, actual: req.body.actual })
            res.redirect('/')
        } catch (err) {
            console.error(err)
        }
    },
}