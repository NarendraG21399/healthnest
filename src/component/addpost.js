import React, { useState } from 'react';
import './addpost.css'
import Modal from "./modal";
import { list } from "./util";
const AddPost = () => {
    const [ismodelshow, setismodelshow] = useState(false);
    const closemodal = () => {
        setismodelshow(false)
    };
    const navlist = list.map((ele) =>
        <li className="nav-item" key={ele.name}>
            <p className="nav-link" ><i className={ele.icon} aria-hidden="true"></i>   &nbsp; {ele.name}</p>
        </li>)
    return (
        <div className="card  w-50">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills text-success addpost"  >
                    <li className="nav-item">
                        <p className="nav-link" onClick={() => { setismodelshow(true) }}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;
                             post</p>
                    </li>
                    {navlist}
                </ul>
            </div>
            <div className="card-body">
                <div className="row" style={{ backgroundColor: 'lightgray', padding: '10px' }}>
                    <h5 className="col-sm-9">What's on your mind? </h5>
                    <div className="col-sm-2 d-flex justify-content-end align-items-end justify-content-around">
                        <i className="fa fa-map-marker"></i>
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            {ismodelshow ? <Modal closemodal={closemodal} /> : null}
        </div>
    );
}

export default AddPost;