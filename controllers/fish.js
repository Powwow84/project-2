const express = require('express')
const router = express.Router()
const db = require('../models')
const {Op} = require('sequelize');
const uploadcareWidget = require("uploadcare-widget")


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