const express = require('express');
const Cart = require('../../models/cart');

const router = express.Router();

router.get('/cart/:id', async (req, res) => {
  try {
    const {id} = req.params
    const cart = await Cart.findById(id).populate("services")
    res.status(200).json({ cart});  
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router;

