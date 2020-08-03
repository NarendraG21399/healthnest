import React, { useState, useEffect } from 'react';
import Tagbutton from "./tagbutton";
import store from "../store";
import { list } from "./util";

const Modal = ({ closemodal }) => {
    const [data, setdata] = useState({ topics: [] });
    const [issubmitt, setissubmitt] = useState(false)
    useEffect(() => {
        if (data.id) {
            store.dispatch({ ...data, type: 'ADD' })
            closemodal();
        }
    }, [data.id]);
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setdata((prev) => { return { ...prev, image: e.target.result } });

            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }

    const onchange = (e) => {
        const value = e.target.value;
        setdata((prev) => { return { ...prev, description: value } });
    }
    const post = () => {
        setissubmitt(true);
        if (data.topics.length) {
            setdata((prev) => { return { ...prev, date: new Date(), id: Date.now(), name: 'patient' } });
        }
    }
    const addtopics = (topics) => {
        topics.active = !topics.active;
        const istopics = data.topics.includes(topics.name);
        istopics ? setdata((prev) => { return { ...prev, topics: data.topics.filter(ele => ele !== topics.name) } }) :
            setdata((prev) => { return { ...prev, topics: [...prev.topics, topics.name] } })
    }

    const navlist = list.map((ele) => 
    <li className="nav-item" key={ele.name}>
        <p className="nav-link" ><i className={ele.icon} aria-hidden="true"></i>   &nbsp; {ele.name}</p>
    </li>)
    return (
        <div className="modal-backdrop bd-example-modal-lg" style={{ display: 'block', opacity: 0.95, overflow: 'auto' }}  >
            <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <ul className="nav nav-pills card-header-pills text-success addpost"  >
                        <li className="nav-item">
                        <p className="nav-link" >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;
                             post</p>
                    </li>
                             {navlist}
                        </ul>
                        <button onClick={closemodal} type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 form-group">
                                <label className="col-form-label">Description:</label>
                                <textarea className="form-control" value={data.description} onChange={(e) => onchange(e)}  ></textarea>
                            </div>
                        </div>

                        <input type="file" accept="image/*" onChange={onImageChange} />

                    </div>
                    {data.image ? <img src={data.image} style={{ width: '40%', height: '200px', margin: 'auto' }} /> : null}

                    <h4 className='text-success mx-auto '>Add topics that best describe your post</h4>
                    <Tagbutton tagfilter={addtopics} />
                    {!data.topics.length && issubmitt ? <h3 className='text-danger mx-auto'>please select one or more topis </h3> : null}
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