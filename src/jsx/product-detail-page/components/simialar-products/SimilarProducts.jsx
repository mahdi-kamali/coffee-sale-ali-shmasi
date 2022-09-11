import React from 'react'
import Carousel from '../../../main-page/carousel/Carousel'

const SimilarProducts = () => {
  return (
    <div className='similar-products'>
      <h1>محصولات مشابه</h1>
      <Carousel  count={4.5} />
    </div>
  )
}

export default SimilarProducts
