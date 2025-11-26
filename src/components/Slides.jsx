import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import app1 from '../assets/slide1.avif'
import app2 from '../assets/slide2.webp'
import app3 from '../assets/slide3.webp'


const Slides = () => {
    return (
        <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={app1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={app2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={app3} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Slides;