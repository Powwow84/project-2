const express = require('express')
const router = express.Router()
const db = require('../models')
const {Op} = require('sequelize');
const uploadcareWidget = require("uploadcare-widget")


// route to land on the fish page

router.get('/', async(req, res) => {
  try{
    const fish = await db.fish.findAll()
    res.render('fish/fish.ejs', {
        fish:fish,
    })
  }catch(err){
    console.log('Oops That didnt work')
  }
})

// route to find a specific fish. It searches the fish table and finds relevant matches

router.get('/search', async (req, res) => {
  try {
    const fish = await db.fish.findAll({
      where: {
        name: {
          [Op.iLike]: `%${req.query.fishSearch}%`
        }
      }
    });
    res.render('fish/search.ejs', {
      fish: fish
    });
  } catch (err) {
    console.log('Oops That didnt work')
  }
});




module.exports = router