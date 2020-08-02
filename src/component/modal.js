import React, { useState, useEffect } from 'react';
import Tagbutton from "./tagbutton";
const Modal = (props) => {
    const [data, setdata] = useState({});
   
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setdata((prev) => { return { ...prev , image: e.target.result}});

            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }

    const onchange =(e) =>{ 
        console.log(e.target.value)
       setdata((prev)=> { return {...prev, description: e.target.value}})
    }
    const post = () => {
         const feedlist  = JSON.parse(localStorage.getItem('feedlist'));
         const storage = feedlist ? [data , ...feedlist]: [data];
         console.log(storage);
         localStorage.setItem('feedlist', JSON.stringify(storage));
        
    }
    return (
        <div className="modal-backdrop bd-example-modal-lg" id="exampleModalScrollable" style={{ display: 'block', opacity: 0.95, overflow: 'auto' }} id="channelModal">
            <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <ul className="nav nav-pills card-header-pills text-success addpost"  >
                            <li className="nav-item">
                                <a className="nav-link"  >
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;
                             post</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" ><i className="fa fa-question-circle" aria-hidden="true"></i>   &nbsp;Ask questions</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" ><i className="fa fa-bars"></i> &nbsp; poll</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" ><i className="fa fa-calendar" aria-hidden="true"> </i> &nbsp; Events</a>
                            </li>
                        </ul>
                        <button
                            onClick={props.closemodal}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"

                        >
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 form-group">
                                <label className="col-form-label">Description:</label>
                                <textarea className="form-control" id="message-text"   value={data.description} onChange={onchange}  ></textarea>
                            </div>
                        </div>
                        <label className="col-form-label">Description:</label>
                        <input type="file" accept="image/*" onChange={onImageChange} />

                    </div>
                    {data.image ? <img   src={data.image} style={{ width: '40%', height: '200px', margin: 'auto' }} /> : null}

                    <h4 className='text-success mx-auto '>Add topics that best describe your post</h4>
                    <Tagbutton />
                    <div className="modal-footer">
                        <button onClick={post} type="button" className="btn btn-success btn-lg" style={{ width: '200px' }}>
                            POST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;