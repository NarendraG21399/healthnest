import React, { useState, useEffect } from 'react';
import Tagbutton from "./tagbutton";
import store from "../store";

const Modal = ({closemodal}) => {
    const [data, setdata] = useState({topics:[]});
    useEffect(() => {
        if(data.id){
        store.dispatch({...data, type: 'ADD'})
        closemodal();
        }
      }, [data.id]);
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
        const value = e.target.value ;
          setdata((prev)=> { return {...prev, description: value}});
    }
    const post = () => {
         setdata((prev) => {return {...prev , date: new Date(), id: Date.now(), name: 'patient'}});
    }
    const addtopics =(topics) => {
        const istopics = data.topics.includes(topics);
        istopics ? setdata((prev)=> {return {...prev ,topics: data.topics.filter(ele => ele !== topics)  }}): 
        setdata((prev)=> {return {...prev ,topics: [...prev.topics, topics]  }})
    }
    return (
        <div className="modal-backdrop bd-example-modal-lg"   style={{ display: 'block', opacity: 0.95, overflow: 'auto' }}  >
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
                            onClick={closemodal}
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
                                <textarea className="form-control"    value={data.description} onChange={(e) => onchange(e)}  ></textarea>
                            </div>
                        </div>
                        
                        <input type="file" accept="image/*" onChange={onImageChange} />

                    </div>
                    {data.image ? <img   src={data.image} style={{ width: '40%', height: '200px', margin: 'auto' }} /> : null}

                    <h4 className='text-success mx-auto '>Add topics that best describe your post</h4>
                    <Tagbutton tagfilter={addtopics}/>
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