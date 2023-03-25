import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function TopSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img src="/images/test.jfif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/test2.jfif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/test3.jfif" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
