import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const FeaturedBrands = () => {
  const brands = useLoaderData();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto p-6">
      <h2
        className="text-3xl font-bold text-center mb-6 text-gray-800"
        data-aos="fade-down"
      >
        Featured Brands
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.slice(0, 6).map((brand) => (
          <div
            key={brand._id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />

            <h3 className="text-lg font-semibold text-center text-gray-800">
              {brand.brand_name}
            </h3>
            <p className="text-sm text-center text-gray-600">
              Category: {brand.category}
            </p>

            <div className="text-center my-4">
              <a
                href={brand.shop_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Visit Shop
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
