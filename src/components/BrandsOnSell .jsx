import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
const BrandsOnSell = () => {
  const brands = useLoaderData();
  useEffect(() => {
    AOS.init();
  }, []);

  const brandsOnSale = brands.filter((brand) => brand.isSaleOn);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Brands on Sale
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        {brandsOnSale.length > 0
          ? brandsOnSale.map((brand) => (
              <div
                key={brand._id}
                className="p-6 border rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
                data-aos="zoom-in"
              >
                <img
                  src={brand.brand_logo}
                  alt={`${brand.brand_name} Logo`}
                  className=" w-[200px] mx-auto  object-cover mb-4"
                />

                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {brand.brand_name}
                </h3>
                <p className="text-center text-gray-600">
                  Category: {brand.category}
                </p>
                <p className="text-center text-gray-600">
                  Total Coupons: {brand.coupons.length}
                </p>

                <div className="mt-4 text-center">
                  <Link to={`/brand/${brand._id}`}>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                      View Coupons
                    </button>
                  </Link>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default BrandsOnSell;
