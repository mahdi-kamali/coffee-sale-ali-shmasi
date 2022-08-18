import { useState } from "react"
import Day from "./components/Day"

const DeliveryDate = () => {

  const [selected, setSelected] = useState(1)

  return (
    <div className="delivery-date">
      <div className="date-header">انتخاب زمان ارسال</div>
      <div className="date-body" >
        <Day dayIndex={1} selected={selected === 1} setSelected={setSelected} />
        <Day dayIndex={2} selected={selected === 2} setSelected={setSelected} />
        <Day dayIndex={3} selected={selected === 3} setSelected={setSelected} />
        <Day dayIndex={4} selected={selected === 4} setSelected={setSelected} />
        <Day dayIndex={5} selected={selected === 5} setSelected={setSelected} />
        <Day dayIndex={6} selected={selected === 6} setSelected={setSelected} />
        <Day dayIndex={7} selected={selected === 7} setSelected={setSelected} />
      </div>
    </div>
  )
}

export default DeliveryDate
