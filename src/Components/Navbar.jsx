import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
            <NavLink to="/" className="nav-link">HOME</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            


        </nav>
    )

}
export default Navbar;