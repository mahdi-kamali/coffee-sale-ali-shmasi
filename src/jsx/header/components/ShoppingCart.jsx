import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {

  const [cartSize, setCartSize] = useState('5')
  const navigator = useNavigate()


  function goToShoppingCart() {
    navigator('/shopping-cart')
  }


  return (
    <button className='shopping-cart' onClick={goToShoppingCart}> <Icon icon="bi:bag" color="black" />   <span>{cartSize}</span></button>
  )
}

export default ShoppingCart
