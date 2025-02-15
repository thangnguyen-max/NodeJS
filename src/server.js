const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path')
require('dotenv').config()
// console.log(">>> check env: ", process.env)
const hostname = process.env.HOSTNAME;
//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')))
//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! & tôi là nguyễn Văn Thắng')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.get('/test', (req, res) => {
    // res.send('<h1>Hello World!</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})