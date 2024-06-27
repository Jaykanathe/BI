const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/BI"

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