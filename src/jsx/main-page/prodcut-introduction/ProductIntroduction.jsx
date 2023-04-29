


import { Icon } from "@iconify/react"


import { Line } from 'rc-progress';



import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

const ProductIntroduction = () => {


    const createTestProgress = () => {


        const value = Math.random() * 100

        return <div className="item">
            <span>
                <Icon
                    className="icon"
                    icon="line-md:buy-me-a-coffee-filled" />
            
                Propertie
            </span>
            <Line
                percent={value}
                strokeWidth={3}
                trailColor="transparent"
                strokeColor=
                {`hsl(${value}, 100%, 40%)`}

            />
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
                        {createTestProgress()}
                        {createTestProgress()}
                        {createTestProgress()}
                        {createTestProgress()}
                    </div>
                    <div className="buttons">
                        <button>
                            View Detail
                            <Icon
                                className="icon"
                                icon="solar:alt-arrow-right-linear" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="right">
                <h1>Boost Your energy with this coffee !</h1>
                <div className="rating">
                    <span>5</span>
                    <div className="stars">
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eum aspernatur laborum debitis asperiores vitae ab! Cum soluta possimus dignissimos fugiat corrupti nesciunt praesentium in modi tempore, magni sapiente facere?
                    Ullam veritatis cum, nemo qui quibusdam sint deserunt harum distinctio dolorem voluptas cumque soluta facere quae a, iure magnam ea iusto. Et libero dolorum, distinctio numquam facilis officiis iusto veritatis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid illo repudiandae veritatis! Libero sequi, ratione ut, quas magni, quae ipsam enim et dignissimos amet odit quaerat neque sed doloremque!
                </p>
                <div className="price">
                    $
                    <span>1,000</span>
                </div>
                <div className="comments">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2.5}
                        freeMode={false}
                        loop={false}
                        spaceBetween={15}
                        coverflowEffect={{
                            rotate: -0,
                            stretch: 0,
                            depth: 500,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper-comments"
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
        </section>
    )
}

export default ProductIntroduction
