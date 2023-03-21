const express = require('express')
const app = express();
const port = 8082;


const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development'])


app.get('/', (req, res) =>{
    res.send('Application up and running.')
})



app.listen(port, () =>{
    console.log('Your Knex and Express application are running successfully')
})

app.get('/pets', (req, res) => {
    knex('pet_food_type')
    .select('*')
    .then(pets => {
        var petFoodList = pets.map(pet => pet.description)
        res.json(petFoodList);
    })

})