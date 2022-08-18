import { useState } from "react"
import { useSelector } from "react-redux"
import Cart from "./components/cart/Cart"
import DeliveryAddress from "./components/delivery-address/DeliveryAddress"
import DeliveryDate from "./components/delivery-date/DeliveryDate"
import DeliveryUser from "./components/delivery-user/DeliveryUser"
import Delivery from "./components/delivery/Delivery"
import Fee from "./components/fee/Fee"
import Intro from "./components/Intro/Intro"

const ShoppingCart = () => {

    const user = useSelector(state => state.user.value)
    const location = useSelector(state => state.shoppingCart.value.location)


    return (
        <div className="shopping-cart-page">
            <div className="shopping-cart-left">
                <Fee />
                <Delivery />
            </div>
            <div className="shopping-cart-right">
                <Intro />
                <DeliveryUser />
                {!user ? <DeliveryAddress /> : ''}
                {user ? <DeliveryDate /> : ''}
                <Cart />
            </div>
        </div>
    )
}

export default ShoppingCart
