const express = require('express')
const router = express.Router()
const db = require('../models')

router.get("/add", (req, res) => {
    res.render("catches/add.ejs")
})





module.exports = router