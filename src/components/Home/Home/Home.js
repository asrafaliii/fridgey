import React from "react";
import Banner from "../Banner/Banner";
import CardBanner from "../Card/CardBanner";
import MidBanner from "../MidBanner.js/MidBanner";
import Product from "../Products/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <CardBanner />
      <Product />
      <MidBanner />
    </div>
  );
};

export default Home;
