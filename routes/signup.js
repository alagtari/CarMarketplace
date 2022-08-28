const express = require('express')
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require("../model/user");
const verifyreqestBody = require('../middlewares/requestbody/signup')

router.post("/",verifyreqestBody, async (req, res) => {

    try {
      const { username, address,phoneNumber, email, password } = req.body;
  
     
      const oldUser = await User.findOne({ email });
      if (oldUser) return res.status(409).send("User Already Exist. Please Login");
      
      encryptedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        username,
        email: email.toLowerCase(), 
        password: encryptedPassword,
        address,
        phoneNumber,
      });
  
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
  
      return res.status(201).json(user);
    } catch (err) {
        return res.status(500).send({error:error})
    }
  });

module.exports = router
