import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUserWindow } from '../../../features/windows';
import Mark from '../mark/Mark';

const DeliveryUser = () => {


    const dispatcher = useDispatch()

    function openUserWindows(typeOf) {
        dispatcher(setUserWindow({ type: typeOf }))
    }

    const step = useSelector(state => state.shoppingCart.value.steps[0].selected)


    return (
        <section className="delivery-user">
            <Mark step={step} index={1} />
            <div className="delivery-user-header">
                برای ادامه خرید شما باید وارد جساب کاربریتان شوید
            </div>
            <div className="delivery-user-body">
                <button onClick={() => { openUserWindows('sign-in') }} className="sign-in"><Icon icon="ri:login-box-line" color="black" />ورود</button>
                <button onClick={() => { openUserWindows('sign-up') }} className="sign-up"><Icon icon="heroicons-solid:user-add" color="black" />ثبت نام</button>
            </div>
        </section>
    )
}

export default DeliveryUser
