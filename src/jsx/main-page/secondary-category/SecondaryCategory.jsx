import { useState } from "react"
import Category from "./components/Category"




const SecondaryCategory = () => {

    const [samples, setSamples] = useState([
        { link: '', image: require(`../../../images/main-category/${Math.floor( Math.random()*8 )}.png`) },
        { link: '', image: require(`../../../images/main-category/${Math.floor( Math.random()*8 )}.png`) },
    ]);


    return (
        <section className="secondary-category">

            {samples.map((cat, index) => {
                return (
                    <Category data={cat} key={index} />
                )
            })}

        </section>
    )
}

export default SecondaryCategory
