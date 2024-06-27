require('dotenv').config()
const jwt = require('jsonwebtoken');


module.exports.generateToken  = async function(email)
{
    let payload = {
        email,
    };
    let options ={
        expiresIn:'1h',
    };
    let access_token = await jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,options);
    
    return access_token
}