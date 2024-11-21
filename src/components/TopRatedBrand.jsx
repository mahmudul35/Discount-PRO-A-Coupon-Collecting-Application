import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const TopRatedBrands = () => {
  const data = useLoaderData();
  const topRatedBrands = data.sort((a, b) => b.rating - a.rating).slice(0, 3);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2
        className="text-3xl font-bold text-center mb-6 text-gray-800 "
        data-aos="fade-down"
      >
        Top Rated Brands
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topRatedBrands.map((brand, index) => (
          <div
            key={brand._id}
            className="flex flex-col items-center bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="h-32 w-32 rounded-full object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {brand.brand_name}
            </h3>
            <p className="text-center text-gray-600">
              Rating: {brand.rating} ★
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedBrands;
