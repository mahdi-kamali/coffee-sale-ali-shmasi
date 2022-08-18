import { Icon } from '@iconify/react';
import { useState } from "react";
import { useDispatch } from 'react-redux/es/exports';
import { signup } from '../../features/user';
import { setAlertWindow, setUserWindow } from '../../features/windows';
const SignUp = () => {


  const dispatcher = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const formData = {
    fullName: '',
    userName: '',
    password: '',
    email: ''
  };


  function addDataToForm(key, value) {
    formData[key] = value
  }

  function validateAndSignUp() {
    dispatcher(setAlertWindow({ state: 'show', color: 'green', text: 'در حال ثبت نام' }))
    setTimeout(() => {
      dispatcher(signup(formData));
      dispatcher(setUserWindow('close'))
      dispatcher(setAlertWindow({ state: 'hide' }))
    }, 3000)
  }

  return (
    <>
      <form className="body sign-in" onSubmit={(e) => {
        e.preventDefault()
        validateAndSignUp();
      }} >
        <div className={`fields  fade-animation `}>
          <fieldset>
            <legend><Icon icon="ic:round-drive-file-rename-outline" color="black" />نام و نام خانوادگی</legend>
            <input type="text" onChange={(e) => { addDataToForm('fullName', e.currentTarget.value) }} />
          </fieldset>
          <fieldset>
            <legend><Icon icon="bx:user" color="black" />نام کاربری</legend>
            <input type="text" onChange={(e) => { addDataToForm('userName', e.currentTarget.value) }} />
          </fieldset>
          <fieldset>
            <legend><Icon icon="arcticons:passwordgenerator" color="black" />رمز عبور</legend>
            <input type={showPassword === false ? 'password' : 'text'}
              onChange={(e) => { addDataToForm('password', e.currentTarget.value) }}
            />
            <div className="eye" onClick={() => { setShowPassword(!showPassword) }}>
              {
                showPassword === false ?
                  <Icon className="show-password-svg" icon="codicon:eye" color="black" /> :
                  <Icon className="show-password-svg" icon="codicon:eye-closed" color="black" />
              }
            </div>
          </fieldset>
          <fieldset>
            <legend><Icon icon="ic:twotone-alternate-email" color="black" />ایمیل</legend>
            <input type="email" name='email'
              onChange={(e) => { addDataToForm('email', e.currentTarget.value) }}
            />
          </fieldset>
        </div>
        <div className="buttons">
          <button >ثبت نام</button>
        </div>
      </form>
    </>
  )
}

export default SignUp
