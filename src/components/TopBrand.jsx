import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
const TopBrand = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Top Brands
      </h1>
      <Marquee speed={300}>
        {data.map((item) => (
          <div key={item.id}>
            <Link to={"/brand"}>
              <img
                src={item.brand_logo}
                alt={item.name}
                className="w-[250px]   rounded-lg mr-10"
              />
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrand;
