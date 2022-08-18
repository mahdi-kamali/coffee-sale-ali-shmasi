import Carousel from '../../main-page/carousel/Carousel'
import { Icon } from '@iconify/react';
const SuggestionCarousel = () => {
    return (
        <section className="suggestion-carousel">
            <div className="suggestion-carousel-header">
                بر اساس علایق شما
                <Icon icon="emojione-monotone:eight-pointed-star" />
            </div>
            <div className="suggestion-carousel-body">
                <Carousel />
            </div>
        </section>
    )
}

export default SuggestionCarousel
