const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/fish', async(req, res) => {
    const fish = await db.fish.findAll()
    res.render('fish/fish.ejs', {
        fish:fish,
    })
})





module.exports = router