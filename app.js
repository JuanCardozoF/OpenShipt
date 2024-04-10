const express = require('express')
const app = express()

app.listen(30, ()=>{
    console.log("Corriendo en el puerto 30")
})

app.get("/", (req,res)=>{
    res.send("Hola mundo!!!")
})