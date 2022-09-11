
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs, EffectFade, Pagination } from "swiper";




const Gallery = (props) => {

  const [swiperParent, setParent] = useState(null);
  const [swiperChild, setChild] = useState(null);
  const [currentVideo, setCurretVideo] = useState('')


  return (
    <div className="gallery">
      <Swiper
        onSwiper={setParent}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: swiperChild }}
        modules={[FreeMode, Navigation, Thumbs,]}
        className="my-swiper-1"
      >
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/1.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/2.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/3.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/4.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/5.jpg')} alt="" />
        </SwiperSlide>


      </Swiper>

      <Swiper
        onSwiper={setChild}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Pagination, Navigation, Thumbs]}
        className="my-swiper-2"
      >
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/1.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/2.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/3.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/4.jpg')} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../../../../images/discount/5.jpg')} alt="" />
        </SwiperSlide>
      </Swiper>


    </div>
  )
}

export default Gallery
