import { useSelector } from "react-redux"

const Fee = () => {
  const step = useSelector(state => state.shoppingCart.value.steps[3].selected)
  return (
    <div className="fee">
      <div className="all group">
        <div className="left">
          <span>{'414,000'} تومان</span>
        </div>
        <div className="right">
          <label>قیمت کالاها</label>
          <small>قیمت اولیه کالا ها</small>
        </div>
      </div>
      <div className="shopping-fee group">
        <div className="left">
          <span>{'300,000'} تومان</span>
        </div>
        <div className="right">
          <label >جمع سبد خرید</label>
          <small > قیمت کلی  </small>
        </div>
      </div>
      <div className="alert">
        هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود
      </div>
      <div className="after-discount group">
        <div className="left">
          <span>{`${'(36%)'}`}</span>
          <span>{'146,000'} تومان</span>
        </div>
        <div className="right">
          سود شما از خرید
        </div>
      </div>
      <div className="buttons">
        <button className={`${step ? 'selected' : ''}`} >ادامه خرید</button>
      </div>
    </div>
  )
}

export default Fee
