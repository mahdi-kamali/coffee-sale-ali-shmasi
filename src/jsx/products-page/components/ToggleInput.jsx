import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setInput } from "../../features/filters";

const ToggleInput = (props) => {
    const option = props.option

    const dispatcher = useDispatch()

    const [toggle, setToggle] = useState(option.value)
    const [clickable, setClickable] = useState(false);

    function sendData(data) {
        dispatcher(setInput(
            dispatcher(setInput(
                {
                    ...option,
                    value: data.target.checked,
                },
            ))
        ))
    }

    function handleOnChange(event) {
        setToggle(event.target.checked)
        setClickable(true);
        setTimeout(() => {
            sendData(event)
            setToggle(false)
        },
            400)

    }

    function handleOnBlur(event) {

    }



    return (
        <div className="toggle-box">
            <label>
                <div className="titles">
                    <span>{toggle ? option.title.on : option.title.off}</span>
                    <span>{!toggle ? option.title.on : option.title.off}</span>
                </div>
                <input type="checkbox" onBlur={handleOnBlur} onChange={handleOnChange}
                    defaultChecked={toggle} onClick={undefined} disabled={clickable} />
            </label>
        </div>
    )
}

export default ToggleInput
