const { Router } = require("express");
const router = Router();
const Service = require("../../models/service");

router.get("/categories", async (req, res) => {
  try {
    console.log("categories");
    let array = [];
    let categories = await Service.find();
    categories.map((e) => {
      array.push(e.name);
    });
    let unique = new Set(array);
    let response = Array.from(unique);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ mesage: error });
  }
});

module.exports = router;
