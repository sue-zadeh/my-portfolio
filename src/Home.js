import React from "react";

import Banner from "./Banner.js";
import NavBar from "./NavBar";
import Body from "./Body.js";

import "./main.css";

function Home() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Body />
    </div>
  );
}

export default Home;