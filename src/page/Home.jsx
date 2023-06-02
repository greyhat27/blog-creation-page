//Home page
import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Blog from "../component/Blog/Blog";

const Home = () => {
  return (
    <div>
      {/* adding navbar and blog component */}
      <Navbar />
      <Blog />
    </div>
  );
};

export default Home;
