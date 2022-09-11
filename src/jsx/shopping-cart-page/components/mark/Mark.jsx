import { useSelector } from "react-redux"

const Mark = (props) => {


    const step = useSelector(state => state.shoppingCart.value.steps)

    if (
        step[props.index - 1].selected == true
    ) {
        return (
            <div className="mark" >
                <div className="border">
                </div>
                <div className="index">
                    {props.index}
                </div>
            </div>
        )
    } else {
        return ''
    }

}

export default Mark
