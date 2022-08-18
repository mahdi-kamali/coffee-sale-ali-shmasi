import { useState } from "react"
import Item from "./components/Item"

const Cart = () => {


    const [samples, setSample] = useState([
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900', image: require('../../../../images/discount/1.jpg'),
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
            image: require('../../../../images/discount/2.jpg'),
            discount: { has: true, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../../images/discount/3.jpg'),
            discount: { has: true, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        }
    ]);


    return (
        <div className="cart">
            <div className="cart-header">
                <h1>سبد خرید شما</h1>
                <small>2 کالا</small>
            </div>
            <div className="cart-body">
                {
                    samples.map((item, index) => {
                        return (
                            <Item data={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
