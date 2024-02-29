import React, { useState } from "react";
import "./Navbar.css"
import twenty from "../components/assets/agriculture.png"
import logo from "../components/assets/25-hours-support.png"
import { Link } from "react-router-dom";


const Navbar =()=>{

    const [menu,setMenu] = useState("info") 
    return(
        <div className="navbar">
            <div >
                <img className="twenty" src={twenty} alt=""></img>
                

            </div>
            <div>
            <p className="p"> AGRICULTURE</p>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("info")}}>INFO{menu==="info"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("FERTILIZERS")}}> <Link style={{textDecoration : 'none'}} to ='/FERTILIZERS'>FERTILIZERS</Link>{menu==="FERTILIZERS"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("TOOLS")}}><Link tyle={{textDecoration : 'none'}} to ='/TOOLS'>TOOLS</Link>{menu==="TOOLS"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("SUBSIDY")}}><Link tyle={{textDecoration : 'none'}}to ='/SUBSIDY'>SUBSIDY</Link>{menu==="SUBSIDY"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("SUPPORT")}}><Link tyle={{textDecoration : 'none'}}to ='/SUPPORT'>SUPPORT</Link>{menu==="SUPPORT"?<hr/>:<></>}</li>
            </ul>
            </div>
            <Link to="/phonenumber"><img className="logo" src={logo} alt=""></img></Link>
            

        </div>
    )
}
export default Navbar