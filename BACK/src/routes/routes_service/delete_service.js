const { Router } = require("express");
const { deleteImage } = require("../../utils/cloudinary");
const Service = require("../../models/service");
const router = Router();

router.delete("/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(400).send({ message: "The service does not exist" });
    } else {
      await deleteImage(service.image.public_id);
      res.status(200).send({ message: "Service deleted successfully" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
