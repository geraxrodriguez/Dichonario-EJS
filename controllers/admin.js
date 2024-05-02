const Sub = require('../models/Sub')
const Dicho = require('../models/Dicho')

module.exports = {
  //GET ALL SUBMISSIONS
  getSubs: async (req, res) => {
      try {
        const subs = await Sub.find().lean();
        res.render('admin/subs.ejs', { subs: subs });
      } catch (err) {
        console.log(err);
      }
  },

  //GET AND EDIT SUBMISSION
  editSub: async (req, res) => {
      try {
        const id = req.params.id
        const sub = await Sub.findById(id);
        res.render("admin/sub.ejs", { sub: sub, id: id });
      } catch (err) {
        console.log(err);
      }
  },

  // ACCEPT A DICHO SUBMISSION
  acceptSub: async (req, res) => {
    try {
        const id = req.params.id
        const { dicho, meaning, example, variations, comments } = req.body

        // if we don't provide a dicho, meaning, or example, then we want to show an error message
        if (!dicho || !meaning || !example) {
          req.flash('message', 'Oops! Something is missing :( Please make sure you have filled out all fields')
          res.redirect(`/admin/subs/${id}`)
        }

        // else if user provides dicho, meaning, and example, then we want to create a Dicho, delete that Sub, and show a success message
        else {
            await Dicho.create({ 
                dicho: dicho, 
                meaning: meaning, 
                example: example,
                variations: variations,
                comments: comments,
            });
            await Sub.deleteOne({ _id: id });
          req.flash('message', 'Submission accepted');
          res.redirect('/admin/subs');
        }
    } catch (err) {
        console.error(err)
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
}
