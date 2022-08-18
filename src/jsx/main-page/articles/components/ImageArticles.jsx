import React, { useRef, useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


const imageArticles = (props) => {

  return (
    <div className="image-articles">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        lazy={true}
        fadeEffect={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {props.data.map((article, index) => {
          return (
            <SwiperSlide className="slide" key={index}>
              <div className="header">
                <div className="info">
                  <div className="image">
                    <img src={article.author.image} alt="" />
                  </div>
                  <div className="person">
                    <h1>{article.author.name + ' ' + article.author.family}</h1>
                    <h2>{article.date}</h2>
                  </div>
                </div>
                <div className="subject">
                  {article.header}
                </div>
                <div className="description">
                  {article.description}
                </div>
                <div className="link">
                  <a href={article.link}> بریم بخونیم</a>
                </div>
              </div>
              <div className="body">
                <img src={article.image} />
              </div>
            </SwiperSlide>
          )
        })}
        
      </Swiper>
    </div>

  )
}

export default imageArticles
