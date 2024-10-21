import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";


function Banner() {
const{data:iphones} = useFetch("http://localhost:3001/iphones")

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
    return ( 
        <>
        <div>
        <div className="card-img-overlay d-flex flex-column justify-content-center" style={{background:"black"}}>
          <div style={{borderColor:backgroundColor,borderStyle:"solid",borderWidth:"2px"}} className="container">
            <h1 style={{marginLeft:"350px",marginBottom:"50px",color:"cyan"}}>Welcome to my store</h1>
            <div style={{display:"flex",gap:"20px",overflowX:"scroll"}}>
              {
                iphones &&
                iphones
                .filter((e) => e.name === "major")
                .map((e) =>(
                  <div style={{borderColor:backgroundColor,borderStyle:"solid",borderWidth:"7px"}}>
                    <img style={{borderRadius:"3px"}} src={e.image} alt={e.iphone} />
                    <h5 style={{background:"red",padding:"10px",marginBottom:"-5px",opacity:"0.7"}}>{e.iphone}</h5>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        </div>
        </>
     );
}

export default Banner;