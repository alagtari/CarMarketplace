const express = require('express')
const router = express.Router()
const Car = require("../model/car");
const User = require("../model/user");

const verifyreqestBody = require('../middlewares/requestbody/car')
const tokenVerification = require('../middlewares/tokenVerification')


router.get("/:id", async (req, res) => {

  try {
    const _id=req.params.id
      const car = await Car.findOne({_id}) 
      if (!car) return res.status(404).send({message:"car not found"});

      const user = await User.findOne({_id:car.owner}) 
      if (!user) return res.status(404).send({message:"user not found"});

      const result ={
        _id:car._id ,
        name:car.name ,
        price:car.price ,
        color:car.color ,
        category:car.category ,
        description:car.description ,
        photo:car.photo ,
        year:car.year ,
        mileage:car.mileage ,
        phone:user.phoneNumber,
        address:user.address,

      } 
      return res.status(200).send(result);
  
  } catch (err) {
      return res.status(500).send({message:err})
  }
});

router.get("/category/:category", async (req, res) => {

  try {
    const category=req.params.category
      const cars = await Car.find({category})  
      return res.status(200).send(cars);
  
  } catch (err) {
      return res.status(500).send({message:err})
  }
});

router.get("/", async (req, res) => {

  try {
    const name=req.query.name
    if (name ==="") return res.status(200).send([]);
    const cars = await Car.find({name: { $regex:name, $options:"i" }}) 
       
      return res.status(200).send(cars);
  
  } catch (err) {
      return res.status(500).send({message:err})
  }
});

router.get("/", tokenVerification,async (req, res) => {

  try {
      console.log(req.user_id); 
      const owner = req.user_id
      const cars = await Car.find({owner}) 
 
      return res.status(200).send(cars);
  
  } catch (err) {
      return res.status(500).send({message:err})
  }
});

router.post("/",tokenVerification,verifyreqestBody, async (req, res) => {

    try {
        const { mileage,year,name,price,color, category,description,photo} = req.body;
        const car = await Car.create({
            name,
            price,
            color, 
            category,
            description,
            photo,mileage,
            year,
            owner:req.user_id
          });
              
        return res.status(200).send(car);
    
    } catch (err) {
        return res.status(500).send({message:err})
    }
});  

router.delete("/:id", tokenVerification,async (req, res) => {

  try {
      
      const owner = req.user_id
      const _id = req.params.id

      const car = await Car.findOne({_id}) 
      if (!car) return res.status(404).send({message:"car not found"});

      const cardeleted = await Car.deleteOne({ _id,owner })  
      return res.status(200).send(car);
  
  } catch (err) {
      return res.status(500).send({message:err})
  }
});

router.put("/:id",tokenVerification,verifyreqestBody, async (req, res) => {

  try {
      const { name,price,color, category,description,photo} = req.body;
      const _id=req.params.id
      const car = await Car.findOne({_id}) 
      if (!car) return res.status(404).send({message:"car not found"});
      car.name = name
      car.price = price
      car.color = color
      car.category = category
      car.description = description
      car.photo = photo 
      car.dave()

      return res.status(200).send(car);
  
  } catch (err) {
      return res.status(500).send({message:err})
  }
});
module.exports = router
