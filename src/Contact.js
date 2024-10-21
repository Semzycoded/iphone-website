function Contact({contact}) {
    return ( 
        <>
        {
            contact === "contact"?
            <div className="fixed-bottom" style={{background:"linear-gradient(white,grey,white)",display:"flex"}}>
                <div style={{background:"linear-gradient(red,black,red)",padding:"10px",width:"50px",position:"absolute",marginRight:"5px"}}>.</div>
                <p id="contact">08136151937</p>
                <div style={{background:"linear-gradient(red,black,red)",padding:"10px",width:"100px",position:"absolute",marginLeft:"1275px"}}>.</div>
            </div>
            :<div></div>
        } 
        </>
     );
}

export default Contact;