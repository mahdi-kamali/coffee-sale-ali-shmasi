import React from 'react'
import topSaleGif from "../../../images/top-sales/gif/top-gif.json"
import bar from "../../../images/top-sales/gif/bar.json"
import Lottie from 'lottie-react'
import { Swiper, SwiperSlide } from 'swiper/react';


const TopSales = () => {
    return (
        <section className='top-sales'>
            <div className="left">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
            <div className="right">
                <Lottie
                    className="bar"
                    loop={true}
                    animationData={bar} />
                <Lottie
                    className="lottie"
                    loop={false}
                    animationData={topSaleGif} />

                <div className="title">
                    <h1>Top Sales</h1>
                    <small>People Love it</small>
                </div>
            </div>
        </section>
    )
}

export default TopSales
