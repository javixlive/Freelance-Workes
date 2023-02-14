const { Router } = require("express");
const router = Router();
const Sales = require('../../models/sales')

router.get("/sales/:id", async (req, res) => {
  try {
    const { id } = req.params
    const service = await Sales.findById(id).populate('user')
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;