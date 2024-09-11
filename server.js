const database = require('./dbConnection');
const pool = require('./dbPool');
const express = require('express')
const app = express()
const PORT = 8082

app.use(express.json())
app.get('/',(req,res)=>{res.send("Hi")})

database.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("1 connected to Database");
    }
});

pool.getConnection((err, connection) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("10 pool to Database");
      connection.release();
      app.listen(PORT, console.log('Server is running on port: ' + PORT));
    }
});

