const Sub = require('../models/Sub')
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
            res.render('dichos.ejs', { dichos, })
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    // GET SINGLE DICHO
    getDicho: async (req, res) => {
        try {
            const dicho = await Dicho.findById(req.params.id) // find method w/out args returns all documents in collection
            res.render('dicho.ejs', { dicho, })
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    createSub: async (req, res) => {
        try {
            console.log('We reached the createSub method')
            //if user doesn't provide a dicho, significado, or translation, then FLASH EM (.ㅅ.)
            //else, we submit submission to db and flash success message
            const { dicho, meaning, example, variations, comments } = req.body
            console.log(req.body)
            if (!dicho || !meaning || !example) {
                req.flash('message', 'Oops! Something is missing :( Please make sure you have filled out all fields')
                res.redirect('/agrega')
            }
            //if user provides all dicho, meaning, and example, show success message
            else {
                await Sub.create({ 
                    dicho: dicho, 
                    meaning: meaning, 
                    example: example,
                    variations: variations,
                    comments: comments,
                })
                req.flash('message', 'Success! Your submission will be reviewed by a team member :)')
                res.redirect('/agrega')
            }
        } catch (err) {
            console.error(err)
        }
    },

    postSuggestion: async (req, res) => {
        try {
            await Dicho.updateOne(
                { _id: req.params.id },
                { $push: { suggestions: req.body.suggestion } }
            );
            res.redirect(`/dichos/${req.params.id}`)
        } catch (err) {
            console.error(err);
        };
    },
}