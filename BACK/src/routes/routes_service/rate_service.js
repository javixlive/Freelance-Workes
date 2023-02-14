const { Router } = require("express");
const router = Router();
const Service = require("../../models/service");

router.put("/service/rate", async (req, res) => {
  try {
    const {serviceId, userName, rating, review} = req.body
    const service = await Service.findById(serviceId);
    Number(rating)

    const objReview = {
      user: userName,
      review
    }

    service.reviews = service.reviews.concat(objReview)
    service.rating.push(rating)

    const average = Math.round(service.rating.reduce((a,b)=> parseInt(a) + parseInt(b) )/service.rating.length)
    service.average = average

    const savedService = await service.save()

    res.status(201).send(savedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
