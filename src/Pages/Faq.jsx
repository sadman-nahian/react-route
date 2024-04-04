import React from "react";
import { Link } from "react-router-dom";
const Faq=({title})=>{
    return(
        <div>
            <h2>i am fac</h2>
            <Link to={title}>Leran more</Link>
            
        </div>
    )
}
export default Faq;