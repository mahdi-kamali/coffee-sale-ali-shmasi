import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUserWindow } from '../../../features/windows';
import Mark from '../mark/Mark';

const DeliveryUser = () => {


    const user = useSelector(state => state.user.value)


    const dispatcher = useDispatch()

    function openUserWindows(typeOf) {
        dispatcher(setUserWindow({ type: typeOf }))
    }



    



    if (user === undefined) {
        return (
            <section className="delivery-user">
                <div className="delivery-user-header">
                    برای ادامه خرید شما باید وارد جساب کاربریتان شوید
                    <Icon icon="ant-design:user-outlined" />
                </div>
                <div className="delivery-user-body">
                    <div className="buttons">
                        <button onClick={() => { openUserWindows('sign-in') }} className="sign-in"><Icon icon="ri:login-box-line" color="black" />ورود</button>
                        <button onClick={() => { openUserWindows('sign-up') }} className="sign-up"><Icon icon="heroicons-solid:user-add" color="black" />
                            ثبت نام
                        </button>
                    </div>
                </div>
                <Mark index={1} />
            </section>
        )
    } else {
        return (
            <section className="delivery-user">
                <div className="delivery-user-header">
                    مشخصات خریدار
                    <Icon icon="ant-design:user-outlined" />
                </div>
                <div className="delivery-user-body">
                    <div className="info">
                        <h1>
                            {user.userName}
                            <span> نام کاربری : </span>
                        </h1>
                        <h2>
                            {user.fullName}
                            <span> نام و نام خانوادگی : </span>
                        </h2>
                        <h3>
                            {user.email}
                            <span> ایمیل : </span>
                        </h3>
                    </div>
                </div>
            </section>
        )

    }

}

export default DeliveryUser
