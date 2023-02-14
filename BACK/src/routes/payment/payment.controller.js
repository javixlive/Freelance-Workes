const axios = require("axios");

// require('dotenv').config();
// const api = process.env.PAYPAL_API
// const apiClient = process.env.PAYPAL_API_CLIENT
// const apiSecret = process.env.PAYPAL_API_SECRET
const api = "https://api-m.sandbox.paypal.com"
const apiClient = "AdnJQyg6JjZw8Nes6-8ZLubBZtx-KgtfuqMvjPCNyhF-B2cg8qrcR6c5jwgo05QOhFnHrnMLHwV1wYpb"
const apiSecret = "EMYbVa99AGaaI4mETE0Uk1GsE43g_RwurN_3_pjCWcz9dWiSms2Tnfd823XyhzTkQmWprMA0WXbcUJ5G"

const createOrder = async (req, res) => {
    try {
        //Doc:  https://developer.paypal.com/docs/api/orders/v2/
        const { value, description } = req.body;
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value
                    },     
                    description
                }
            ],
            application_context: {
                brand_name: "Freelance Workers",
                landing_page: "LOGIN", // LOGIN/BILLING/NO_PREFERENCE
                user_action: "PAY_NOW",
                return_url: "https://pf-back-production-b443.up.railway.app/capture-order",
                cancel_url: "https://pf-back-production-b443.up.railway.app/cancel-order"
            }
        }

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        //Getting token: https://developer.paypal.com/reference/get-an-access-token/
        const { data: { access_token } } = await axios.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: apiClient,
                password: apiSecret
            }
        })

        //Create order: https://developer.paypal.com/api/rest/requests/
        const response = await axios.post(`${api}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        //response.config.data can be use to capture info
        // console.log(response.data)
        res.json(response.data);

    } catch(error) {
        return res.status(500).send("Something went wrong");
    }
    
}

const captureOrder = async (req, res) => {
    //Capture order: https://developer.paypal.com/docs/api/orders/v2/
    const { token } = req.query;

    const response = await axios.post(`${api}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: apiClient,
            password: apiSecret
        }
    });
    // console.log(response.data.links[0].href)
    const link = await axios.get(response.data.links[0].href, {
        auth: {
            username: apiClient,
            password: apiSecret
        }
    })
    servicesId = JSON.parse(link.data.purchase_units[0].description);
    const userMail = servicesId.pop()

    await axios.post(`https://pf-back-production-b443.up.railway.app/orders`, {
        purchaseId: link.data.id,
        status: link.data.status,
        servicesId,
        userMail
    });

    return res.redirect("https://pf-front-three.vercel.app/payment");
}

const cancelOrder = (req, res) => {
    res.redirect("https://pf-front-three.vercel.app/paymentDeclined")
}

module.exports = {
    cancelOrder, 
    captureOrder,
    createOrder
};