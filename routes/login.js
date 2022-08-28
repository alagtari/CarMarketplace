const express = require('express')
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require("../model/user");
const verifyreqestBody = require('../middlewares/requestbody/login')

router.post("/",verifyreqestBody, async (req, res) => {

    try {
      const {  email, password } = req.body;
      
     
      const user = await User.findOne({ email });
      if (!user || !await bcrypt.compare(password, user.password)) return res.status(400).json({message:"Invalid Credentials"});
        
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {expiresIn: "2h",}
        );
        const id=user._id
        const last_name = user.last_name
        const first_name = user.first_name
        return res.status(200).json({id ,first_name,last_name,token});
    
    } catch (err) {
        return res.status(500).send({message:err})
    }
  });

module.exports = router
