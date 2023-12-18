const express = require('express')

const app = express()
const post = require('./post.json')
const port = process.env.PORT || 5000

app.use(express.json())

app.get('/',(req, res)=>{
    res.send('Hello the server is running!')
})


app.get('/post', (req, res)=>{
    res.send(post)
})

app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
})