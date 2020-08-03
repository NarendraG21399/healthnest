import React from 'react';
import Header from './component/header'
import Navbar from "./component/navbar";
import AddPost from "./component/addpost";
import Feed from "./component/feed";
function App() {
  
  return (
    <div  >
      <Header />
      <Navbar />
      <div style={{marginTop: '-395px', marginLeft: '100px'}}>
      <AddPost />
      <Feed />
     </div>

    </div>
  );
}

export default App;
