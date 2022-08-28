const Joi = require('joi');

const schema = Joi.object({
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

