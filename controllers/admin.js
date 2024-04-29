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
        console.log("you've reached admin.editSub()")
        try {
            const sub = await Sub.findById(req.params.id);
            res.render("admin/sub.ejs", { sub: sub });
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
}
// views/admin/subs.ejs
