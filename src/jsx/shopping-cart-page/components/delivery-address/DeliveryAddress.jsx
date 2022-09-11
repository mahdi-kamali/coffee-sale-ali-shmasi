import { Icon } from '@iconify/react';
import Mark from '../mark/Mark';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setChangeAddressWindow } from '../../../features/windows';


const DeliveryAddress = () => {

    const dispatcher = useDispatch()

    const location = useSelector(state => state.shoppingCart.value.location)
    const user = useSelector(state => state.user.value)


    function handleChangeClick() {
        dispatcher(setChangeAddressWindow('show'))
    }

    return (
        <section className={`delivery-address ${user == undefined ? 'off-section' : ''}`}>
            <div className="left">
                <button onClick={handleChangeClick} >
                    <Icon icon="dashicons:arrow-left-alt2" color="black" />
                    تغییر
                </button>
            </div>
            <div className="right">
                <h1>
                    آدرس تحویل سفارش
                    <Icon icon="akar-icons:location" color="black" />
                </h1>
                <span>
                    {location ? location.mainAddress : 'آدرس اصلی مشخص نشده است'}
                    <Icon icon="humbleicons:arrow-side-join-main" />
                </span>

                <small>
                    {location ? location.sideAddress : 'آدرس فرعی مشخص نشده است'}
                    <Icon icon="humbleicons:arrow-main-split-side" />
                </small>
            </div>
            <Mark index={2} />
        </section>
    )
}

export default DeliveryAddress
