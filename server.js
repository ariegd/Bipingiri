const express = require('express')
const app = express()
const PORT = 8082

app.use(express.json())
app.get('/',(req,res)=>{res.send("Hi")})

app.listen(PORT, console.log('Server is running on port: ' + PORT));