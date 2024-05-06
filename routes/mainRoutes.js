const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 

router.get('/', homeController.getIndex)
router.get('/agrega', homeController.getFormulario)
router.get('/dichos', homeController.getDichos)
router.get('/dichos/:id', homeController.getDicho)
router.post('/dichos/:id/suggestion', homeController.postSuggestion)

// router for creating dicho
router.post('/agregaDicho', homeController.createSub)

module.exports = router