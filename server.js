// DEPENDENCIES: where we require all of our packages
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE: where we configure the dependency packages
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//SEQUELIZE connection



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})


// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)



// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})