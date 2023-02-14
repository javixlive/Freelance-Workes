const { Router } = require("express");
const router = Router();
const Service = require("../../models/service");

router.get("/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id).populate("user");
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
