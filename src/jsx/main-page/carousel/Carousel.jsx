

import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";


import SlideData from './components/SlideData'




const Carousel = ({ count }) => {


    const [samples, setSample] = useState([
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900',
            image: require('../../../images/discount/1.jpg'),
            region: 'all',
            discount: { has: false, value: 10, price: '60,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#2',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/2.jpg'),
            discount: { has: false, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/3.jpg'),
            discount: { has: false, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/4.jpg'),
            discount: { has: false, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900',
            image: require('../../../images/discount/1.jpg'),
            region: 'all',
            discount: { has: true, value: 10, price: '60,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#2',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/2.jpg'),
            discount: { has: true, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/3.jpg'),
            discount: { has: true, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/4.jpg'),
            discount: { has: true, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
    ]);

    const [size, setSize] = useState(5);

    const [swiper, setSwiper] = useState()



    return (
        <Swiper
            onSwiper={setSwiper}
            className='swiper'
            slidesPerView={size}
            spaceBetween={16}
            onResize={() => {
                if (swiper) {
                    setSize(swiper.width / 280)
                } else {
                    window.innerWidth > 1500 ?
                        setSize(count ? count : 5.5) :
                        setSize(swiper.width / 300)
                }

            }}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
        >

            {size ? samples.map((item, index) => {
                return (
                    <SwiperSlide className="slide" key={index}>
                        <SlideData data={item} />
                    </SwiperSlide>
                )
            }) : ' - '}

        </Swiper>
    )
}

export default Carousel
