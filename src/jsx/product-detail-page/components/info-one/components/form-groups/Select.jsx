import { useRef } from "react"
import { useState } from "react"

const Select = ({ data }) => {


    const [selected, setSelected] = useState(0)

    function handleClick(index) {
        setSelected(index)
    }

    if (data) {
        return (
            <div className="form-group select">
                <label >{data?.title} : </label>
                <div className="options">
                    {
                        data.options.map((option, index) => {
                            return (
                                <label
                                    className={selected === index ? 'selected' : ''}
                                    onClick={() => { handleClick(index) }}
                                    key={index} type="button">
                                    <input
                                        name={data?.name}
                                        defaultValue={selected === index ? option : ''}
                                        defaultChecked={selected === index ? option : ''}
                                        type="radio"
                                    />
                                    {option}

                                </label>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Select
