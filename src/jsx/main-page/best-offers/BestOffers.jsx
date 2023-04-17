import { LottiePlayer } from "lottie-react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import Lottie from 'lottie-react'
import cardsBarAnimation from "../../../images/best-offers/cards-bar.json"
import firstSlideAnimation from "../../../images/best-offers/best-offers-anima.json"
import { Icon } from "@iconify/react";

const BestOffers = () => {
    return (
        <section className="best-offers">

            <div className="top">
                <div className="column top-mid">
                    <Lottie
                        className="lottie"
                        loop={true}
                        animationData={firstSlideAnimation}
                        play
                    />
                </div>
                <div className="column top-left">
                    <div className="title">
                        <h1>Best Offers</h1>
                        <button>
                            View All
                            <Icon
                                className="icon"
                                icon="material-symbols:keyboard-arrow-right" />
                        </button>
                    </div>
                </div>
                <div className="column top-right">
                    <div className="info">
                        <h1>10 Products</h1>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={15}
                    slidesPerView={4.5}
                    slidesPerGroup={1}
                    loop={false}
                    freeMode={true}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="item">
                        <Lottie
                            className="bar"
                            loop
                            animationData={cardsBarAnimation}
                            play

                        />
                        <div div className="item-header">
                            <img src={require("../../../images/best-offers/1.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-price">
                                $100
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>
                            <div className="item-rating">
                                5
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>Buy</button>
                            <button>Save</button>
                            <button>Share</button>
                            <button>Comments</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <Lottie
                            className="bar"
                            loop
                            animationData={cardsBarAnimation}
                            play
                            style={{ width: 150, height: 150 }}
                        />
                        <div div className="item-header">
                            <img src={require("../../../images/best-offers/2.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-price">
                                $100
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>
                            <div className="item-rating">
                                5
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>Buy</button>
                            <button>Save</button>
                            <button>Share</button>
                            <button>Comments</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <Lottie
                            className="bar"
                            loop
                            animationData={cardsBarAnimation}
                            play
                            style={{ width: 150, height: 150 }}
                        />
                        <div div className="item-header">
                            <img src={require("../../../images/best-offers/3.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-price">
                                $100
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>
                            <div className="item-rating">
                                5
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>Buy</button>
                            <button>Save</button>
                            <button>Share</button>
                            <button>Comments</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <Lottie
                            className="bar"
                            loop
                            animationData={cardsBarAnimation}
                            play
                            style={{ width: 150, height: 150 }}
                        />
                        <div div className="item-header">
                            <img src={require("../../../images/best-offers/4.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-price">
                                $100
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>
                            <div className="item-rating">
                                5
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>Buy</button>
                            <button>Save</button>
                            <button>Share</button>
                            <button>Comments</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <Lottie
                            className="bar"
                            loop
                            animationData={cardsBarAnimation}
                            play
                            style={{ width: 150, height: 150 }}
                        />
                        <div div className="item-header">
                            <img src={require("../../../images/best-offers/1.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-price">
                                $100
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>
                            <div className="item-rating">
                                5
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>Buy</button>
                            <button>Save</button>
                            <button>Share</button>
                            <button>Comments</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <Lottie
                            className="bar"
                            loop
                            animationData={cardsBarAnimation}
                            play
                            style={{ width: 150, height: 150 }}
                        />
                        <div div className="item-header">
                            <img src={require("../../../images/best-offers/1.jpg")} />
                        </div>
                        <div className="item-body">
                            <div className="item-name">
                                Costa Coffee
                            </div>
                            <div className="item-price">
                                $100
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae voluptate dolorem laudantium illo non aliquid quibusdam? Magni voluptatum hic sunt. Consequatur, porro! Magni consequatur quasi similique eligendi nisi laborum.
                            </div>
                            <div className="item-rating">
                                5
                            </div>
                        </div>
                        <div className="item-buttons">
                            <button>Buy</button>
                            <button>Save</button>
                            <button>Share</button>
                            <button>Comments</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default BestOffers
