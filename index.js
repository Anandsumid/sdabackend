const express = require('express')
const cors = require('./middleware/cors')
require('dotenv').config();
const router = express.Router();
const port = 3012;
const connection = require('./database')
const apiRoutes = require('./routes/api')
const app = express();
app.use(express.json())


app.use('/admin', (req, res)=>{
    res.send("Hello World! for future");
})

app.use('/',cors, apiRoutes);

app.all('*', (req, res)=>{
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server`
    })
})

app.listen(port, ()=>{
    console.log("server running at port " + port)
})
