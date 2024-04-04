import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../data";
import { useState,useEffect } from "react";


const Blog=()=>{
    const {holder}=useParams();
    const[bdata,setData]=useState("null");
    useEffect(()=>{
       const filteredData= blogData.filter((data)=>data.title===holder);
       setData(filteredData[0]);
       console.log(bdata);

    },[])
    return(
        <div>
            <h1>{holder}</h1>
            <p>{bdata.body}</p>

        </div>
    )

}

export default Blog;