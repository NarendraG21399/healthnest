import React from 'react';

const Tagbutton = ({tagfilter,allpost}) => {
    const navlist = ['news', 'diet', 'lifestyle', 'Sysmptoms','Treatment','Test topic'].map((ele, index) => 
        <li className="nav-item" key={index}>
            <a className="tag nav-link" data-toggle="pill" href="#menu1"  onClick={()=> tagfilter(ele)}> {ele}</a>
        </li>
    );
    return (    
        <div className="container w-50" style={{margin: 'auto'  , marginTop: '10px', marginBottom: '10px' }}>
            <ul className="nav  d-flex  nav-pills justify-content-between">
                {allpost ? <li className="nav-item">
                    <a className="tag nav-link active" data-toggle="pill" href="#home" onClick={()=> allpost()}>All Post</a>
                </li>: null}
                {navlist}
            </ul>
        </div>
    )
}

export default Tagbutton;