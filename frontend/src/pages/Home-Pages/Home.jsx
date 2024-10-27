import React from "react";
import Banner from "./Banner";
import ItemShow from "./ItemShow";
import Recommended from "./Recommended";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner /> 
      <ItemShow />
      <Recommended />
      <Review />
    </div>
  );
};

export default Home;
