import { Icon } from '@iconify/react';
import Select from './components/form-groups/Select';
import Single from './components/form-groups/Single';
import Gallery from "./components/gallery/Gallery"
import AddToCart from './components/add-to-cart/AddToCart';
import Price from './components/price/Price';
import CirclePr from './components/progressers/CirclePr';
import LinePr from './components/progressers/LinePr';
import { fromPairs } from 'lodash';
import Delivery from './components/delivery/Delivery';

const InfoOne = ({ data }) => {
    const images = data.images
    const header = data.header
    const body = data.body

    function handleOnSubmit(e) {

        e.preventDefault();
        const myFormData = new FormData(e.target);

        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        console.log(formDataObj);

    }


    return (
        <div className="product-info-one">
            <div className="body">
                <div className="header">
                    {header.name}
                </div>
                <div className='address'>
                    {
                        header.address.map((item, index) => {
                            return (
                                <span key={index}>
                                    {item}
                                    <Icon icon="ci:chevron-big-left" color='black' />
                                </span>
                            )
                        })
                    }
                </div>
                <div className="ratings">
                    <h1>
                        <Icon icon="bxs:user" />
                        امتیاز این محصول :
                    </h1>
                    <span><Icon icon="emojione:star" /></span>
                    <span>{header.rating}</span>
                </div>
                <div className="available">
                    <h1>
                        <Icon icon="octicon:hash-16" />
                        موجودی این کالا :
                    </h1>
                    {header.available ?
                        <span className='green'>
                            <Icon icon="el:ok" />
                            موجود</span> :
                        <span className='red'>
                            <Icon icon="bi:x-lg" color="white" />
                            ناموجود</span>}
                </div>
                <div className="shipping">
                    <h1>
                        <Icon icon="material-symbols:local-shipping-sharp" />
                        ارسال به  :
                    </h1>
                    {header.shipping === 'all' ?
                        <span className='green'>
                            <Icon icon="el:ok" />
                            ارسال به تمامی نقاط ایران</span> :
                        <span className='yellow'>
                            <Icon icon="ic:baseline-local-library" />
                            فقط نواحی نزدیک</span>}
                </div>
                <div className="description border">
                    <h1>
                        <Icon icon="bi:box" />
                        توضیحات محصول :
                    </h1>
                    <p>
                        {body.description}
                    </p>
                </div>
                <div className="properties">
                    <h1>
                        <Icon icon="medical-icon:i-mental-health" />
                        خواص این محصول :
                    </h1>
                    <ul className="properties-body">
                        {body.properties.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className="progress">
                    <h1 className="progress-header">
                        <Icon icon="icon-park-outline:pure-natural" />
                        ویژگی ها :
                    </h1>
                    <div className="progress-body">
                        {body.visuals.map((item, index) => {
                            return (
                                <LinePr key={index} data={item} />
                            )
                        })}
                    </div>

                </div>
                <form id='form-id' className="form-one" onSubmit={handleOnSubmit}>
                    <h1>
                        <Icon icon="ep:select" />
                        مشخصات انتخابی شما :
                    </h1>
                    <div className='form-container'>
                        {body.form.defaults.map((item, index) => {
                            return (
                                <Single data={item} key={index} />
                            )
                        })}
                        {body.form.inputs.map((item, index) => {
                            switch (item.type) {
                                case 'select': return <Select data={item} key={index} />
                                default: { return '' }
                            }
                        })}
                    </div>

                </form>
            </div>
            <div className="right">
                <Gallery />
                <Price />
                <AddToCart form={'form-id'} />
                <Delivery />
            </div>
        </div>
    )
}

export default InfoOne
