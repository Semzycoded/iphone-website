import list from "./assets/list.svg"
import iphone from "./assets/Iphone 15.JPG"
import { NavLink } from "react-router-dom";

function Navbar({setContact,cart}) {
    return ( 
        <>
        <div className="fixed-top" style={{background:"black",fontFamily:"sans-serif",borderBottom:"2px solid white"}}>
             <div style={{display:"flex",gap:"40px",color:"white"}}>
                <img width="50px" className="" src={list} alt=""/>
                <div className="" style={{display:"flex",alignItems:"center",gap:"50px",color:"white",marginLeft:"80px"}}>
                <NavLink className="navlink" to="">
                <p className="navtext">Home</p>
                </NavLink>
                <NavLink className="navlink" to="/Shop">
                 <p className="navtext">Shop</p>
                 </NavLink>
                 <NavLink className="navlink" to="/Service">
                 <p className="navtext" >Services</p>
                 </NavLink>
                 <div style={{marginLeft:"110px",marginRight:"110px"}} className="navlink3">
                 <img style={{marginLeft:"20px"}} width="50px" height="30px" src={iphone} alt="logo"/>
                 <h3>Iphone</h3>
                 </div>
                 <NavLink className="navlink">
                 <p onClick={() => setContact("contact")} className="navtext" >Contact Us</p>
                  </NavLink>
                 <NavLink className="navlink" to="">
                 <p className="navtext" >More</p>
                 </NavLink>
                 <NavLink className="navlink" to="">
                 <p className="navtext" >Cart<span>(</span>{cart}<span>)</span></p>
                 </NavLink>
                 </div>
            </div>
        </div>
        </>
     );
}

export default Navbar;