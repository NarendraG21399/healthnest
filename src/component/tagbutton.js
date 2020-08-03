import React, { useState } from 'react';
import { taglist } from "./util";
import  "./tagbutton.css";
const Tagbutton = ({tagfilter,allpost}) => {
    const [list ]= useState(JSON.parse(JSON.stringify([...taglist])));
    const navlist = list.map((ele) => 
        <li className="nav-item" key={ele.name}>
            <button className= {`border tag nav-link ${ele.active ? 'myactive': ''}`} data-toggle="pill" href="#menu1"  onClick={()=> tagfilter(ele)}> {ele.name}</button>
        </li>
    );
    return (    
        <div className="container w-50" style={{margin: 'auto'  , marginTop: '10px', marginBottom: '10px' }}>
            <ul className="nav  d-flex  nav-pills justify-content-between">
                {allpost ? <li className="nav-item">
                    <button className="border tag nav-link active" data-toggle="pill" href="#home" onClick={()=> allpost()}>All Post</button>
                </li>: null}
                {navlist}
            </ul>
        </div>
    )
}

export default Tagbutton;