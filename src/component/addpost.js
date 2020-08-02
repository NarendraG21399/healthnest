import React from 'react';

const AddPost = () => {
    return (
        <div className="card ">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills" style={{color: 'darkgreen'  }}>
                    <li className="nav-item">
                        <a className="nav-link"  >post</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Ask questions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"   >poll</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"    >Events</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="row" style={{backgroundColor: 'lightgray' , padding: '10px'  }}>
                    <h5  className="col-sm-9">What's on your mind? </h5>
                    <div className="col-sm-2">.col-sm-4</div>
                </div>
            </div>
        </div>
    );
}

export default AddPost;