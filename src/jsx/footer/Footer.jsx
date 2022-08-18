
const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={require('../../images/logo/4.png')} alt="" />
                <h1>Double Dot</h1>
            </div>
            <ul className="menu">
                <h1> خدمات مشتریان</h1>
                <li> رویه بازگردانی کالا </li>
                <li>شرایط استفاده </li>
                <li> حریم خصوصی </li>
                <li>گزارش باگ </li>
            </ul>
            <ul className="menu">
                <h1> راهنمای خرید از ما</h1>
                <li> نحوه ثبت نام </li>
                <li>رویه ارسال سفارش </li>
                <li> شیوه های پرداخت </li>
            </ul>
            <ul className="menu">
                <h1> راه های ارتباطی</h1>
                <li> آدرس : <span>تبریز - پاستور جدید - تقاطع ارتش جنوبی - فروشگاه دو نقطه</span> </li>
                <li> شماره تماس : <span> +98 914 394 09 45 </span> </li>
                <li> ایمیل : example@gmail.com </li>
                <li> پشتیبانی </li>
            </ul>
        </footer>
    )
}

export default Footer
