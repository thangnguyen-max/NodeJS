
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const configViewEngine = require('./config/viewEngine')
// console.log(">>> check env: ", process.env)
const hostname = process.env.HOSTNAME;
//config template engine
configViewEngine(app);
//test connection
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3307,
    user : 'root',
    password: '123456',
    database : 'hoidanit'
});

connection.query(
    'select * from Users u',
        function(err , results, fields){
        console.log(">>>results= ", results);
        console.log(">>>fields= ", fields);
        }

);
const webRoutes = require('./routes/web');
app.use('/test', webRoutes);

app.listen(port, hostname ,() => {
    console.log(`Example app listening on port ${port}`)
})