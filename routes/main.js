const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 

router.get('/', homeController.getIndex)
router.get('/agrega', homeController.getFormulario)
// router.get('/add', homeController.getIndex)

// router for creating dicho
router.post('/agregaDicho', homeController.agregaDicho)

module.exports = router