import { Icon } from '@iconify/react';
import Mark from '../mark/Mark';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setChangeAddressWindow } from '../../../features/windows';


const DeliveryAddress = () => {

    const dispatcher = useDispatch()

    const step = useSelector(state => state.shoppingCart.value.steps[1].selected)
    const location = useSelector(state => state.shoppingCart.value.location)

    console.log(location);

    function handleChangeClick() {
        dispatcher(setChangeAddressWindow('show'))
    }

    return (
        <section className="delivery-address">
            <div className="left">
                <button onClick={handleChangeClick} ><Icon icon="dashicons:arrow-left-alt2" color="black" />تغییر</button>
            </div>
            <div className="right">
                <h1>آدرس تحویل سفارش</h1>
                <span>{'منطقه هفت،شهرک رازی،خ. ۱۲ متری رجایی, ک. اتحاد'} <Icon icon="akar-icons:location" color="black" /></span>
            </div>

            <Mark step={step} index={2} />
        </section>
    )
}

export default DeliveryAddress
