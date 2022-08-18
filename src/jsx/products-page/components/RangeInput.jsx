import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { setInput } from '../../features/filters'
import { Icon } from '@iconify/react';
import { useRef } from 'react';
import { useState } from 'react';

const RangeInput = (props) => {
  const option = props.option


  const dispatcher = useDispatch()

  const firstInput = useRef()
  const secondInput = useRef()



  const [firstInputValue, setFirstInputValue] = useState(option.minSelected)
  const [secondInputValue, setSecondInputValue] = useState(option.maxSelected)


  function handleFirstInputChange(event) {
    setFirstInputValue(event.target.value)

  }

  function handleSecondInputChange(event) {
    setSecondInputValue(event.target.value)
  }

  function handleOnBlur() {
    dispatcher(setInput({
      ...option
      ,
      minSelected: firstInputValue,
      maxSelected: secondInputValue
    }))
  }





  function setPriceReadable(number) {
    const temp = number.toString().match(/.{3}/g);

    if (temp === undefined || temp === null) {

      return 0
    } else {
      let returnValue = ''
      for (let i = 0; i < temp.length; i++) {
        returnValue += temp[i] + ',';
      }
      returnValue = returnValue.slice(0, -1)
      return returnValue
    }

  }

  return (
    <label className='item range-box'>
      <div className='titles'>
        <small>
          <span>
            <Icon icon="oi:chevron-top" color="#0fa958" rotate={2} />
            از:
          </span>
          <h3>{setPriceReadable(firstInputValue)}</h3>
          تومان
        </small>
        <small>
          <span>
            <Icon icon="oi:chevron-top" color="#f24e1e" />
            تا :
          </span>
          <h3>{setPriceReadable(secondInputValue)}</h3>
          تومان
        </small>
      </div>
      <div className="inputs">
        <div>
          <h1>از</h1>
          <input ref={firstInput} type="range" name={'price-from'} min={props.option.min} max={props.option.max}
            onChange={handleFirstInputChange}
            onBlur={() => { handleOnBlur() }}
            defaultValue={option.minSelected}
            step={1000} />

        </div>
        <div>
          <h1>تا</h1>
          <input ref={secondInput} type="range" name={'price-to'} min={firstInputValue} max={props.option.max}
            onChange={handleSecondInputChange}
            defaultValue={option.maxSelected}
            onBlur={() => { handleOnBlur() }}
            step={1000} />
        </div>
      </div>
    </label>
  )
}

export default RangeInput
