import Lottie from 'lottie-react'


import animation from 
"../../../images/best-offers-2/gif/gift.json"
import { Icon } from '@iconify/react'
const BestOffersTwo = () => {
    return (
        <section className="best-offers-2">
            <div className="left">
                <Lottie
                    className="lottie"
                    loop={true}
                    animationData={animation}
                    play
                />
            </div>
            <div className="right">
                <h1>
                    Today's Gift For You !
                    <small>
                        This Offer Limited 
                        <br />
                        So Dont Miss that !
                    </small>
                </h1>
                <p>
                    <span>
                        If You Buy
                        4X
                    </span>
                    <Icon className='icon' icon="material-symbols:add-circle" />
                    <span>
                        You get 1 more
                    </span>
                  
                </p>
                <div className='clock'>
                    <Icon className='icon' icon="ic:sharp-access-time" />
                    <span>2:34:43</span>
                </div>
            </div>

        </section>
    )
}

export default BestOffersTwo
