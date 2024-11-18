import React from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
const TopBrand = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Top Brands</h1>
      <Marquee speed={300}>
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={item.brand_logo}
              alt=""
              className="w-[250px] max-h-fit "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrand;
