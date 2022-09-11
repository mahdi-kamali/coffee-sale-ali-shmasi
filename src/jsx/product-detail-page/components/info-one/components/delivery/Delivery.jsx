import { Icon } from '@iconify/react';
const Delivery = () => {
    return (
        <div className="delivery">
            <div className="delivery-header">
                <h1>ارسال رایگان</h1>
                <p>برای سفارش بالای 300 هزار تومان</p>
            </div>
            <div className="delivery-body">
            <Icon icon="fxemoji:deliverytruck" hFlip={true} />
            </div>
        </div>
    )
}

export default Delivery
