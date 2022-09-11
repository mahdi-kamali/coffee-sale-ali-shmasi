import { Icon } from '@iconify/react';
import { useState } from 'react';
import Item from '../../../main-page/intro/components/Item';
const Supports = () => {

    const [samples, setSamples] = useState([
        {

            svg: <Icon icon="cil:truck" color="black" />,
            header: 'تحویل فوری محصول',
            body: 'ارسال محصول به محض تایید و تحویل آنی پس دو روز کاری'
        },
        {
            svg: <Icon icon="ic:baseline-gpp-good" color="black" />,
            header: 'تضمین سلامت فیزیکی',
            body: 'ضمانت سالم بودن کالا از لحاض فیزیکی و بسته بندی'
        },
        {
            svg: <Icon icon="ic:baseline-support-agent" color="black" />,
            header: 'پشتیبانی 24 ساعته',
            body: 'همکاران ما به صورت ۲۴ ساعته آماده‌ی پاسخگویی هستند.'
        },
        {
            svg: <Icon icon="akar-icons:shipping-box-01" color="black" />,
            header: 'ارسال رایگان به سراسر کشور',
            body: 'برای خرید های بالای ۳۰۰  هزار تومان'
        },
    ])

    return (
        <div className="product-supports">
            {samples.map((item, index) => {
                return (
                    <Item data={item} key={index} />
                )
            })}
        </div>
    )
}

export default Supports
