import React from 'react';
import avatar from '../asset/icon-avatar.png';

const Navbar = () => {
    return (<div style={{ height: '60vh', width: '25%' , margin: '20px 50px'  }}>
        <div className="media shadow" style={{ backgroundColor: "white", padding: '  15px' }}  >
            <img className="align-self-start mr-3" src={avatar} style={{
                verticalAlign: 'middle',
                width: '60px',
                height: '60px',
                bordeRadius: '50%',
                marginLeft: '10px'
            }} alt="Generic placeholder image" />
            <div className="media-body">
                <h5 className="mt-0">Patient</h5>
                <p  className="text-success">DIAGNOSED RECENTLY</p>
            </div>
        </div>
        <hr />
        <div style={{ marginTop: '10px' }}>
            <p>Library</p>
            <ul style={{ listStyle: 'none', marginTop: '10px' }}>
                <li style={{ marginBottom: '20px', }}>
                    <i className="fa fa-bookmark text-warning" aria-hidden="true"></i>  
                    &nbsp;  My Bookmarks</li>
                <li style={{ marginBottom: '20px' }}><i  className="fa fa-newspaper-o text-info"  aria-hidden="true"></i>  News & Article</li>
                <li style={{ marginBottom: '20px' }}><i className="fa fa-comments text-success" aria-hidden="true"></i>  FAQs</li>
                <li  ><i className="fa fa-calendar text-danger" aria-hidden="true"></i>  Events</li>
            </ul>
        </div>
    </div>);
}


export default Navbar;