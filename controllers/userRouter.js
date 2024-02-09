const express = require("express")
const usermodel = require("../models/userModel")
const bcrypt = require("bcryptjs")

const router = express.Router()

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/signup", async(req,res) => {
    let { data } = { "data": req.body }
    let password = data.password
    hashPasswordGenerator(password).then(
        (hashedPassword) => {
            console.log(hashedPassword)
            data.password = hashedPassword
            console.log(data)
            let user = new usermodel(data)
            let result = user.save()
            res.json({
                status: "success"
            })
        }
    )


})

module.exports = router