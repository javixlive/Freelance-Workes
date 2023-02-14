const { Router } = require("express");
const router = Router();

//Home

router.get("/", async (req, res) => {
    try {
    res.status(200).send("Back deployado");
    } catch (error) {
    res.status(400).json(error);
    }
})


//User
const post_user = require("./routes_user/post_user");
const put_user = require("./routes_user/put_user");
const get_user = require("./routes_user/get_users");
const get_userById = require("./routes_user/get_userById");
const get_userByEmail = require("./routes_user/get_userByEmail");
const delete_user = require("./routes_user/delete_user");
const get_userTemporaly = require("./routes_user/get_usersTemporaly");

router.use(post_user);
router.use(put_user);
router.use(get_user);
router.use(get_userTemporaly);
router.use(get_userById);
router.use(get_userByEmail);
router.use(delete_user);

//Service
const post_service = require("../routes/routes_service/post_service");
const get_services = require("../routes/routes_service/get_services");
const get_serviceById = require("../routes/routes_service/get_serviceById");
const put_service = require("../routes/routes_service/put_service");
const delete_service = require("../routes/routes_service/delete_service");
const rate_service = require("../routes/routes_service/rate_service")

router.use(post_service);
router.use(get_services);
router.use(get_serviceById);
router.use(put_service);
router.use(delete_service);
router.use(rate_service)

//Cart
const post_cart = require("../routes/routes_cart/post_cart")
const delete_cart = require("../routes/routes_cart/delete_cart")
const get_cart = require("../routes/routes_cart/get_cart")

router.use(post_cart)
router.use(delete_cart)
router.use(get_cart)

//Sales
const get_sales = require("./routes_sales/get_sales");
const get_salesById = require("./routes_sales/get_sales");

router.use(get_sales);
router.use(get_salesById);

//Login
const login = require("./login/login");
const login_google = require("./login/login_google");

router.use(login);
router.use(login_google);

//Email Test
const emailTest = require("./emailTest");

router.use(emailTest);

//Categories
const categories = require("./filters/categories");
const categories_name = require("./filters/categories_name");

router.use(categories);
router.use(categories_name);

//Payment
const paymentRoutes = require("./payment/payment.routes");

router.use(paymentRoutes);

//Orders
const ordersRoutes = require("./orders/orders.routes");

router.use(ordersRoutes);

module.exports = router;
