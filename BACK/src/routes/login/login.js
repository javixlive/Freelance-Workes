const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();
require("dotenv").config();
const User = require("../../models/user");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);
    console.log(passwordCorrect)
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",  
    });
  } else {
    res.status(200).json(user);
  } 
});

 

//Sin encriptar la contraseña

  // const { email, password } = req.body;
  // const user = await User.findOne({ email });
  // if(user === null){
  //   res.status(404).json({message: "El usuario no existe"});
  // } else if(password === user.passwordHash){
  //   res.status(200).json(user);
  // } else{
  //   res.status(404).json({message:"contraseña invalida"});
  // }

module.exports = router;
