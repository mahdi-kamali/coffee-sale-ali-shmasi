import { useState } from "react"
import Item from "./components/Item"
import { Icon } from '@iconify/react';



const Intro = () => {

    const [samples, setSamples] = useState([
        {
            svg: <Icon icon="cil:truck" color="black" />,
            header: 'Immediate delivery',
            body: ''
        },
        {
            svg: <Icon icon="ic:baseline-gpp-good" color="black" />,
            header: 'Ensuring health',
            body: ''
        },
        {
            svg: <Icon icon="ic:baseline-support-agent" color="black" />,
            header: '24 hour support',
            body: ''
        },
        {
            svg: <Icon icon="akar-icons:shipping-box-01" color="black" />,
            header: 'Free shipping',
            body: ''
        },
    ])


    return (
        <section className="intro">
            {samples.map((item, index) => {
                return (
                    <Item data={item} key={index} />
                )
            })}
        </section>
    )
}

export default Intro
