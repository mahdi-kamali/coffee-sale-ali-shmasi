import { useEffect, useState } from "react"
import Category from "./components/Category"

const PrimaryCategory = () => {

    const [categories, setCats] = useState([
        { link: '', image: require('../../../images/main-category/1.png') },
        { link: '', image: require('../../../images/main-category/2.png') },
        { link: '', image: require('../../../images/main-category/3.png') },
    ])



    return (
        <section className="primary-category">
            <Category data={categories[0]} />
            <Category data={categories[1]} />
            <Category data={categories[2]} />
        </section>
    )
}

export default PrimaryCategory
