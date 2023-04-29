
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import Lottie from 'lottie-react'
import newProductsGif
 from "../../../images/new-products/gif.json"
import { Icon } from "@iconify/react";
import { useCallback, useRef } from "react";

const NewProducts = () => {


    const sliderRef = useRef(null);


    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <section className="new-products">

            <div className="top">
                <div className="column top-left">
                    <Lottie
                        className="lottie"
                        loop={true}
                        animationData={newProductsGif}
                        play
                    />
                    <h1>new </h1>
                </div>
                <div className="column top-mid">
                    <div className="title">
                        <h1>New Products</h1>
                        <small>5 Products</small>
                    </div>
                </div>
                <div className="column top-right">
                    <div className="info">
                        <button>
                            View All
                            <Icon
                                className="icon"
                                icon="material-symbols:keyboard-arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Swiper
                    ref={sliderRef}
                    modules={
                        [Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={4.25}
                    slidesPerGroup={1}
                    loop={false}
                    freeMode={true}
                    navigation
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true
                    }}
                >
                    <SwiperSlide className="item">
                        <div div className="item-header">
                            <img
                                src={
                                    require(
                                        "../../../images/best-offers/2.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-category">
                                <Icon
                                    className="icon"
                                    icon="bxs:category" />
                                <div className="title">
                                    Espresso
                                </div>
                            </div>
                            <div className="item-price">
                                <Icon
                                    className="icon"
                                    icon="solar:dollar-bold" />
                                <div className="price">
                                    1000
                                </div>
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>

                        </div>
                        <button className="item-buy">
                            <Icon icon="ic:round-add-shopping-cart" />
                        </button>
                        <div className="item-rating">
                            <div className="count">
                                4
                            </div>
                            <div className="stars">
                                <Icon icon="ic:round-star" />
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>
                                <Icon icon="material-symbols:share" />
                            </button>
                            <button>
                                <Icon icon="mdi:cards-heart-outline" />
                            </button>
                            <button>
                                <Icon icon="dashicons:admin-comments" />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div div className="item-header">
                            <img
                                src={
                                    require(
                                        "../../../images/best-offers/1.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-category">
                                <Icon
                                    className="icon"
                                    icon="bxs:category" />
                                <div className="title">
                                    Espresso
                                </div>
                            </div>
                            <div className="item-price">
                                <Icon
                                    className="icon"
                                    icon="solar:dollar-bold" />
                                <div className="price">
                                    1000
                                </div>
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>

                        </div>
                        <button className="item-buy">
                            <Icon icon="ic:round-add-shopping-cart" />
                        </button>
                        <div className="item-rating">
                            <div className="count">
                                4
                            </div>
                            <div className="stars">

                                <Icon icon="ic:round-star" />
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>
                                <Icon icon="material-symbols:share" />
                            </button>
                            <button>
                                <Icon icon="mdi:cards-heart-outline" />
                            </button>
                            <button>
                                <Icon icon="dashicons:admin-comments" />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div div className="item-header">
                            <img
                                src={
                                    require(
                                        "../../../images/best-offers/3.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-category">
                                <Icon
                                    className="icon"
                                    icon="bxs:category" />
                                <div className="title">
                                    Espresso
                                </div>
                            </div>
                            <div className="item-price">
                                <Icon
                                    className="icon"
                                    icon="solar:dollar-bold" />
                                <div className="price">
                                    1000
                                </div>
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>

                        </div>
                        <button className="item-buy">
                            <Icon icon="ic:round-add-shopping-cart" />
                        </button>
                        <div className="item-rating">
                            <div className="count">
                                4
                            </div>
                            <div className="stars">

                                <Icon icon="ic:round-star" />
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>
                                <Icon icon="material-symbols:share" />
                            </button>
                            <button>
                                <Icon icon="mdi:cards-heart-outline" />
                            </button>
                            <button>
                                <Icon icon="dashicons:admin-comments" />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div div className="item-header">
                            <img
                                src={
                                    require(
                                        "../../../images/best-offers/4.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-category">
                                <Icon
                                    className="icon"
                                    icon="bxs:category" />
                                <div className="title">
                                    Espresso
                                </div>
                            </div>
                            <div className="item-price">
                                <Icon
                                    className="icon"
                                    icon="solar:dollar-bold" />
                                <div className="price">
                                    1000
                                </div>
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>

                        </div>
                        <button className="item-buy">
                            <Icon icon="ic:round-add-shopping-cart" />
                        </button>
                        <div className="item-rating">
                            <div className="count">
                                4
                            </div>
                            <div className="stars">

                                <Icon icon="ic:round-star" />
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>
                                <Icon icon="material-symbols:share" />
                            </button>
                            <button>
                                <Icon icon="mdi:cards-heart-outline" />
                            </button>
                            <button>
                                <Icon icon="dashicons:admin-comments" />
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div div className="item-header">
                            <img
                                src={
                                    require(
                                        "../../../images/best-offers/2.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-category">
                                <Icon
                                    className="icon"
                                    icon="bxs:category" />
                                <div className="title">
                                    Espresso
                                </div>
                            </div>
                            <div className="item-price">
                                <Icon
                                    className="icon"
                                    icon="solar:dollar-bold" />
                                <div className="price">
                                    1000
                                </div>
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>

                        </div>
                        <button className="item-buy">
                            <Icon icon="ic:round-add-shopping-cart" />
                        </button>
                        <div className="item-rating">
                            <div className="count">
                                4
                            </div>
                            <div className="stars">

                                <Icon icon="ic:round-star" />
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>
                                <Icon icon="material-symbols:share" />
                            </button>
                            <button>
                                <Icon icon="mdi:cards-heart-outline" />
                            </button>
                            <button>
                                <Icon icon="dashicons:admin-comments" />
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="navigation">

                    <Icon icon="ic:outline-navigate-next"
                        rotate={2}
                        className="navigation-icon"
                        onClick={handlePrev}
                    />


                    <div className="custom-pagination">

                    </div>

                    <Icon icon="ic:outline-navigate-next"
                        className="navigation-icon"
                        onClick={handleNext} />


                </div>

            </div>
        </section>
    )
}

export default NewProducts
