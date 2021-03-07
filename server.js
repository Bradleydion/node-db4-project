const express = require("express")
const helmet = require("helmet")
const dataAccess = require('./api/router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('./api/recipes', dataAccess)

server.use((req,res,next)=>{
    res.json({message:"welcome"})
    next()
})

server.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({message:"Molly,you in danger girl"})
})

module.exports = server