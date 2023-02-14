const express = require('express');
const Cart = require('../../models/cart');
const User = require("../../models/user");

const router = express.Router();

router.delete('/cart', async (req, res) => {
  try {
    const {serviceId, cartId} = req.body
    if(serviceId === undefined){
      // await User.findByIdAndUpdate(userId, {cart:[]})
      // await Cart.findByIdAndDelete(cartId)
      // res.status(200).json({ message: "shopping cart was successfully removed" });
      const cart = await Cart.findById(cartId)
      cart.services = []
      const cleanCart = await cart.save()
      res.status(200).json({ message: "cart was successfully cleaned", cleanCart });
    }else{
      const cart = await Cart.findById(cartId)
      let newServices = cart.services.filter((e) => e != serviceId)
      cart.services = newServices
      const savedCart = await cart.save()
      res.status(200).json({ message: "service was successfully removed", savedCart });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Ocurrió un error al eliminar el carrito de compras.' });
  }
});

module.exports = router;

