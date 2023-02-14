const { Router } = require("express");
const router = Router();
const Sale = require('../../models/sales');
const Service = require("../../models/service");

router.post("/sales", async (req, res) => {
    try {
        const {price, payMethod, status, serviceId, user} = req.body;
        const service = await Service.findById(serviceId);
        
        const newSale = new Sale({name: service.name, price, payMethod, status, serviceId, user});
        await newSale.save();
    } catch (error) {
        res.status(400).json("Errores");
    }
});

module.exports = router;