import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import coupon1 from "../assets/coupon1.jpg";
import coupon2 from "../assets/coupon2.jpg";
import coupon3 from "../assets/coupon3.jpg";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mb-20">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
