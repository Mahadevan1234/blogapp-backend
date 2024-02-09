const express=require("express")
const postmodel=require("../models/postModel")

const router=express()

router.post("/add",async(req,res)=>{
    let data=req.body
    let postadd=new postmodel(data)
    let result=await postadd.save()
    res.json({
        status:"success"
    })
})

module.exports=router