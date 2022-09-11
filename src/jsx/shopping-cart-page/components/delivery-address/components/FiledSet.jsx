import { Icon } from '@iconify/react';
import { useState } from 'react';




const FiledSet = (props) => {

    const svg = props.svg
    const legend = props.legend
    const type = props.type
    const isNeeded = props.isNeeded
    const defaultValue = props.defaultValue





    const [click, setClick] = useState(false)

    function handleInputOnClick() {
        setClick(true)

    }

    function handleInputOnBlur() {
        setClick(false)
    }

    return (
        <fieldset>
            <legend><Icon icon={svg} color="black" />{legend}</legend>
            <textarea name={type} className={click ? 'clicked' : ''} type="text"
                onFocus={handleInputOnClick} onBlur={handleInputOnBlur}
                required={isNeeded}
                defaultValue={defaultValue}
            />
        </fieldset>
    )
}

export default FiledSet
