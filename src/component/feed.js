import React from 'react';
import avatar from '../asset/icon-avatar.png';
import flower from '../asset/flower.jpeg';

import "./feed.style.css";

const FEED = () => {
    return (
        <div className="container w-50">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="media shadow" style={{ backgroundColor: "white", padding: '  15px' }}  >
                            <img className="align-self-start mr-3" src={avatar} style={{
                                verticalAlign: 'middle',
                                width: '60px',
                                height: '60px',
                                bordeRadius: '50%',
                                marginLeft: '10px'
                            }}  />
                            <div className="media-body">
                                <h5 className="mt-0">Patient</h5>
                                <p className="text-success" >DIAGNOSED RECENTLY</p>
                            </div>
                            <div className="test"></div>
                        </div>
                        <div className="card-body">
                            <img src={flower} style={{ width: '90%', margin: 'auto' }} />
                            <h5 className="text-success">  <i className="fa fa-map-marker"></i>&nbsp;Ratnagiri maharastra</h5>
                            <hr />
                            <p className="card-text">https://getbootstrap.com › docs › components › dropdowns
                                Dropdowns are built on a third party library, Popper.js, which provides ... Wrap the dropdown's toggle (your button or link) and the dropdown menu within ...
‎                                Menu items · ‎Menu alignment · ‎Menu dividers · ‎Menu forms</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FEED;