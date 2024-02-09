const mongoose=require("mongoose")

const signupschema=new mongoose.Schema(
    {
        userName:String,
        userAge:String,
        userAddress:String,
        userPincode:String,
        userEmail:String,
        password:String
    }
)

module.exports=mongoose.model("users",signupschema)