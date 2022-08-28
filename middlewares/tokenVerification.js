require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader
    if(!token){return res.status(401).send({message:"token not found"})}
    jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
        if (err) return res.status(401).send({message:"token expired"})
        req.user_id = user.user_id
    })
    
    next()

}

