import Carousel from "../carousel/Carousel"
import { Icon } from '@iconify/react';
const CorporateProducts = (props) => {
    return (
        <section className="corporate-products">
            <h1 className="header"><Icon icon="bi:box-seam" color="black" /> محصولات شرکتی {props.id} </h1>
            <Carousel />
        </section>
    )
}

export default CorporateProducts
