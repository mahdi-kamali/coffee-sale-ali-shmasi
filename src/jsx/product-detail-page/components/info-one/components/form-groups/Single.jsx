import { useState } from "react"

const Single = ({ data }) => {


    const options = [
        { value: 'نوع دانه یک' },
    ]
    const [selected, setSelected] = useState(4)


    function handleClick(index) {
        setSelected(index)
    }

    if (data) {
        return (
            <div className="form-group single">
                <label >{data?.title} : </label>
                <div className="options">
                    <span> {data?.value} </span>
                </div>
            </div>
        )
    }

}

export default Single
