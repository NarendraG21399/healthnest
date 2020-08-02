import React from 'react';
import Header from './component/header'
import Navbar from "./component/navbar";
import AddPost from "./component/addpost";
import Feed from "./component/feed";
function App() {
  return (
    <div >
      <Header />
      <Navbar />
      <AddPost />
      <Feed />
    </div>
  );
}

export default App;
