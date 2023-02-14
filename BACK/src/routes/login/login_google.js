const { Router } = require("express");
const router = Router();
require("dotenv").config();
const User = require("../../models/user");
const sendMail = require("../../utils/nodemailer");

router.post("/login_google", async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findOne({ email });
  if (user === null) {
    const user = new User({ name, email });
    const contentHtml = `
    <h1>congratulations</h1>
    <br/><br/>
    <h1>Your account has been successfully created</h1>
  `;
    await sendMail(contentHtml, email);
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } else {
    res.status(200).json(user);
  }
});

module.exports = router;
