import React, { useState, useEffect } from 'react';
import Tagbutton from "./tagbutton";
const Modal = (props) => {
   
    const [image, setimage] = useState('');
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setimage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }

    const post = () =>{

    }
    return   (
        <div className="modal-backdrop bd-example-modal-lg"  id="exampleModalScrollable" style={ { display: 'block', opacity: 0.95 , overflow: 'auto'}} id="channelModal">
            <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div className="modal-content">
                    
                        <div className="modal-header">
                <ul className="nav nav-pills card-header-pills text-success"  >
                    <li className="nav-item">
                        <a className="nav-link"  >
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
                                <label for="message-text" className="col-form-label">Description:</label>
                                <textarea className="form-control" id="message-text" style={{ outline: 'none' }}></textarea>
                            </div>
                        </div>
                        <label for="message-text" className="col-form-label">Description:</label>
                        <input type="file" accept="image/*" onChange={onImageChange} />

                    </div>
                    {image ? <img id="target" src={image} style={{ width: '40%', height: '200px', margin: 'auto' }} /> : null}

                    <h4 className='text-success mx-auto '>Add topics that best describe your post</h4>
                    <Tagbutton />

                    <div className="modal-footer">
                        <button onClick={post} type="button" className="btn btn-success btn-lg" style={{width: '200px'}}>
                            POST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) 
};

export default Modal;