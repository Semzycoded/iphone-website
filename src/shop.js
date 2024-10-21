import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


function Shop({setCart, cart}) {
// State to hold the current background color
const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// useEffect to handle the interval for changing the color
useEffect(() => {
  const intervalId = setInterval(() => {
    setBackgroundColor(getRandomColor());
  }, 5000);

  // Cleanup function to clear the interval when the component unmounts
  return () => clearInterval(intervalId);
}, []); // Empty dependency array ensures the effect runs only once on mount
const{data:iphones} = useFetch("http://localhost:3001/iphones")
    return ( 
        <>
            <div style={{position:"absolute",marginTop:"100px",display:"grid",gridTemplateColumns:" repeat(3, 40%)"}}>
                {
                    iphones &&
                    iphones.map((e) =>(
                        <div style={{borderColor:backgroundColor,borderRadius:"20px" ,borderStyle:"solid" ,borderWidth:"23px"}}>
                           <div>
                           <h3>Apple {e.iphone}</h3>
                            <p>SPECIFICATIONS</p>
                            <div style={{display:"flex"}}>
                                <div><img src={e.image} alt=""/></div>
                                <div style={{background:"linear-gradient(gray,white,grey)",boxShadow:"1000px",padding:'10px',marginLeft:"15px",borderRadius:"20px"}}>
                                    <p>{e.size} pixels</p>
                                    <p>{e.camera}MP</p>
                                    <p>{e.ram}</p>
                                    <p>{e.battery}mAh</p>
                                </div>
                            </div>
                           <div style={{display:"flex",gap:"30px",justifyContent:"center"}}>
                            <NavLink to={`/shop/${e.id}`}>
                                <div><button id="shopbtn" className="btn btn-primary">Contact Dealer</button></div>
                            </NavLink>
                           <div><button id="shopbtn" onClick={() => setCart(cart + 1)} className="btn btn-md btn-success">Add to cart</button></div>
                           </div>
                           </div>
                        </div>
                    ))
                }
            </div>
        </>
     );
}

export default Shop;


