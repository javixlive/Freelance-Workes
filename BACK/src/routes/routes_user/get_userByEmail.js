const { Router } = require("express");
const router = Router();
const User = require('../../models/user')

router.get("/userEmail", async (req, res) => {
  try {
    const { email } = req.query
    const user = await User.find({email}).populate('services').populate('orders')
    //const user = await User.find({email})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({message: error});
  }
});

module.exports = router;