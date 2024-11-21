import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Brand = () => {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-2xl font-bold text-center mb-4">All Brands</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="space-y-6 mt-11">
        {data.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border rounded-lg border-gray-300 p-6"
          >
            <div className="">
              <img
                src={item.brand_logo}
                alt={item.name}
                className="w-[100px] rounded-lg"
              />
              <p>{item.brand_name}</p>
              <p>Rating: {item.rating} ★</p>
            </div>
            <div className="hidden md:inline-block  w-96">
              <h1 className="text-xl font-bold">{item.brand_name}</h1>
              <p>{item.description}</p>
            </div>
            <div>
              {item.isSaleOn ? (
                <p className="text-red-500 animate-bounce font-medium">
                  🔥 Sale is On!
                </p>
              ) : (
                <p className="text-gray-400">No Sale</p>
              )}
              <Link to={`/brand/${item._id}`}>
                <button
                  disabled={!item.isSaleOn}
                  className={`${
                    item.isSaleOn ? "bg-green-500" : "bg-gray-400"
                  } text-white px-4 py-2 rounded-lg`}
                >
                  View Coupons
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
