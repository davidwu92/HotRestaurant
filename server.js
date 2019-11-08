const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let tables = [1, 2, 3]
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

app.get("/home", (req,res)=>{
  res.sendFile(path.join(__dirname, './public/home.html'))
})
app.get("/reserve", (req,res)=>{
  res.sendFile(path.join(__dirname, './public/reserve.html'))
})
app.get("/tables", (req,res)=>{
  res.sendFile(path.join(__dirname, './public/tables.html'))
})

app.get('/showtables', (req, res)=>{
  console.log("getting tables")
  res.send(tables)
  // res.send(waitlist)
})


app.listen(3000, () => {console.log("server is listening")})