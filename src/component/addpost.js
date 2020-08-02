import React, { useState } from 'react';
import './addpost.css'
import Modal  from "./modal";

const AddPost = () => {

    const [ismodelshow, setismodelshow]= useState(false);

    const closemodal =() =>{
        setismodelshow(false)
    };
    return (
        <div className="card ">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills text-success"  >
                    <li className="nav-item">
                        <a className="nav-link"  onClick= {() => {setismodelshow(true) }}>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;
                             post</a>
                    </li>
                 
                    <li className="nav-item">
                        <a className="nav-link" ><i class="fa fa-question-circle" aria-hidden="true"></i>   &nbsp;Ask questions</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" ><i  class="fa fa-bars"></i> &nbsp; poll</a>
                    </li>
                  
                    <li className="nav-item">
                        <a className="nav-link" ><i class="fa fa-calendar" aria-hidden="true"> </i> &nbsp; Events</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="row" style={{backgroundColor: 'lightgray' , padding: '10px'  }}>
                    <h5  className="col-sm-9">What's on your mind? </h5>
                    <div className="col-sm-2 d-flex justify-content-end align-items-end justify-content-around
">
                    <i class="fa fa-map-marker"></i>
                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
    {ismodelshow ? <Modal closemodal ={closemodal}/> : null}
        </div>
    );
}

export default AddPost;