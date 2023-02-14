const express = require('express');
const Cart = require('../../models/cart');
const Service = require("../../models/service");
const User = require("../../models/user");

const router = express.Router();

router.post('/cart', async (req, res) => {
  try {
    const {email, serviceId } = req.body

    let service = await Service.findById(serviceId)
    let user = await User.findOne({email})

    if(user.cart.length === 0){
      const newCart = new Cart({
        services: [service._id],
        user: user._id,
      });
      const savedCart = await newCart.save();
      user.cart = user.cart.concat(savedCart._id)
      user.save()
      res.status(200).send(savedCart);
    } else{
      let cart = await Cart.findById(user.cart[0])
      cart.services = cart.services.concat(service._id)
      const savedCart = await cart.save()
      res.status(200).send(savedCart);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error});
  }
});

module.exports = router;
