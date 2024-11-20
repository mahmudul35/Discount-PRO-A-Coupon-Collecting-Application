import React from "react";
import Banner from "../components/Banner";
import BrandsOnSell from "../components/BrandsOnSell ";
import TopBrand from "../components/TopBrand";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <TopBrand />
      <BrandsOnSell />
    </div>
  );
};

export default Home;
