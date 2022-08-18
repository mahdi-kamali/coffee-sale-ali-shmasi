
const Mark = (props) => {
    if (
        props.step
    ) {
        return (
            <div className="mark">
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
