const Joi = require('joi'); 
exports.authSchema = Joi.object().keys({ 
    name: Joi.string().required(),
    email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(6).max(30).required()  
  }); 