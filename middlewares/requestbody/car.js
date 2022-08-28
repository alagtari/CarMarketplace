const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    color: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    photo: Joi.string().required(),
})

module.exports = (req,res,next)=>{
    const result = schema.validate(req.body)
    if(result.error){
        return res.status(400).send({error:result.error.details[0].message})
    }
    
    next()
}

