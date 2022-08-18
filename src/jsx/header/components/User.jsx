import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setUserWindow } from '../../features/windows';


const User = () => {

  const user = useSelector(state => state.user.value)
  const windwos = useSelector(state => state.windows.value)
  const dispatcher = useDispatch();

  function handleClick() {
    if (user == undefined) {
      dispatcher(setUserWindow({ type: 'sign-in' }))
    }
  }

  return (
    <>
      <button className='user' onClick={handleClick}>{user ? user.fullName : 'ورود / ثبت نام'}<Icon icon="ant-design:user-outlined" color="black" /></button>
    </>
  )
}

export default User
