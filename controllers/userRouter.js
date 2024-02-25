const express = require("express")
const usermodel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const { json } = require("body-parser")

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

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.userEmail
    let data = await usermodel.findOne({"userEmail":email})
    if(!data)
    {
        return res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match) {
        return res.json({
            status:"incorrect password"
        })
    }
    res.json({
        status:"success","userData":data
    })
})

module.exports = router