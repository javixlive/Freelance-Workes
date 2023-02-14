const { Router } = require("express");
const router = Router();
const Sales = require('../../models/sales')

router.get("/sales", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const salesByName = await Sales.find({
        name: { $regex: name, $options: "i" },
        deleteLogic: false,
      }).populate('user', 'serviceId');
      res.status(200).json(salesByName);
    } else {
      const sales = await Sales.find().populate('user', 'serviceId');
      res.status(200).json(sales);
    }
  } catch (error) {
    res.status(400).json("Sales not found");
  }
});

module.exports = router;