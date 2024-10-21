import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
function ContactDealer() {
    const {id} = useParams()
    const{data:dealers} = useFetch("http://localhost:3001/dealers/"+ id)
    return ( 
        <>
        <div style={{backgroundColor:"black",padding:"10px",border:"5px black solid"}}>
            {
                dealers &&
                    <div style={{marginTop:"20%", marginLeft:"45%",position:"relative",backgroundColor:"black",padding:""}}>
                        <img src={dealers.image1} alt=""/>
                        <p>{dealers.name}</p>
                        <p>{dealers.phone}</p>
                    </div>
            }
        </div>
        </>
     );
}

export default ContactDealer;