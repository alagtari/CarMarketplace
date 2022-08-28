const express = require('express')
const router = express.Router()
const Car = require("../model/car");
const User = require("../model/user");

const verifyreqestBody = require('../middlewares/requestbody/car')
const tokenVerification = require('../middlewares/tokenVerification')

router.get("/",tokenVerification, async (req, res) => {
 
    try {
        const user_id =req.user_id
        const user = await User.findOne({ user_id });
        const cars = await Car.find({ _id: { $in: user.saved } }).exec()
         
        return res.status(200).send(cars);
    
    } catch (err) {
        return res.status(500).send({message:err})
    }
  });

router.post("/",tokenVerification, async (req, res) => {
    
    try {
        const _id =req.query.car_id
        try {
            const car = await Car.findOne({ _id });
        } catch (error) {
            return res.status(404).send({message:"car not found"});

        }
        const user_id =req.user_id
        const user = await User.findOne({ user_id });
        user.saved.push(_id)
        user.save()

        return res.status(200).send(user);
    
    } catch (err) {
        return res.status(500).send({message:err})
    }
  });
router.put("/",tokenVerification, async (req, res) => {
    
    try {
        const user = await User.updateOne({ _id: req.user_id }, { $pull: { saved: {$eq:req.query.car_id} } });

        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({message:err})
    }
  });    


module.exports = router
