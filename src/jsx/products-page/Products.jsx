import Accordion from "./components/Accordion"
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setInput } from "../features/filters";
import { useState, useRef } from "react";
import Card from "./components/Card";
import { ReactComponent as FilterSVG } from "../../svgs/9.svg"


const Products = () => {

    const inputs = useSelector(state => state.filters.value)
    const rightBody = useRef()


    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputs);
    }

    const [samples, setSample] = useState([
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900',
            image: require('../../images/discount/1.jpg'),
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
            image: require('../../images/discount/2.jpg'),
            discount: { has: false, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/3.jpg'),
            discount: { has: false, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/4.jpg'),
            discount: { has: false, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900',
            image: require('../../images/discount/1.jpg'),
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
            image: require('../../images/discount/2.jpg'),
            discount: { has: true, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/3.jpg'),
            discount: { has: true, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/4.jpg'),
            discount: { has: true, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900',
            image: require('../../images/discount/1.jpg'),
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
            image: require('../../images/discount/2.jpg'),
            discount: { has: false, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/3.jpg'),
            discount: { has: false, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/4.jpg'),
            discount: { has: false, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900',
            image: require('../../images/discount/1.jpg'),
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
            image: require('../../images/discount/2.jpg'),
            discount: { has: true, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/3.jpg'),
            discount: { has: true, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/4.jpg'),
            discount: { has: true, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
    ]);

    function scrollToMe(offset) {
        console.log(rightBody);
    }


    return (
        <div className="products-page">
            <div className="left">
                {
                    samples.map((card, index) => {
                        return (
                            <Card data={card} key={index} />
                        )
                    })
                }
            </div>
            <form className="right" onSubmit={handleSubmit}>
                <div className="right-svg">
                    <FilterSVG />
                </div>
                <h1 className="right-header">
                    <Icon icon="codicon:filter" color="black" />
                    فیلتر ها
                </h1>
                <div className="right-body" ref={rightBody}>
                    {
                        inputs.map((input, index) => {
                            return (
                                <Accordion key={index} input={input} scrollToMe={scrollToMe} />
                            )
                        })
                    }
                </div>
                <div className="right-buttons">
                    <button >
                        فیلتر کردن
                        <Icon icon="ant-design:setting-filled" color="white" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Products
