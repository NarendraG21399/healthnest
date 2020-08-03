import React from 'react';
import avatar from '../asset/icon-avatar.png';
import "./feed.style.css";

const Feedlist = (props) => {
    return (<div className="row">
        <div className="col">
            <div className="card">
                <div className="media shadow" style={{ backgroundColor: "white", padding: '  15px' }}  >
                    <img className="align-self-start mr-3" src={avatar} style={{
                        verticalAlign: 'middle',
                        width: '60px',
                        height: '60px',
                        bordeRadius: '50%',
                        marginLeft: '10px'
                    }} alt="missing image" />
                    <div className="media-body">
                        <h5 className="mt-0">{props.data.name}</h5>
                        <p className="text-success" >DIAGNOSED RECENTLY</p>
                    </div>
                     
                    <div className="test" onClick={() => props.deleteList(props.data.id)}></div>
                </div>
                <div className="card-body">
                    <img src={props.data.image} style={{ width: '90%', margin: 'auto' }} alt="feed image"/>
                    <h5 className="text-success">  <i className="fa fa-map-marker"></i>&nbsp;Ratnagiri maharastra</h5>
                    <hr />
                    <p className="card-text">{props.data.description}
                    </p>
                </div>
            </div>
        </div>
    </div>);
}

export default Feedlist;