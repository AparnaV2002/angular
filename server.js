const express= require('express')
const bodyParser=require('body-parser')
const path = require('path')
var cors=require('cors')
const api = require('./server/routes/api')
const app=express()

app.use(express.static(path.join(__dirname,'dist')))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api',api)

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})

app.listen(3000,()=>{
    console.log("Server is running")
})


