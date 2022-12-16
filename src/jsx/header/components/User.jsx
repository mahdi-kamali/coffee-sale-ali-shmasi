import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setUserWindow } from '../../features/windows';


const User = () => {

  const user = useSelector(state => state.user.value)
  const windwos = useSelector(state => state.windows.value)
  const dispatcher = useDispatch();

  function handleClickNotSigned() {
    if (user == undefined) {
      dispatcher(setUserWindow({ type: 'sign-in' }))
    }
  }

  function handleClickSigned() {
    if (user == undefined) {
      alert('ok')
    }
  }


  if (user) {
    return (
      <button className='user' onClick={handleClickSigned}>
        {user ? user.fullName : 'ورود / ثبت نام'}
        <Icon icon="ant-design:user-outlined" color="black" />
        {/* <div className="drop-down">
          <div className="user-panel">
            پنل کاربری
            <Icon icon="carbon:open-panel-filled-right" />
          </div>
          <div className="sign-out">
            خروج
            <Icon icon="codicon:sign-out" />
          </div>
        </div> */}
      </button>
    )
  }
  else {
    return (
      <>
        <button className='user' onClick={handleClickNotSigned}>{user ? user.fullName : 'ورود / ثبت نام'}<Icon icon="ant-design:user-outlined" color="black" /></button>
      </>
    )

  }

}

export default User
