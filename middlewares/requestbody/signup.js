const Joi = require('joi');

const schema = Joi.object({
     username:Joi.string().required(),
     phoneNumber:Joi.string().required(),
     address:Joi.string().required(),
     email:Joi.string().required(),
     password :Joi.string().required(),
})

module.exports = (req,res,next)=>{
    const result = schema.validate(req.body)
    if(result.error){
        return res.status(400).send({error:result.error.details[0].message})
    }
    next()
}

