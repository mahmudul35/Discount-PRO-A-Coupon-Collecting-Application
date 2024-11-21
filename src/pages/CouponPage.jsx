import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const CouponPage = () => {
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();
  const coupon = data.find((item) => item._id === id);

  const {
    brand_logo,
    shop_link,
    brand_name,
    coupons,
    coupon_description,
    coupon_expiry,
    coupon_discount,
    rating,
  } = coupon;

  const [copied, setCopied] = React.useState(null);

  return (
    <div className="flex flex-col justify-center items-center  mt-9 mb-32">
      <div>
        <img src={brand_logo} alt="" className="w-96 mx-auto" />
        <h1 className="text-center font-bold text-2xl my-3">{brand_name}</h1>
        <p className="text-center">Rating: {rating}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {coupons.map((coupon) => (
          <div key={coupon.coupon_id} className="card bordered w-96">
            <figure>
              <img src={coupon.coupon_logo} alt={coupon.coupon_name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{coupon.coupon_code}</h2>
              <p>{coupon.description}</p>
              <p>Expire: {coupon.expiry_date}</p>
              <p>{coupon.condition}</p>
              {/* Copy to Clipboard Button */}
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => setCopied(coupon.coupon_id)} // Track copied coupon
              >
                <button className="btn bg-red-400 text-white">Copy </button>
              </CopyToClipboard>
              <a href={shop_link} target="_blank" rel="noopener noreferrer">
                <button className="btn w-full bg-green-500 text-white">
                  Shop Now
                </button>
              </a>
              {copied === coupon.coupon_id && (
                <p className="text-green-500 mt-2">Coupon code copied!</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
