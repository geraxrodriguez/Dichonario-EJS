const Dicho = require('../models/Dicho')
const validator = require('validator');

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getFormulario: (req, res) => {
        res.render('agrega.ejs', { messages: req.flash() })
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
            const { dicho, significado, translation } = req.body

            if (!dicho || !significado || !translation) {
                req.flash('message', 'Oops! Something is missing :( Please make sure you have filled out all fields')
                res.redirect('/agrega')
            }
            else {
                req.flash('message', 'Success! Your submission will be reviewed by a team member :)')
                res.redirect('/agrega')
            }
            

            // await Dicho.create({ dicho: req.body.dicho, literal: req.body.literal, actual: req.body.actual })
            
        } catch (err) {
            console.error(err)
        }
    },
}