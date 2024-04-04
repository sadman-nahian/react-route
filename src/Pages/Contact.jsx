import React from "react";
import { useNavigate } from "react-router-dom";

const Contact=()=>{
    const navigate=useNavigate();
    return (
        <div>
            <h2>CONTACT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus soluta molestiae est? Ut consectetur sequi sunt provident atque quos!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid explicabo eveniet, fugiat provident minima fuga! Soluta, corporis nisi illo beatae, saepe illum esse officiis ipsa atque optio ut provident!</p>
            <button style={{border:"1px solid white"}}onClick={()=>{
                navigate("/");
            }}>HOME</button>
        </div>
        
    )
}
export default Contact;