import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { setInput } from '../../features/filters'


const CheckBoxInput = (props) => {
    const option = props.option

    const dispatcher = useDispatch()


    function handleOnChange(event) {
        dispatcher(setInput({ id: option.id, title: option.title, value: event.target.checked }))
    }

    return (
        <label className='item check-box'>
            <input type="checkbox" name={option.title} id={props.option.id} onChange={handleOnChange} />
            <span>{option.title}</span>
        </label>
    )
}

export default CheckBoxInput
