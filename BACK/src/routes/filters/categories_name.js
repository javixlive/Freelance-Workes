const { Router } = require("express");
const router = Router();
const Service = require("../../models/service");

router.get("/categories/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const data = await Service.find({
      name: { $regex: name, $options: "i" },
    }).populate("user");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ mesage: error });
  }
});

module.exports = router;
