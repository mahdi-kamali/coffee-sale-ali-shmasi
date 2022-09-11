import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProductDetailWindow } from '../../../features/windows';
const Buttons = () => {

    const dispatcher = useDispatch()
    const navigator = useNavigate()

    function handleClose() {
        dispatcher(setProductDetailWindow('close'))
    }
    function hanldeShoppingCartClick() {
        handleClose();
        navigator('/shopping-cart')

    }




    return (
        <div className="buttons">
            <button onClick={handleClose}>
                <Icon icon="ic:outline-arrow-back-ios" color="black" />
                <span>بازگشت </span>
            </button>
            <button onClick={hanldeShoppingCartClick}>
                <Icon icon="ant-design:shopping-outlined" />
                <span>1</span>
            </button>
            <button>
                <Icon icon="akar-icons:heart" />
            </button>

        </div>
    )
}

export default Buttons
