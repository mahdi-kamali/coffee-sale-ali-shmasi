import Carousel from "../carousel/Carousel"
import { Icon } from '@iconify/react';
const RecentProducts = () => {
    return (
        <section className="recent-products">
            <h1 className="header"><Icon icon="bxs:time" color="black" /> آخرین محصولات </h1>
            <Carousel />
        </section>
    )
}

export default RecentProducts
