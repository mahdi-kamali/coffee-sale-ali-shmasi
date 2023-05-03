


import { Icon } from "@iconify/react"


import { Line, Circle } from 'rc-progress';



import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper"

// import required modules
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";





import LottiePlayer from 'lottie-react';
import animationData from '../../../images/prodcut-introduction/dot-animation.json'



const ProductIntroduction = () => {


    SwiperCore.use([Autoplay]);


    const randomIconName = [
        "ic:round-health-and-safety",
        "icon-park-twotone:soybean-milk-maker",
        "ic:round-system-security-update-good",
        "bxs:coffee-bean"
    ]


    const createTestProgress = () => {



        const value = Math.random() * 100
        const randomIconSelectIndex = Math.floor(Math.random() * randomIconName.length);

        return <div className="item">
            <span>
                <Icon
                    className="icon"
                    icon={randomIconName[randomIconSelectIndex]} />
                <small>
                    Propertie
                </small>
            </span>

            <Line
                className="progress-bar"
                percent={value}
                strokeWidth={5}
                trailColor="transparent"
                strokeColor=
                {`hsl(${value}, 100%, 40%)`}

            />

        </div>
    }


    const createLeftTestProgressBar = () => {
        const value = Math.random() * 100
        const randomIconSelectIndex = Math.floor(Math.random() * randomIconName.length);
        return <div className="circle-progress-bar">
            <span>
                <Icon
                    className="icon"
                    icon={randomIconName[randomIconSelectIndex]} />
                <Circle
                    className="progress-bar"
                    percent={value}
                    strokeWidth={5}
                    trailColor="transparent"
                    strokeColor=
                    {`hsl(${value}, 100%, 40%)`}

                />
            </span>
            <small>
                Propertie
            </small>


        </div>
    }



    return (
        <section className="product-introduction">


            <div className="left">
                <div className="info">
                    <div className="image">
                        <img src={require("../../../images/discount/6.png")} alt="" />
                    </div>
                    <div className="name">
                        Costa Coffee
                    </div>
                    <div className="price">
                        $<span>1,500</span>
                    </div>
                    <div className="category">
                        <span>Espresso</span>
                        <span>Fudge</span>
                        <span>Lolles</span>
                    </div>
                    <div className="properties">
                        {createLeftTestProgressBar()}
                        {createLeftTestProgressBar()}
                        {createLeftTestProgressBar()}
                        {createLeftTestProgressBar()}
                    </div>

                </div>
                <div className="info-buttons">
                    <button>
                        View Detail
                        <Icon
                            className="icon"
                            icon="solar:alt-arrow-right-linear" />
                    </button>
                </div>
            </div>
            <div className="right">
                <h1>Boost Your energy with this coffee !</h1>
                <p>
                    <h1>
                        <LottiePlayer
                            className="dot"
                            animationData={animationData} />
                        <span>
                            Description
                        </span>
                    </h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eum aspernatur laborum debitis asperiores vitae ab! Cum soluta possimus dignissimos fugiat corrupti nesciunt praesentium in modi tempore, magni sapiente facere?
                    Ullam veritatis cum, nemo qui quibusdam sint deserunt harum distinctio dolorem voluptas cumque soluta facere quae a, iure magnam ea iusto. Et libero dolorum, distinctio numquam facilis officiis iusto veritatis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid illo repudiandae veritatis! Libero sequi, ratione ut, quas magni, quae ipsam enim et dignissimos amet odit quaerat neque sed doloremque!
                </p>
                <div className="comments">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2.5}
                        freeMode={false}
                        loop={false}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={15}
                        coverflowEffect={{
                            rotate: -0,
                            stretch: 0,
                            depth: 500,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper-comments"
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        <SwiperSlide className="slide-card ">
                            <div className="card-header">
                                <div className="card-avatar">
                                    <img
                                        src={require("../../../images/avatar/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg")}
                                    />
                                </div>
                                <div className="card-user">
                                    <div
                                        className="card-name">

                                        Mahdi kamali
                                    </div>
                                    <div className="card-date">
                                        <Icon
                                            className="icon"
                                            icon="clarity:date-outline-badged" />
                                        2000/2/1
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At accusamus harum, architecto quibusdam aliquid dignissimos voluptatibus quasi distinctio fugiat fugit officiis, laborum
                            </div>
                            <div className="card-buttons">

                                <div className="card-share">
                                    <Icon icon="material-symbols:share-outline" />
                                </div>

                                <div className="card-rating">
                                    <div className="count">5</div>
                                    <div className="stars">
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                    </div>
                                </div>

                                <div className="card-like">
                                    <Icon icon="uiw:like-o" />
                                </div>

                            </div>
                            <div className="card-progress">
                                {createTestProgress()}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="slide-card ">
                            <div className="card-header">
                                <div className="card-avatar">
                                    <img
                                        src={require("../../../images/avatar/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg")}
                                    />
                                </div>
                                <div className="card-user">
                                    <div
                                        className="card-name">

                                        Mahdi kamali
                                    </div>
                                    <div className="card-date">
                                        <Icon
                                            className="icon"
                                            icon="clarity:date-outline-badged" />
                                        2000/2/1
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At accusamus harum, architecto quibusdam aliquid dignissimos voluptatibus quasi distinctio fugiat fugit officiis, laborum
                            </div>
                            <div className="card-buttons">

                                <div className="card-share">
                                    <Icon icon="material-symbols:share-outline" />
                                </div>

                                <div className="card-rating">
                                    <div className="count">5</div>
                                    <div className="stars">
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                    </div>
                                </div>

                                <div className="card-like">
                                    <Icon icon="uiw:like-o" />
                                </div>

                            </div>
                            <div className="card-progress">
                                {createTestProgress()}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="slide-card ">
                            <div className="card-header">
                                <div className="card-avatar">
                                    <img
                                        src={require("../../../images/avatar/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg")}
                                    />
                                </div>
                                <div className="card-user">
                                    <div
                                        className="card-name">

                                        Mahdi kamali
                                    </div>
                                    <div className="card-date">
                                        <Icon
                                            className="icon"
                                            icon="clarity:date-outline-badged" />
                                        2000/2/1
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At accusamus harum, architecto quibusdam aliquid dignissimos voluptatibus quasi distinctio fugiat fugit officiis, laborum
                            </div>
                            <div className="card-buttons">

                                <div className="card-share">
                                    <Icon icon="material-symbols:share-outline" />
                                </div>

                                <div className="card-rating">
                                    <div className="count">5</div>
                                    <div className="stars">
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                    </div>
                                </div>

                                <div className="card-like">
                                    <Icon icon="uiw:like-o" />
                                </div>

                            </div>
                            <div className="card-progress">
                                {createTestProgress()}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="slide-card ">
                            <div className="card-header">
                                <div className="card-avatar">
                                    <img
                                        src={require("../../../images/avatar/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg")}
                                    />
                                </div>
                                <div className="card-user">
                                    <div
                                        className="card-name">

                                        Mahdi kamali
                                    </div>
                                    <div className="card-date">
                                        <Icon
                                            className="icon"
                                            icon="clarity:date-outline-badged" />
                                        2000/2/1
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At accusamus harum, architecto quibusdam aliquid dignissimos voluptatibus quasi distinctio fugiat fugit officiis, laborum
                            </div>
                            <div className="card-buttons">

                                <div className="card-share">
                                    <Icon icon="material-symbols:share-outline" />
                                </div>

                                <div className="card-rating">
                                    <div className="count">5</div>
                                    <div className="stars">
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                        <Icon icon="ic:round-star" />
                                    </div>
                                </div>

                                <div className="card-like">
                                    <Icon icon="uiw:like-o" />
                                </div>

                            </div>
                            <div className="card-progress">
                                {createTestProgress()}
                            </div>
                        </SwiperSlide>

                        <div className="custom-navigation">
                            <div className="icon swiper-button-prev">
                                <Icon
                                    icon="ic:twotone-navigate-next"
                                    rotate={2} />
                            </div>
                            <div className="icon swiper-button-next">
                                <Icon icon="ic:twotone-navigate-next" />
                            </div>
                        </div>

                    </Swiper>
                </div>

            </div>

            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section >
    )
}

export default ProductIntroduction
