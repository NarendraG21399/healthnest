import React from 'react';
import Header from './component/header'
import Navbar from "./component/navbar";
import AddPost from "./component/addpost";
import Tagbutton from "./component/tagbutton";
import Feed from "./component/feed";
function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <AddPost />
      <Tagbutton/>
      <Feed />
      
    </div>
  );
}

export default App;
