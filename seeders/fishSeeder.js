require('dotenv').config()
const axios = require('axios')
const db = require('../models')



const options = {
  method: 'GET',
  url: 'https://fish-species.p.rapidapi.com/fish_api/fishes',
  headers: {
    'X-RapidAPI-Key': process.env.fishy,
    'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
  }
}

// this function is used to make a request to the fish-species api 
//Part 1 of the function calls the api and stors the response data
//Part 2 runs a for loop through the object abd for each object looks for and if it cannot find, it will create a fish table entry into the database with name img and wiki 

axios.request(options)
  .then(async function (response) {
    const fish = response.data
    console.log(fish.length, 'fish found')
    let dupe = 0
    for (const species of fish) {
      const [newFish, created] = await db.fish.findOrCreate({
        where: { name: species.name },
        defaults: {
          img: species.img_src_set['1.5x'],
          wiki: species.url
        }
      })
      if (created) {
        console.log('New fish created:', newFish.name)
      } else {
        dupe += 1
      }
    }
    console.log(dupe, 'duplicate fish found')
  })
  .catch(function (error) {
    console.error(error)
  })
