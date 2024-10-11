const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://buicongthanh861:123@cluster0.lwtin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>console.log("Connected Successfully"))
.catch(err=>console.log(err));

//tao user ,userid, userpassword,age,gender

const userdetails=new mongoose.Schema({
    username:String,
    userid:String,
    userpassword:String,
    Age:Number,
    Gender:String,
    ismarried:Boolean,
});