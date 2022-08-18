// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade , Navigation , Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';



const Slider = () => {


  


    return (
        <Swiper
            className='slider'
            spaceBetween={0}
            slidesPerView={1}
            effect='fade'
            loop={true}
            loopFillGroupWithBlank={true}
            navigation = {true}
            pagination={{clickable : true}}
            modules={[EffectFade , Navigation , Pagination]}
        >
            <SwiperSlide className='slide'><img src={require('../../../../images/main-slider/2.jpg')} alt="" /></SwiperSlide>
            <SwiperSlide className='slide'><img src={require('../../../../images/main-slider/3.jpg')} alt="" /></SwiperSlide>
            <SwiperSlide className='slide'><img src={require('../../../../images/main-slider/4.jpg')} alt="" /></SwiperSlide>
            <SwiperSlide className='slide'><img src={require('../../../../images/main-slider/1.jpg')} alt="" /></SwiperSlide>
        </Swiper>
    )
}

export default Slider
