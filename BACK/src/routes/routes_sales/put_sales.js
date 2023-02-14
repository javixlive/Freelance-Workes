const { Router } = require("express");
const router = Router();
const Sales = require('../../models/sales');

router.put('/sales/:id', async (req, res) => {
    try {
        const id = req.params.id

        await Sales.findByIdAndUpdate(id, req.body);
        res.status(201).send({message: "User updated successfully"});

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
