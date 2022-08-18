import { useDispatch, useSelector } from "react-redux"
import { Icon } from '@iconify/react';
import { setUserWindow } from "../features/windows";
import { ReactComponent as SVG } from '../../svgs/8.svg'



import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";



const UserPage = () => {


    const userWindowState = useSelector(state => state.windows.value.user.type)
    const dispatcher = useDispatch()



    function closeWindow() {
        dispatcher(setUserWindow({ type: 'close' }))
    }

    if (userWindowState != 'close' && userWindowState) {
        return (

            <div className="user-page">
                <div className="container window-open-animation">
                    <div className="left">
                        <SVG />
                    </div>
                    <div className={`right fade-animation`}>
                        <div className="header">
                            <h1>{userWindowState === 'sign-in' ? 'ورود کاربری' : 'ثبت نام'}</h1>
                            <small>{
                                userWindowState === 'sign-in' ?
                                    'با وارد کردن اطلاعاتی که در حین ثبت نام وارد کرده اید میتوانید وارد سایت شده و از امکانات آن بهره ببرید.'
                                    : 'برای ثبت نام فیلد های زیر را پر کنید تا عضو سایت ما باشید'}</small>
                            <div className="page-state">
                                <button className={userWindowState === 'sign-in' ? 'selected' : ''} onClick={() => { dispatcher(setUserWindow({ type: 'sign-in' })) }}>ورود کاربری</button>
                                <button className={userWindowState === 'sign-up' ? 'selected' : ''} onClick={() => { dispatcher(setUserWindow({ type: 'sign-up' })) }}>ثبت نام</button>
                            </div>
                        </div>
                        {userWindowState === 'sign-in' ? <SignIn /> : <SignUp />}
                    </div>
                    <div className="close" onClick={closeWindow}>
                        <Icon icon="carbon:close-filled" color="black" />
                    </div>
                </div>
            </div >
        )
    }
}

export default UserPage
