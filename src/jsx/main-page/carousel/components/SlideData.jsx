import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { setProductDetailWindow } from '../../../features/windows';


const SlideData = (props) => {
    const data = props.data

    const dispatcher = useDispatch()
    function handleCardClick() {
        dispatcher(setProductDetailWindow('show'))
    }


    return (
        <div className="card" onClick={handleCardClick}>
            <div className="card-header">
                <img src={data.image} alt="" />
            </div>
            <div className="card-body">
                <div className="name">
                    {data.name}
                </div>
                <div className="region">
                    {data.region === 'all' ? 'ارسال به تمامی نقاط کشور' : 'فقط نواحی نزدیک'}<Icon icon="carbon:delivery-truck" color="black" />
                </div>
                <div className="price">
                    <span>
                        {data.discount.price}
                    </span>
                </div>
            </div>
            <div className="card-buttons">
                <button className={data.liked ? 'liked' : ''}>
                    {data.liked ?
                        <Icon icon="bi:heart-fill" color="#f24e1e" /> :
                        <Icon icon="bi:heart" color="black" />
                    }
                    علاقه مندی</button>
                <button>
                    <Icon icon="ep:shopping-cart" color="black" />
                    خرید</button>
            </div>
        </div>
    )
}

export default SlideData
