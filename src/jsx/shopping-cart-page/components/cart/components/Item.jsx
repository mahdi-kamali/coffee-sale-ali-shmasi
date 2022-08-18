import { Icon } from '@iconify/react';


const Item = (props) => {
    // console.log(props.data)
    return (
        <div className="item">
            <div className="item-header">
                <div className="image">
                    <img src={props.data.image} alt="" />
                </div>

                <h1>تعداد</h1>
                <div className="count">
                    <Icon icon="akar-icons:plus" color="black" />
                    {2}
                    <Icon icon="akar-icons:minus" color="black" />
                </div>
            </div>
            <div className="item-body">
                <div className="name ">
                    {props.data.name}
                </div>
                <div className="color group" >
                    <div className="color-circle" style={{ backgroundColor: 'red' }}></div>
                    قرمز
                </div>
                <div className="guarantee group">
                    <Icon icon="ic:baseline-gpp-good" color="black" />
                    گارانتی اصالت و سلامت فیزیکی کالا
                </div>
                <div className="region group">
                    <Icon icon="carbon:delivery" color="black" />
                    ارسال به تمامی نقاط کشور
                </div>
                <div className="discount group">
                    <Icon icon="teenyicons:discount-solid" color="#f24e1e" />
                    <span>50,000</span> تومان
                </div>
                <div className="price group">
                    <span>196,000</span> تومان
                </div>
            </div>
        </div>
    )
}

export default Item
