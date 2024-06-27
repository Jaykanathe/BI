const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||4000;
const dbConnect = require('./database/connection');
const userRoutes = require('./src/router/userRouter');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

dbConnect();

app.use(express.json());
app.use("/api/user",userRoutes)


app.get("/",(req,res)=>{
    res.send("hello brain inentry")
})

app.listen(port, ()=>{
    console.log(`Sever Started on ${port}`);
})