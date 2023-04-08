const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/fish', (req, res) => {
    res.render('fish/fish.ejs')
    console.log('this should have worked')
})





module.exports = router