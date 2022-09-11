import { useState } from "react"
import Day from "./components/Day"
import { Icon } from '@iconify/react';
import Mark from "../mark/Mark";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../../features/shoppingCart";
import { useEffect } from "react";
const DeliveryDate = () => {


  const dispatcher = useDispatch()

  const address = useSelector(state => state.shoppingCart.value.location)
  const date = useSelector(state => state.shoppingCart.value.date)

  const [selected, setSelected] = useState(date)


  useEffect(() => {
    dispatcher(setDate(selected))
  }, [
    selected
  ])

  return (
    <section className={`delivery-date ${address === undefined ? 'off-section' : ''}`}>
      <div className="date-header">
        انتخاب تاریخ ارسال
        <Icon icon="fontisto:date" />
      </div>
      <div className="date-body" >
        <Day dayIndex={1} selected={selected === 1} setSelected={setSelected} />
        <Day dayIndex={2} selected={selected === 2} setSelected={setSelected} />
        <Day dayIndex={3} selected={selected === 3} setSelected={setSelected} />
        <Day dayIndex={4} selected={selected === 4} setSelected={setSelected} />
        <Day dayIndex={5} selected={selected === 5} setSelected={setSelected} />
        <Day dayIndex={6} selected={selected === 6} setSelected={setSelected} />
        <Day dayIndex={7} selected={selected === 7} setSelected={setSelected} />
      </div>
      <Mark index={3} />
    </section>
  )
}

export default DeliveryDate
