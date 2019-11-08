const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let tables = []
let waitlist = []

app.post('/reservations', (req, res)=>{
  console.log(req.body)
  if (tables.length < 5) {
    tables.push(req.body)
    console.log(tables)
  } else {
    waitlist.push(req.body)
    console.log(waitlist)
  }
  res.sendStatus(200)
})

app.get('/tables', (req, res)=>{
  res.send(tables)
  res.send(waitlist)
})


app.listen(3000, () => {console.log("server is listening")})