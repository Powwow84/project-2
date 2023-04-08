const express = require('express')
const app = express()
const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://fish-species.p.rapidapi.com/fish_api/fishes',
    headers: {
      'X-RapidAPI-Key': process.env.fishy,
      'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
    }
  };

 
  
  app.get('/', (req, res) => {
  axios.request(options)
  .then(function (response) {
    let fish = response.data
      console.log(response.data)
      console.log(fish[0])

  })
  .catch(function (error) {
      console.error(error);
  });
  })