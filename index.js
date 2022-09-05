const express = require('express')
const app = express()

const path=require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/hello/:name', function (req, res) {
  res.send('Hello World'+"  "+req.params.name)
})

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname,'about.html'))
  })


app.get('/contactMe', function (req, res) {
    res.sendFile(path.join(__dirname,'about.html'))
  })
app.listen(3000);