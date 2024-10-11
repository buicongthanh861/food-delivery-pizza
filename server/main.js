const mongoose=require("mongoose");
const express=require("express");
const cors = require("cors");
const bodyparser=require("body-parser");

mongoose.connect("mongodb+srv://buicongthanh861:123@cluster0.lwtin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>console.log("Connected Successfully"))
.catch(err=>console.log(err));

const userdetails=new mongoose.Schema({
    userid:String,
    password:String,
    address:String
})

const orderdetails=new mongoose.Schema({
    userid:String,
    cheeseandcorn:Number,
    capsicum:Number,
    margherita:Number,
    origin:Number,
    address:String,
    totalamount:Number
})

const admindetails=new mongoose.Schema({
    userid:String,
    password:String,
})

const details=mongoose.model("userdetails",userdetails);
const odetails=mongoose.model("Orderdetails",orderdetails);
const adetails=mongoose.model("admindetails",admindetails);

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get("/",function(req,res){
    res.send("Hello Word")
})

app.post("/createaccount",(req,res)=> {
    details.create({
        userid:req.body.userid,
        password:req.body.password,
        address:req.body.address
    }).then(()=> res.json({Mesg:"Registration Successfull"}))
    .catch((err)=>res.json({Mesg:"Some Error Occured"}));
})

app.post("/checklogin",(req,res)=>{
    const uid=req.body.userid
    const pwd=req.body.password
    details.findOne({"userid":uid}).then((mydata)=>{
        if(mydata){
            if(pwd==mydata.password){
                res.json({userid:mydata.userid,address:mydata.address})
            }
            else{
                res.send(false)
            }
        }
        else{
            res.send(false)
        }
    }).catch((err)=>console.log(err));
})
app.post("/placeorder",(req,res)=>{
    odetails.create({
        userid:req.body.userid,
        cheeseandcorn:req.body.cheeseandcorn,
        capsicum:req.body.capsicum,
        margherita:req.body.margherita,
        origin:req.body.onion,
        address:req.body.address,
        totalamount:req.body.totalamount
    }).then((data)=> res.json({orderid:data._id.toString()}))
    .catch((err)=>res.json({Mesg:"Order Did not Place,Please Try Again"}));
})

app.post("/adminlogin",(req,res)=>{
    const uid=req.body.userid
    const pwd=req.body.password
    adetails.findOne({"userid":uid}).then((mydata)=>{
        if(mydata){
            if(pwd==mydata.password){
                res.json({Mesg:"login successful"})
            }
            else{
                res.send(false)
            }
        }
        else{
            res.send(false)
        }
    }).catch((err)=>console.log(err));
})

app.get("/getorders",(req,res)=>{
    odetails.find().then((mydata)=>res.send(mydata)).catch((err)=>console.log(err));
})


app.listen(8000)