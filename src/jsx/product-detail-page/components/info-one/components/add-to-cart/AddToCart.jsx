import { Icon } from '@iconify/react';

const AddToCart = ({form}) => {
    return (
        <div className="add-to-cart">
            <button className="active">
                علاقه 
                <Icon icon="ant-design:heart-filled" />
            </button>
            <button form={form}>
                خرید
                <Icon icon="bi:bag-check-fill" />
            </button>
        </div>
    )
}

export default AddToCart
