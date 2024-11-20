import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLoaderData, useParams } from "react-router-dom";

const CouponPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const coupon = data.find((item) => item._id === id);
  console.log("coupon", coupon);

  const {
    brand_logo,
    shop_link,
    brand_name,
    coupons,
    coupon_description,
    coupon_expiry,
    coupon_discount,
  } = coupon;

  // To show feedback after copying
  const [copied, setCopied] = React.useState(null);

  return (
    <div className="flex flex-col justify-center items-center mt-9 mb-32">
      <div>
        <img src={brand_logo} alt="" />
        <h1>{brand_name}</h1>
      </div>
      <div>
        {coupons.map((coupon) => (
          <div key={coupon._id} className="card bordered w-96">
            <figure>
              <img src={coupon.coupon_logo} alt={coupon.coupon_name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{coupon.coupon_code}</h2>
              <p>{coupon.description}</p>
              <p>{coupon.expiry_date}</p>
              <p>{coupon.condition}</p>
              {/* Copy to Clipboard Button */}
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => setCopied(coupon._id)} // Track copied coupon
              >
                <button className="btn">Copy to clipboard</button>
              </CopyToClipboard>
              {copied === coupon._id && (
                <p className="text-green-500 mt-2">Coupon code copied!</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <a href={shop_link} target="_blank" rel="noopener noreferrer">
        <button className="btn">Shop Now</button>
      </a>
    </div>
  );
};

export default CouponPage;
