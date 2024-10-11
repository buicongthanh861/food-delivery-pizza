import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./style/style.css"

function Home(){
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserContext);

    function finalorder(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const senddata={
            userid:user.userid,
            cheeseandcorn:data.get("cheeseandcorn"),
            capsicum:data.get("capsicum"),
            margherita:data.get("margherita"),
            onion:data.get("onion"),
            address:user.address,
            totalamount:data.get("cheeseandcorn")*110+data.get("capsicum")*90+data.get("onion")*105+data.get("margherita")*130,

        }
        setUser(senddata)
        navigate("/Mycart")
    }

    if(user){

    return(
        <><div className="header"><h3>Welcom,{user.userid}</h3>
        <h3>Your Order Will Be Delivery to,{user.address} Oder ID:{user.orderid}</h3></div>
        <form onSubmit={finalorder}>
            <div className="menu">
                <div className="card">
                    <img src="/cheeseanandcom.png" alt="Avatar" className="icon" />
                    <div className="container-card">
                        <h4><b>Cheese and Corn</b></h4>
                        <h4><b>Price:Rs.110</b></h4>
                         <input type="number" name="cheeseandcorn" min="0" defaultValue={0}/>
                    </div>
            </div>
            <div className="card">
                    <img src="/mozerella.png.jpg" alt="Avatar" className="icon" />
                    <div className="container-card">
                        <h4><b>Capsicum</b></h4>
                        <h4><b>Price:Rs.90</b></h4>
                        <input type="number" name="capsicum" min="0" defaultValue={0}/>
                    </div>
            </div>
            <div className="card">
                    <img src="/margherita.jpg.jpg" alt="Avatar" className="icon" />
                    <div className="container-card">
                        <h4><b>Margherita</b></h4>
                        <h4><b>Price:Rs.130</b></h4>
                        <input type="number" name="margherita" min="0" defaultValue={0} />
                    </div>
            </div>
            <div className="card">
                    <img src="/onion.jpg" alt="Avatar" className="icon" />
                    <div className="container-card">
                        <h4><b>Onion</b></h4>
                        <h4><b>Price:Rs.105</b></h4>
                        <input type="number" name="onion" min="0" defaultValue={0} />
                    </div>
            </div>
        
           <div className="container"><button type="submit">Add Pizza</button></div> 
            </div>
        </form>
        </>
    )
    }
    else{
        
        return(<><h1>You are not Logged In</h1></>)
    }
}

export default Home;