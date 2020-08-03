import React from 'react';
import avatar from '../asset/icon-avatar.png';
const Header = () => {
  return (<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#28a745' }}>
    <p className="navbar-brand" ><i className="fa fa-comment-alt-plus"></i>Feed</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <p className="nav-link" ><i class="fa fa-globe" aria-hidden="true"></i> communities <span className="sr-only">(current)</span></p>
        </li>
      </ul>
      <div style={{marginRight: '30%'}}><h5><i class="fa fa-medkit" aria-hidden="true"></i> HealthNest</h5></div>
      <div className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <img src={avatar} alt="avatar" style={{
          verticalAlign: 'middle',
          width: '40px',
          height: '40px',
          bordeRadius: '50%',
          marginLeft: '10px'
        }}  />
      </div>
    </div>
  </nav>);
}

export default Header;