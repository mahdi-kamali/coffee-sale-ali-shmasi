
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



const VideoArticles = (props) => {


  const [swiperParent, setParent] = useState(null);
  const [swiperChild, setChild] = useState(null);
  const [currentVideo, setCurretVideo] = useState('')

  return (
    <div className="video-articles">


      <Swiper
        onSwiper={setParent}
        loop={true}
        spaceBetween={10}
        navigation={true}
        effect={'fade'}
        fadeEffect={true}
        thumbs={{ swiper: swiperChild }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        className="my-swiper-1"
      >
        {props.data.map((video, index) => {
          return (
            <SwiperSlide key={index}>
              <video onPlay={() => { setCurretVideo(index) }} onPause={() => { setCurretVideo('') }} controls preload="none" poster={video.poster}  >
                <source src={video.videoLink} />
              </video>
            </SwiperSlide>
          )
        })}

      </Swiper>

      <Swiper
        onSwiper={setChild}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Pagination, Navigation, Thumbs]}
        className="my-swiper-2"
      >
        {props.data.map((video, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={video.poster} alt="" />
            </SwiperSlide>
          )
        })}
      </Swiper>


    </div>
  )
}

export default VideoArticles
