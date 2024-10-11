import { useState } from "react";
import "./style/style.css"

function CreateAccount(){
    const [data,updatedata]=useState("");
    function register(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const senddata={
            userid:data.get("userid"),
            password:data.get("password"),
            address:data.get("address")
        }

        fetch("http://localhost:8000/createaccount",
        {method:"post",body:JSON.stringify(senddata),headers:{"Content-Type":"application/json"}})
        .then((res)=>res.json())
        .then((d)=>updatedata(d))
        .catch((err)=>console.log(err));
    }

    return(
        <>
        <div className="header"><h1>Join Us and Enjoy our Pizza</h1></div>
        <div className="container">
            <div className="imgcontainer">
                <img src="/createccount.png.png" alt="Avatar" className="avatar"/>
            </div>
        <form onSubmit={register}>
        <label htmlFor="userid"><b>Please Enter your Email ID</b></label>
            <input type="text" name="userid" />
            <label htmlFor="userid"><b> Choose a Password</b></label>
            <input type="password" name="password" />
            <label htmlFor="userid"><b>Please Enter Delivery Address</b></label>
            <input type="text" name="address"/>
            <button type="submit">Register</button>
        </form>
        <h2>{data.Mesg}</h2>
        <a href="/">Go to Home Page</a>
        </div>
        </>
    )
}

export default CreateAccount