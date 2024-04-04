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
}
// views/admin/subs.ejs
