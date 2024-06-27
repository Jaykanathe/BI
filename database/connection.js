require('dotenv').config()
const mongoose = require("mongoose");

const URL = process.env.URL

const dbConnect = ()=>{
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`connection sucessfull`);
}).catch((e)=>{
    console.log(`connection faild`);
})
}
module.exports = dbConnect;