const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const fruits = {
    'mango': {
        'fruitName': 'Mangoes',
        'furitPlantType': 'Trees',
        'fruitWaterContent': 'Medium',
        'fruitFatLevel': 'Low'
    },
    'melon': {
        'fruitName': 'water melon',
        'furitPlantType': 'leafy',
        'fruitWaterContent': 'High',
        'fruitFatLevel': 'Low'
    },
    'unknown': {
        'fruitName': 'unknown',
        'furitPlantType': 'unknown',
        'fruitWaterContent': 'unknown',
        'fruitFatLevel': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:fruity', (request, response)=>{
    const fruitNames =  request.params.fruity.toLocaleLowerCase()
    if(fruits[fruitNames]){
        response.json(fruits[fruitNames])
    }else{
        response.json(fruits['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The sever is now runing on port ${PORT}! Betta GO Catch It!`)
})