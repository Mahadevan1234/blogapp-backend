const express=require("express")
const usermodel=require("../models/userModel")

const router=express.Router()

router.post("/signup",async(req,res)=>{
    let data=req.body
    let user=usermodel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})

module.exports=router