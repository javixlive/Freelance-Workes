const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();
const User = require('../../models/user') //No estaba en la carpeta incorrecta.

router.put("/users/:id", async (req, res) => {
    try {
    const { id } = req.params
    if(req.body.password !== undefined){
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
        console.log(passwordHash)
        await User.findByIdAndUpdate( id, {passwordHash})
    }
    await User.findByIdAndUpdate( id, req.body)
    res.status(200).json({message: "User updated successfully"});
    } catch (error) {
    res.status(400).json(error);
    }
})

module.exports = router;