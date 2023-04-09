const express = require('express')
const router = express.Router()
const db = require('../models')

router.get("/add", async (req, res) => {
    try {
        const speciesId = req.query.speciesId;
        const species = await db.fish.findByPk(speciesId);
        res.render("catches/add.ejs", {species: species});
    } catch (err) {
        console.log(err);
        res.send("Oops, something went wrong");
    }
})





module.exports = router