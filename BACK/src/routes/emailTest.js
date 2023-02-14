const { Router } = require("express");
const router = Router();
const sendMail = require("../utils/nodemailer")

router.post("/emailtest", async (req, res) => {
  try {
    const { email } = req.body;
    const contentHtml = `
      <h1>e-mail enviado con nodemailer</h1>
      <ul>
        <li>Esto es una prueba</li>
      </ul>`;
    
      const result = await sendMail(contentHtml, email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

// const emailTest = require("./emailTest")

// router.use(emailTest);
