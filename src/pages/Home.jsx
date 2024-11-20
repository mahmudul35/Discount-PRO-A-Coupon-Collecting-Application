import React, { useContext } from "react";
import Banner from "../components/Banner";
import BrandsOnSell from "../components/BrandsOnSell ";
import TopBrand from "../components/TopBrand";
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
    </div>
  );
};

export default Home;
