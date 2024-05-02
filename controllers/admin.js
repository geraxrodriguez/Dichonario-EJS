const Sub = require('../models/Sub')
const Dicho = require('../models/Dicho')

module.exports = {
  //GET ALL SUBMISSIONS
  getSubs: async (req, res) => {
      // console.log("you've reached admin.getSubs()")
      try {
        const subs = await Sub.find().lean();
        //console.log(subs)
        res.render('admin/subs.ejs', { subs: subs });
      } catch (err) {
        console.log(err);
      }
  },
  //GET SINGLE SUBMISSION
  editSub: async (req, res) => {
      try {
        const id = req.params.id
        const sub = await Sub.findById(id);
        res.render("admin/sub.ejs", { sub: sub, id: id });
      } catch (err) {
        console.log(err);
      }
  },
  // GET ALL DICHOS
  getDichos: async (req, res) => {
    try {
        console.log('getting dichos...')
        const dichos = await Dicho.find() // find method w/out args returns all documents in collection
        console.log(dichos.length)
        res.render('admin/dichos.ejs', {dichos: dichos})
    } catch (err) {
        console.error('Error fetching dichos:', err);
        res.status(500).send('Internal Server Error');
    }
  },
  // ACCEPT A DICHO SUBMISSION
  acceptDicho: async (req, res) => {
    try {
        console.log('We reached the acceptDicho method')
        console.log(req.body)
        const id = req.params.id

        //if user doesn't provide a dicho, significado, or translation, then FLASH EM (.ㅅ.)
        //else, we submit submission to db and flash success message
        const { dicho, meaning, example, variations, comments } = req.body
        if (!dicho || !meaning || !example) {
          req.flash('message', 'Oops! Something is missing :( Please make sure you have filled out all fields')
          res.redirect(`/admin/subs/${id}`)
        }

        //if user provides all dicho, meaning, and example, show success message
        else {
            await Dicho.create({ 
                dicho: dicho, 
                meaning: meaning, 
                example: example,
                variations: variations,
                comments: comments,
            })
            await Sub.deleteOne({ _id: id })
          console.log('submission accepted :)')
          req.flash('message', 'Submission accepted')
          res.redirect('/admin/subs')
        }
    } catch (err) {
        console.error(err)
    }
  },
}
