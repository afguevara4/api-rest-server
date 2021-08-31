require('./config/config')
const express = require('express')
const app = express()

app.get('/usuario', function(req, res){
    res.json('get Usuario local!!')
})

app.post('/usuario', function(req, res){
    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        })
    }else{
        res.json({
            persona: body
        })
    }
    
})


app.put('/usuario/:id', function(req, res){
    let id = req.paraq.id
    res.json({
        id
    })
})

app.delete('/usuario', function(req, res){
    res.json('delete usuario')
})

app.listen(process.env.PORT,() =>{
    console.log('Escuchado por el puerto', process.env.PORT)
})