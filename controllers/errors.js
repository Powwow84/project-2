const express = require('express')
const router = express.Router()

// not 100% functional yet. It does not affect usability

router.get('/', (req, res) => {
    res.render('errors/errors.ejs');
  });