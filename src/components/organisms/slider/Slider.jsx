import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import yogaImg from '../../../assets/images/yoga.jpg';
import shitImg from '../../../assets/images/shit.jpg';

function Slider() {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        speed={800}
      >
        <SwiperSlide>
          <img className="w-full h-[70vh] object-cover bg-cover" src={yogaImg} alt="Slider" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full h-[70vh] object-cover bg-cover" src={shitImg} alt="Slider" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        className="mySwiper overflow-hidden my-8"
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        speed={6000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        style={{
          overflow: 'hidden',
        }}
      >
        <SwiperSlide>
          <div className="p-10">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">6</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
