import { useState } from 'react';
import { useSelector } from 'react-redux';
import Buttons from './components/buttons/Buttons';
import Comments from './components/comments/Comments';
import InfoOne from './components/info-one/InfoOne';
import Supports from './components/supports/Supports';
import SimilarProducts from './components/simialar-products/SimilarProducts';


const ProductDetail = (productID) => {

    const smaple = {
        images: [
            require('../../images/main-category/0.png'),
            require('../../images/main-category/1.png'),
            require('../../images/main-category/2.png'),
            require('../../images/main-category/3.png'),
        ],
        header: {
            name: 'قهوه ترکیبی عربیکا ',
            address: ['قهوه', 'اسپرسو', 'بن مانلو'],
            rating: 3.8,
            available: true,
            shipping: 'local'
        },
        body: {
            visuals: [
                {
                    title: 'میزان کافئین',
                    summary: 'زیاد',
                    svg: 'gg:coffee',
                    percent: 80
                },
                {
                    title: 'عطر',
                    summary: 'خیلی خوب',
                    svg: 'bi:wind',
                    percent: 70
                },
                {
                    title: 'طعم ',
                    summary: 'خوش طعم',
                    svg: 'carbon:taste',
                    percent: 85
                },
                {
                    title: 'اسیدیته ',
                    summary: 'متوسط',
                    svg: 'entypo:water',
                    percent: 50
                },
                {
                    title: 'میزان آنتی اکسیدان ',
                    summary: 'بالا',
                    svg: 'bx:plus-medical',
                    percent: 75
                },

            ],
            properties: [
                ' جوان سازی پوست',
                'زیبایی و تقویت ناخن ها',
                'کاهش خطر ابتلا به آلزایمر',
                'کاهش خطر ابتلا به بیماری های کبد',
                'بهبود عملکرد فیزیکی',
                'آرامبخش'
            ],

            form: {
                address: 'http://example.com',
                defaults: [
                    {
                        title: 'برند',
                        value: 'بن مانو'
                    }
                ],
                inputs: [
                    {
                        type: 'select',
                        name: 'beans-type',
                        title: 'نوع دانه',
                        options: [
                            'نوع دانه یک',
                            'نوع دانه دو',
                            'نوع دانه سه',
                            'نوع دانه چهار',
                            'نوع دانه پنج',
                            'نوع دانه شش ',
                        ]
                    },
                    {
                        type: 'select',
                        name: 'taste',
                        title: 'طعم',

                        options: [
                            'شیرین',
                            'تلخ',
                            'آبکی',
                        ]
                    },
                ]

            },
            description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",

        },
        supportings: ''
    }

    const state = useSelector(state => state.windows.value.productDetail.state)





    if (state === 'show') {
        return (
            <div className="product-detail-page">
                <div className="container"  >
                    <Buttons />
                    <InfoOne data={smaple} />
                    <Supports />
                    <SimilarProducts />
                    <Comments />
                    <div className="product-similar"></div>

                </div>
            </div>
        )
    } else {
        return ('')
    }

}

export default ProductDetail
