const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/subs', adminController.getSubs)
router.get('/subs/:id', adminController.editSub)
router.get('/dichos', adminController.getDichos)
// router.get('/admin/editdicho', adminController.editDicho)

router.post('/:id/accept-sub', adminController.acceptSub)

module.exports = router