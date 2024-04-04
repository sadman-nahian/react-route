import React from "react";
import { blogData } from "../data";
import { useState,useEffect } from "react";
import { Link, Outlet } from "react-router-dom";


const Home=()=>{
    const[blogs,setBlogs]=useState(blogData);
    const truncateStr=(str,num)=>{
        if(str.length>num){
            return str.slice(0,num)+"...";
        }else{
            return str;
        }
    }
    return (
        <div>
            <h2>HOME</h2>
            {blogs.map((blog)=>{
                const{id,title,body}=blog;
                return (
                    <ul key={id}>
                        <li >
                            <span className="id">{id}</span>
                            <span className="title">{title}</span>
                            <span className="body">{truncateStr(body,50)}</span>
                            <Link to={title}>Leran more</Link>
                            {/* <Link to="/faq">faq</Link> */}
                            {/* so when the link is clicked  recat will try to search http://localhost:5173//{title} page for each link title can be html ,css or js in this example.now we need to create route for these pages dynamicaly  */}
                        </li>
                    </ul>
                )
            })}
            <Outlet/>
        </div>
    )
}
export default Home;