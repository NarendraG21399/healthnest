import React from 'react';

const Tagbutton = () => {
    return (    
        <div className="container">
            <ul className="nav  d-flex  nav-pills justify-content-around ">
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#home">All Post</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" data-toggle="pill" href="#menu1"> News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">Diet</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">lifestyle</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">Sysmptoms</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">Treatment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">Test topic</a>
                </li>
            </ul>
        </div>
    )
}

export default Tagbutton;