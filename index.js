require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use('/users', require('./controllers/users.js'))

app.get('/', (req, res)=> {
    res.render('index.ejs')
})

app.listen(PORT, ()=> {
    console.log(`authenticating users on port ${PORT}`)
})