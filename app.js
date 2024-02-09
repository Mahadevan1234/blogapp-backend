const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userrouter=require("./controllers/userRouter")

//aliasname
const app=express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://mahi17700:mahi123@cluster0.6apodnl.mongodb.net/usersDb?retryWrites=true&w=majority",
{useNewURLParser:true})


//routing
app.use("/api/users",userrouter)

app.listen(3000,()=>{
    console.log("server running...")
})