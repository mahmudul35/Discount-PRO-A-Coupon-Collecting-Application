import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import coupon1 from "../assets/coupon1.jpg";
import coupon2 from "../assets/coupon2.jpg";
import coupon3 from "../assets/coupon3.jpg";
const Banner = () => {
  return (
    <div className="mb-20">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={coupon1} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coupon2} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coupon3} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
