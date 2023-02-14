const { Router } = require("express");
const { getOrder, postOrder, putOrder } = require("./orders.controller");

const router = Router();

router.get('/orders/:id', getOrder);
router.post('/orders', postOrder);
router.put('/orders', putOrder);



module.exports = router;