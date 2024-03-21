const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 

router.get('/', homeController.getIndex)
router.get('/agregaDicho', homeController.getIndex)
router.get('/addDicho', homeController.getIndex)

// router for creating dicho
router.post('/addDicho', homeController.addDicho)

module.exports = router