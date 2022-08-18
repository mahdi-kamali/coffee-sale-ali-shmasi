import { Icon } from '@iconify/react';
import Carousel from '../../main-page/carousel/Carousel'

const FavCarousel = () => {
    return (
        <section className="fav-carousel">
            <h1 className="favoriot-header">
                علاقه مندی ها
                <Icon icon="ant-design:heart-filled" color="#f24e1e" />
            </h1>
            <div className="favoriot-body">
                <Carousel />
            </div>
        </section>
    )
}

export default FavCarousel
