import { Icon } from '@iconify/react';
import { useState } from "react";
import { useDispatch } from 'react-redux/es/exports';
import { login } from '../../features/user';
const SignIn = () => {



    const [showPassword, setShowPassword] = useState(false)
    const dispatcher = useDispatch()

    const formData = {
        userName: '',
        password: ''
    };


    function addDataToForm(key, value) {
        formData[key] = value
    }
    function loginToSite(userData) {
        dispatcher(login(userData))
    }

    return (

        <form className="body log-in" onSubmit={(e) => {
            e.preventDefault()
            console.log(formData);
        }} >
            <div className={`fields fade-animation`}>
                <fieldset>
                    <legend><Icon icon="bx:user" color="black" />نام کاربری</legend>
                    <input type="text" onChange={(e) => { addDataToForm('userName', e.currentTarget.value) }} />
                </fieldset>
                <fieldset>
                    <legend><Icon icon="arcticons:passwordgenerator" color="black" />رمز عبور</legend>
                    <input type={showPassword === false ? 'password' : 'text'}
                        onChange={(e) => { addDataToForm('password', e.currentTarget.value) }} />
                    <div className="eye" onClick={() => { setShowPassword(!showPassword) }}>
                        {
                            showPassword === false ?
                                <Icon className="show-password-svg" icon="codicon:eye" color="black" /> :
                                <Icon className="show-password-svg" icon="codicon:eye-closed" color="black" />
                        }
                    </div>
                </fieldset>
            </div>
            <div className="need-help group">
                <small>فراموشی رمز عبور </small>
            </div>
            <div className="checks group">
                <input type="checkbox" />
                <small>ورود خودکار </small>
            </div>
            <div className="buttons">
                <button onClick={() => { loginToSite({ name: 'مهدی کمالی' }) }} >ورود</button>
            </div>
        </form>
    )
}

export default SignIn
