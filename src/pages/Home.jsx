import React, { useContext } from "react";
import Banner from "../components/Banner";
import BrandsOnSell from "../components/BrandsOnSell ";
import FeaturedBrands from "../components/Feature";
import TopBrand from "../components/TopBrand";
import TopRatedBrands from "../components/TopRatedBrand";
import WelcomeHeader from "../components/WelcomeHeader";
import { AuthContext } from "../context/AuthProvider";
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      {user && <WelcomeHeader />}
      <Banner />
      <TopBrand />
      <BrandsOnSell />
      <FeaturedBrands />
      <TopRatedBrands />
    </div>
  );
};

export default Home;
