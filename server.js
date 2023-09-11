const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hola estoy funcionando')
})

app.listen('3005', () => {
    console.log('server runnif PORT 3005')
})