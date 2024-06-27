const nodemailer = require("nodemailer");

module.exports.sendEmailToUser = async(email,subject,mailbody)=>{
   
     let transport = nodemailer.createTransport({
         service:'gmail',
         host: 'smtp.gmail.com',
         port: 465,
         auth: {
         user: 'gujarmaal@gmail.com',
         pass: 'dvcfnftesaiyawwg'
         }
     });
 
     let info = transport.sendMail({
         from: 'test@gmail.com', // sender address
         to: email, // list of receivers
         subject: subject,
         html:`${mailbody}`
        
        
       });    
 }
 